import React, { useState, useEffect } from 'react';
import axios from '@/utils/axios';
import {log} from "next/dist/server/typescript/utils";

const TeamCreate = ({ onTeamCreated }) => {
    const [name, setName] = useState('');
    const [project, setProject] = useState('');
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchProjects();
        fetchUsers();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/users/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const handleCreateTeam = async () => {
        try {
            const response = await axios.post('/teams', { name, project, members: selectedMembers });
            onTeamCreated(response.data);
            setName('');
            setProject('');
            setSelectedMembers([]);
        } catch (error) {
            console.error('Failed to create team:', error);
        }
    };

    const handleSelectMember = (userId) => {
        if (!selectedMembers.includes(userId)) {
            setSelectedMembers(prev => [...prev, userId]);
        }
    };

    const handleRemoveMember = (userId) => {
        setSelectedMembers(prev => prev.filter(id => id !== userId));
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Team Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-2 w-full text-black bg-gray-200"
            />
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Project</label>
                <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="border p-2 mb-2 w-full text-black bg-gray-200"
                >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                        <option key={project._id} value={project._id}>
                            {project.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Members</label>
                <select
                    onChange={(e) => handleSelectMember(e.target.value)}
                    className="border p-2 mb-2 w-full text-black bg-gray-200"
                >
                    <option value="">Select users to add</option>
                    {users.map((user) => (
                        <option key={user._id} value={user._id}>
                            {user.accountData.email}
                        </option>
                    ))}
                </select>
                <ul className="list-disc pl-5 mt-2">
                    {selectedMembers.map((userId) => {
                        const user = users.find(user => user._id === userId);
                        return (
                            <li key={userId}>
                                {user ? user.accountData.email : 'Unknown User'}
                                <button
                                    onClick={() => handleRemoveMember(userId)}
                                    className="ml-2 text-red-500"
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button onClick={handleCreateTeam} className="bg-green-500 text-white px-4 py-2 rounded">
                Create Team
            </button>
        </div>
    );
};

export default TeamCreate;
