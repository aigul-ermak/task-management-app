import React, {useState, useEffect} from 'react';
import axios from "@/utils/axios";
import Task from './Task';
import TaskCreate from './taskCreate';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    const handleTaskCreated = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleUpdateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task._id !== taskId));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <TaskCreate onTaskCreated={handleTaskCreated}/>
            {tasks.map(task => (
                <Task key={task._id} task={task} onUpdate={handleUpdateTask} onDelete={handleDeleteTask}/>
            ))}
        </div>
    );
};

export default TaskList;
