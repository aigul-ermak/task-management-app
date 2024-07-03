import React, {useState} from 'react';
import axios from '../../utils/axios';

const TaskCreate = ({onTaskCreated}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleCreateTask = async () => {
        try {
            const response = await axios.post('/tasks', {title: newTitle, description: newDescription});
            onTaskCreated(response.data);
            setNewTitle('');
            setNewDescription('');
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    return (
        <div className="mb-4 text-black">
            <input
                type="text"
                placeholder="Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border p-2 mb-2 w-full"
            />
            <textarea
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="border p-2 mb-2 w-full"
            ></textarea>
            <button onClick={handleCreateTask} className="bg-green-500 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </div>
    );
};

export default TaskCreate;
