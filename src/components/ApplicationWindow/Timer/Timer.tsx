import React, { useEffect, useState } from 'react';
import './Timer.css';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db, auth } from '../../../fireBase/firebaseConfig';

interface TimerProps {
    task: {
        id: string;
        name: string; // Dodane pole name
        duration: number;
    };
    onTimerComplete?: (taskId: string) => void; // Opcjonalnie, jeśli potrzebujesz wywołania dodatkowej funkcji po zakończeniu
}

const Timer: React.FC<TimerProps> = ({ task, onTimerComplete }) => {
    const [timeLeft, setTimeLeft] = useState(5 * 60); // Domyślnie 5 minut
    const [isRunning, setIsRunning] = useState(false);
    const [initialTime, setInitialTime] = useState(5 * 60); // Domyślnie 5 minut

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
                console.log(`Time left: ${timeLeft - 1} seconds`);
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            console.log(`Timer completed for task ID: ${task.id}`);
            handleTimerCompletion(task.id, initialTime / 60);  // Przekazanie czasu spędzonego w minutach
            setIsRunning(false);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning, timeLeft]);

    const handleTimerCompletion = async (taskId: string, timeSpent: number) => {
        if (auth.currentUser) {
            const taskRef = doc(db, 'users', auth.currentUser.uid, 'tasks', taskId);
            try {
                console.log(`Updating timeSpent for task ID: ${taskId} with ${timeSpent} minutes`);
                await updateDoc(taskRef, {
                    timeSpent: increment(timeSpent)
                });
                console.log(`Successfully added ${timeSpent} minutes to task with ID ${taskId}`);
            } catch (error) {
                console.error("Error updating timeSpent:", error);
            }
        } else {
            console.warn("User is not authenticated or task is invalid.");
        }

        if (onTimerComplete) {
            onTimerComplete(taskId);
        }
    };

    const startTimer = () => {
        console.log(`Starting timer with ${initialTime} seconds`);
        setTimeLeft(initialTime);
        setIsRunning(true);
    };

    const handleTimeChange = (hours: number, minutes: number) => {
        const totalSeconds = hours * 3600 + minutes * 60;
        setInitialTime(totalSeconds);
        console.log(`Set time: ${hours} hours, ${minutes} minutes (${totalSeconds} seconds)`);
    };

    const percentageLeft = (timeLeft / initialTime) * 100;

    return (
        <div className="timer-container">
            <h4>{task.name}</h4> {/* Wyświetlanie nazwy zadania */}
            <div className="timer-settings">
                <label>
                    Godziny:
                    <input
                        type="number"
                        min="0"
                        value={Math.floor(initialTime / 3600)}
                        onChange={(e) => handleTimeChange(parseInt(e.target.value), Math.floor((initialTime % 3600) / 60))}
                    />
                </label>
                <label>
                    Minuty:
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={Math.floor((initialTime % 3600) / 60)}
                        onChange={(e) => handleTimeChange(Math.floor(initialTime / 3600), parseInt(e.target.value))}
                    />
                </label>
            </div>
            <div className="timer-display">
                <p>{`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`}</p>
                <div className="timer-progress-bar">
                    <div className="timer-progress" style={{ width: `${percentageLeft}%` }}></div>
                </div>
            </div>
            <button onClick={startTimer} disabled={isRunning || initialTime === 0}>
                Start
            </button>
        </div>
    );
};

export default Timer;
