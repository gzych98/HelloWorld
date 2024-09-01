'use client'
// src\components\ApplicationWindow\TaskList\TaskList.tsx
import React, { useState, useEffect } from 'react';
import './TaskList.css';
import { db, auth } from '../../../fireBase/firebaseConfig';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useOutletContext } from 'react-router-dom';

export interface Task {
    id: string;
    name: string;
    duration: number;
    timeSpent: number;
    completed: boolean;
}

interface TaskListProps {
    onActivateTask?: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = () => {
    const { onActivateTask } = useOutletContext<{ onActivateTask: (task: Task) => void }>();

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDuration, setNewTaskDuration] = useState(0);
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            if (auth.currentUser) {
                const tasksCollection = collection(db, 'users', auth.currentUser.uid, 'tasks');
                const tasksSnapshot = await getDocs(tasksCollection);
                const tasksList = tasksSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Task[];
                setTasks(tasksList);
            }
        };

        fetchTasks();
    }, []);

    const addTaskToFirebase = async (newTask: Task) => {
        if (auth.currentUser) {
            try {
                const docRef = await addDoc(collection(db, 'users', auth.currentUser.uid, 'tasks'), newTask);
                return docRef.id;
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const addTask = async () => {
        const newTask: Task = {
            id: '',  // Początkowo puste ID
            name: newTaskName,
            duration: newTaskDuration,
            timeSpent: 0,
            completed: false,
        };

        try {
            // Dodanie nowego dokumentu do Firestore
            const docRef = await addDoc(collection(db, 'users', auth.currentUser!.uid, 'tasks'), {
                name: newTask.name,
                duration: newTask.duration,
                timeSpent: newTask.timeSpent,
                completed: newTask.completed,
            });

            // Przypisanie ID dokumentu do obiektu Task
            newTask.id = docRef.id;

            // Zaktualizowanie stanu zadań
            setTasks([...tasks, newTask]);

            // Czyszczenie pól po dodaniu zadania
            setNewTaskName('');
            setNewTaskDuration(0);

            console.log("New task added with ID:", newTask.id);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };


    const handleDeleteTask = async () => {
        if (taskToDelete && auth.currentUser) {
            console.log("Attempting to delete task with ID:", taskToDelete.id);

            try {
                const taskRef = doc(db, 'users', auth.currentUser.uid, 'tasks', taskToDelete.id);
                await deleteDoc(taskRef);
                setTasks(tasks.filter(task => task.id !== taskToDelete.id));
                setTaskToDelete(null);
                console.log("Deleted task with ID:", taskToDelete.id);
            } catch (e) {
                console.error("Error deleting document:", e);
            }
        } else {
            console.warn("Cannot delete task: User is not authenticated or task is invalid.");
        }
    };


    return (
        <div className="task-list-container">
            <h3>Task List</h3>
            <div className="task-input">
                <input
                    type="text"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Task name"
                />
                <input
                    type="number"
                    value={newTaskDuration}
                    onChange={(e) => setNewTaskDuration(parseInt(e.target.value))}
                    placeholder="Duration (minutes)"
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <hr className="task-list-divider" />
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-list-item">
                        <div className="task-details">
                            <span className="task-name">{task.name}</span>
                            <span className="task-duration">{task.timeSpent} / {task.duration} minutes</span>
                        </div>
                        <div className="task-actions">
                            <button onClick={() => onActivateTask && onActivateTask(task)}>Activate</button>
                            <button onClick={() => setTaskToDelete(task)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            {taskToDelete && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete this task? This action cannot be undone.</p>
                        <button onClick={handleDeleteTask}>Yes, delete</button>
                        <button onClick={() => setTaskToDelete(null)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
