import React, {useState} from 'react';
import axios from '@/utils/axios';

const ProjectCreate = ({onProjectCreated}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('not_started');

    const handleCreateProject = async () => {
        try {
            const response = await axios.post('/projects', {name, description, status});
            onProjectCreated(response.data);
            setName('');
            setDescription('');
            setStatus('not_started');
        } catch (error) {
            console.error('Failed to create project:', error);
        }
    };

    return (
        <div className="mb-4 text-black">
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
            <button onClick={handleCreateProject} className="bg-green-500 text-white px-4 py-2 rounded">
                Add Project
            </button>
        </div>
    );
};

export default ProjectCreate;
