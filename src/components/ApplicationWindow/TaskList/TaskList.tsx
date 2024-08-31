import React, { useEffect } from 'react';
import './TaskList.css';

const TaskList: React.FC = () => {
    useEffect(() => {
        console.log('TaskList mounted');
    }, []);

    return (
        <div>
            <h3>Task List</h3>
            <p>Simple task list content for debugging.</p>
        </div>
    );
};

export default TaskList;
