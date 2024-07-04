import React, {useState} from 'react';
import axios from '@/utils/axios';

const Project = ({project, onUpdate, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState(project.status);

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/projects/${project._id}`, {name, description, status});
            onUpdate(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update project:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/projects/${project._id}`);
            onDelete(project._id);
        } catch (error) {
            console.error('Failed to delete project:', error);
        }
    };

    return (
        <div className="border text-white p-4 mb-2">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 mb-2 w-full text-black bg-gray-200"
                    />
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border p-2 mb-2 w-full text-black bg-gray-200"
                    ></textarea>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border p-2 mb-2 w-full text-black bg-gray-200"
                    >
                        <option value="not_started">Not Started</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Save
                    </button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-xl">{project.name}</h2>
                    <p>{project.description}</p>
                    <p>{project.status}</p>
                    <button onClick={() => setIsEditing(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
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

export default Project;
