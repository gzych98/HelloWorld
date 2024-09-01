'use client'
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
            id: '',
            name: newTaskName,
            duration: newTaskDuration,
            timeSpent: 0,
            completed: false,
        };

        const taskId = await addTaskToFirebase(newTask);
        if (taskId) {
            newTask.id = taskId;
            setTasks([...tasks, newTask]);
        }
        setNewTaskName('');
        setNewTaskDuration(0);
    };

    const handleTimerCompletion = async (taskId: string) => {
        if (auth.currentUser) {
            const taskRef = doc(db, 'users', auth.currentUser.uid, 'tasks', taskId);
            const task = tasks.find(task => task.id === taskId);
            if (task) {
                const updatedTask = { ...task, timeSpent: task.timeSpent + task.duration };
                await updateDoc(taskRef, { timeSpent: updatedTask.timeSpent });
                setTasks(tasks.map(t => (t.id === taskId ? updatedTask : t)));
            }
        }
    };

    const handleDeleteTask = async () => {
        if (taskToDelete && auth.currentUser) {
            const taskRef = doc(db, 'users', auth.currentUser.uid, 'tasks', taskToDelete.id);
            await deleteDoc(taskRef);
            setTasks(tasks.filter(task => task.id !== taskToDelete.id));
            setTaskToDelete(null);
        }
    };

    return (
        <div>
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
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={async () => {
                                if (auth.currentUser) {
                                    const taskRef = doc(db, 'users', auth.currentUser.uid, 'tasks', task.id);
                                    await updateDoc(taskRef, { completed: !task.completed });
                                    setTasks(tasks.map(t =>
                                        t.id === task.id ? { ...t, completed: !t.completed } : t
                                    ));
                                }
                            }}
                        />
                        {task.name} - {task.timeSpent} / {task.duration} minutes
                        <button onClick={() => onActivateTask && onActivateTask(task)}>Aktywuj zadanie</button>
                        <button onClick={() => setTaskToDelete(task)}>Delete</button>
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
