import React, { useState, useEffect } from 'react';
import axios from '@/utils/axios';

const Team = ({ team, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(team.name);
    const [members, setMembers] = useState(team.members);
    const [newMember, setNewMember] = useState('');
    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedProject, setSelectedProject] = useState(team.project);

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
            const response = await axios.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/teams/${team._id}`, { name, members, project: selectedProject });
            onUpdate(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to update team:', error);
        }
    };

    const handleAddMember = async () => {
        try {
            const response = await axios.put(`/teams/${team._id}/members/${newMember}`);
            onUpdate(response.data);
            setNewMember('');
        } catch (error) {
            console.error('Failed to add member to team:', error);
        }
    };

    const handleRemoveMember = async (userId) => {
        try {
            const response = await axios.delete(`/teams/${team._id}/members/${userId}`);
            onUpdate(response.data);
        } catch (error) {
            console.error('Failed to remove member from team:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`/teams/${team._id}`);
            onDelete(team._id);
        } catch (error) {
            console.error('Failed to delete team:', error);
        }
    };

    return (
        <div className="border text-white bg-blue-500 p-4 mb-2">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 mb-2 w-full text-black bg-gray-200"
                    />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Project</label>
                        <select
                            value={selectedProject}
                            onChange={(e) => setSelectedProject(e.target.value)}
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
                        <label className="block text-sm font-medium text-white">Add Member</label>
                        <select
                            value={newMember}
                            onChange={(e) => setNewMember(e.target.value)}
                            className="border p-2 mb-2 w-full text-black bg-gray-200"
                        >
                            <option value="">Select a user</option>
                            {users.map((user) => (
                                <option key={user._id} value={user._id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleAddMember} className="bg-green-500 text-white px-4 py-2 rounded">
                            Add Member
                        </button>
                    </div>
                    <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                        Save
                    </button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h2 className="text-xl">{team.name}</h2>
                    <ul>
                        {members.map((member) => (
                            <li key={member._id}>
                                {member.name}
                                <button onClick={() => handleRemoveMember(member._id)} className="bg-red-500 text-white px-2 py-1 ml-2 rounded">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
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

export default Team;
