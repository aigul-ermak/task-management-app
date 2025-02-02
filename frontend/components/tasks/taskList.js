import React, {useState, useEffect} from 'react';
import axios from "@/utils/axios";
import Task from './Task';
import TaskCreate from './taskCreate';
import { useAuth } from "@/context/authContext";

const TaskList = () => {
    const { isAuthenticated } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [ws, setWs] = useState(null);

    useEffect(() => {
        if (isAuthenticated) {
            fetchTasks();
            const ws = new WebSocket('ws://localhost:3000');
            ws.onmessage = (event) => {
                const message = JSON.parse(event.data);
                handleWebSocketMessage(message);
            };
            setWs(ws);
        }
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [isAuthenticated]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
        }
    };

    const handleWebSocketMessage = (message) => {
        switch (message.event) {
            case 'taskCreated':
                setTasks((prevTasks) => [...prevTasks, message.task]);
                break;
            case 'taskUpdated':
                setTasks((prevTasks) =>
                    prevTasks.map((task) => (task._id === message.task._id ? message.task : task))
                );
                break;
            case 'taskDeleted':
                setTasks((prevTasks) => prevTasks.filter((task) => task._id !== message.taskId));
                break;
            default:
                break;
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

    if (!isAuthenticated) {
        return <p>Please log in to view tasks.</p>;
    }

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
