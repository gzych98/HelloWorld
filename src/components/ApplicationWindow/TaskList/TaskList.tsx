import React, { useState, useEffect } from 'react';
import './TaskList.css';
import { db, auth } from '../../../fireBase/firebaseConfig';
import { collection, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useOutletContext } from 'react-router-dom';

export interface Task {
    id: string;
    name: string;
    description?: string;
    duration: number;  // W minutach
    deadline?: string;
    timeSpent: number;
    completed: boolean;
}

interface TaskListProps {
    onActivateTask?: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = () => {
    const { onActivateTask } = useOutletContext<{ onActivateTask: (task: Task) => void }>();

    const [tasks, setTasks] = useState<Task[]>([]);
    const [activeTaskId, setActiveTaskId] = useState<string | null>(null); // Stan przechowujący ID aktywnego zadania
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [newTaskHours, setNewTaskHours] = useState(0);
    const [newTaskMinutes, setNewTaskMinutes] = useState(0);
    const [newTaskDeadline, setNewTaskDeadline] = useState('');
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        if (auth.currentUser) {
            const tasksCollection = collection(db, 'users', auth.currentUser.uid, 'tasks');

            const unsubscribe = onSnapshot(tasksCollection, (snapshot) => {
                const tasksList = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Task[];
                setTasks(tasksList);
            });

            return () => unsubscribe();
        }
    }, []);

    const convertMinutesToHoursAndMinutes = (totalMinutes: number) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    const addTask = async () => {
        const totalMinutes = newTaskHours * 60 + newTaskMinutes;

        try {
            const docRef = await addDoc(collection(db, 'users', auth.currentUser!.uid, 'tasks'), {
                name: newTaskName,
                description: newTaskDescription,
                duration: totalMinutes,
                deadline: newTaskDeadline,
                timeSpent: 0,
                completed: false,
            });

            await updateDoc(docRef, { id: docRef.id });

            const newTask: Task = {
                id: docRef.id,
                name: newTaskName,
                description: newTaskDescription,
                duration: totalMinutes,
                deadline: newTaskDeadline,
                timeSpent: 0,
                completed: false,
            };

            setTasks([...tasks, newTask]);

            // Czyszczenie pól po dodaniu zadania
            setNewTaskName('');
            setNewTaskDescription('');
            setNewTaskHours(0);
            setNewTaskMinutes(0);
            setNewTaskDeadline('');
            setIsFormVisible(false);

            console.log("New task added with ID:", newTask.id);
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const handleDeleteTask = async () => {
        if (taskToDelete && auth.currentUser) {
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

    const handleEditTask = (task: Task) => {
        setSelectedTask(task);
        setNewTaskName(task.name);
        setNewTaskDescription(task.description || '');
        setNewTaskHours(Math.floor(task.duration / 60));
        setNewTaskMinutes(task.duration % 60);
        setNewTaskDeadline(task.deadline || '');
        setIsFormVisible(true);
    };

    const updateTask = async () => {
        if (!selectedTask) return;

        const totalMinutes = newTaskHours * 60 + newTaskMinutes;

        try {
            const taskRef = doc(db, 'users', auth.currentUser!.uid, 'tasks', selectedTask.id);
            await updateDoc(taskRef, {
                name: newTaskName,
                description: newTaskDescription,
                duration: totalMinutes,
                deadline: newTaskDeadline,
            });

            setTasks(tasks.map(task =>
                task.id === selectedTask.id ? { ...task, name: newTaskName, description: newTaskDescription, duration: totalMinutes, deadline: newTaskDeadline } : task
            ));

            setIsFormVisible(false);
            setSelectedTask(null);
            console.log("Task updated with ID:", selectedTask.id);
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const activateTask = (task: Task) => {
        setActiveTaskId(task.id);
        if (onActivateTask) {
            onActivateTask(task);
        }
    };

    return (
        <div className="task-list-container">
            <button onClick={() => setIsFormVisible(true)} className="add-task-button">
                Dodaj zadanie
            </button>

            {isFormVisible && (
                <div className="task-form-fullscreen">
                    <div className="task-form-content">
                        <label htmlFor="taskName">Nazwa zadania:</label>
                        <input
                            id="taskName"
                            type="text"
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                            placeholder="Nazwa zadania"
                        />
                        <label htmlFor="taskDescription">Opis zadania:</label>
                        <textarea
                            id="taskDescription"
                            value={newTaskDescription}
                            onChange={(e) => setNewTaskDescription(e.target.value)}
                            placeholder="Opis zadania"
                        />
                        <label htmlFor="taskHours">Godziny:</label>
                        <input
                            id="taskHours"
                            type="number"
                            value={newTaskHours}
                            onChange={(e) => setNewTaskHours(parseInt(e.target.value))}
                            placeholder="Godziny"
                            min="0"
                        />
                        <label htmlFor="taskMinutes">Minuty:</label>
                        <input
                            id="taskMinutes"
                            type="number"
                            value={newTaskMinutes}
                            onChange={(e) => setNewTaskMinutes(parseInt(e.target.value))}
                            placeholder="Minuty"
                            min="0"
                            max="59"
                        />
                        <label htmlFor="taskDeadline">Termin:</label>
                        <input
                            id="taskDeadline"
                            type="date"
                            value={newTaskDeadline}
                            onChange={(e) => setNewTaskDeadline(e.target.value)}
                        />
                        {selectedTask ? (
                            <button onClick={updateTask} className="submit-task-button">Zaktualizuj zadanie</button>
                        ) : (
                            <button onClick={addTask} className="submit-task-button">Dodaj zadanie</button>
                        )}
                        <button onClick={() => { setIsFormVisible(false); setSelectedTask(null); }} className="close-task-form-button">
                            Zamknij
                        </button>
                    </div>
                </div>
            )}

            <hr className="task-list-divider" />
            <ul className="task-list">
                {tasks.map(task => (
                    <li
                        key={task.id}
                        className={`task-list-item ${task.id === activeTaskId ? 'active-task' : ''}`}
                    >
                        <div className="task-details">
                            <span className="task-name">{task.name}</span>
                            <span className="task-duration">
                                {convertMinutesToHoursAndMinutes(task.timeSpent)} / {convertMinutesToHoursAndMinutes(task.duration)}
                            </span>
                        </div>
                        <div className="task-actions">
                            <button className="preview-button" onClick={() => handleEditTask(task)}>Podgląd</button>
                            <button className="activate-button" onClick={() => activateTask(task)}>Aktywuj</button>
                            <button className="delete-task-button" onClick={() => setTaskToDelete(task)}>Usuń</button>
                        </div>
                    </li>
                ))}
            </ul>

            {taskToDelete && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Czy na pewno chcesz usunąć to zadanie? Tej czynności nie można cofnąć.</p>
                        <div className='modal-buttons'>
                            <button className="delete-task-button" onClick={handleDeleteTask}>Tak, usuń</button>
                            <button onClick={() => setTaskToDelete(null)}>Anuluj</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
