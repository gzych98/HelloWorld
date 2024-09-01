import React, { useEffect, useState } from 'react';

interface TimerProps {
    task: {
        id: string; // Typ id jako string
        duration: number;
    };
    onTimerComplete: (taskId: string) => void; // Typ taskId jako string
}

const Timer: React.FC<TimerProps> = ({ task, onTimerComplete }) => {
    const [timeLeft, setTimeLeft] = useState(task.duration * 60); // w sekundach
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            onTimerComplete(task.id);
            setIsRunning(false);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isRunning, timeLeft]);

    const startTimer = () => {
        setIsRunning(true);
    };

    return (
        <div>
            <h4>Timer</h4>
            <p>{`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`}</p>
            <button onClick={startTimer} disabled={isRunning}>Start Timer</button>
        </div>
    );
};

export default Timer;
