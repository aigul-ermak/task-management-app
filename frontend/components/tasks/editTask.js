import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
import {useRouter} from 'next/router';

const EditTask = ({taskId, onTaskUpdated}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`/tasks/${taskId}`);
                const task = response.data;
                setTitle(task.title);
                setDescription(task.description);
            } catch (error) {
                console.error('Failed to fetch task:', error);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleUpdateTask = async () => {
        try {
            const response = await axios.put(`/tasks/${taskId}`, {title, description});
            onTaskUpdated(response.data);
            router.push('/tasks');
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 mb-2 w-full text-black bg-gray-200"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 mb-2 w-full text-black bg-gray-200"
            ></textarea>
            <button onClick={handleUpdateTask} className="bg-blue-500 text-white px-4 py-2 rounded">
                Update Task
            </button>
        </div>
    );
};

export default EditTask;
