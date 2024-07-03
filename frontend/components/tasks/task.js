import React, { useState } from 'react';
import axios from "@/utils/axios";

const Task = ({ task, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/tasks/${task._id}`, { title, description });
            onUpdate(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update task:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/tasks/${task._id}`);
            onDelete(task._id);
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    return (
        <div className="border p-4 mb-2">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 mb-2 w-full"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 mb-2 w-full"
                    ></textarea>
                    <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Save
                    </button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-xl">{task.title}</h2>
                    <p>{task.description}</p>
                    <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Edit
                    </button>
                    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                        Delete
                    </button>
                </>
            )}
        </div>
    );
};

export default Task;
