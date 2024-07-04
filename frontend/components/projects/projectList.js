import React, {useState, useEffect} from 'react';
import axios from '@/utils/axios';
import Project from './Project';
import ProjectCreate from './ProjectCreate';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        }
    };

    const handleProjectCreated = (newProject) => {
        setProjects([...projects, newProject]);
    };

    const handleUpdateProject = (updatedProject) => {
        setProjects(projects.map(project => (project._id === updatedProject._id ? updatedProject : project)));
    };

    const handleDeleteProject = (projectId) => {
        setProjects(projects.filter(project => project._id !== projectId));
    };

    return (
        <div className="text-black">
            <h1 className="text-2xl font-bold text-white mb-4">Projects</h1>
            <ProjectCreate onProjectCreated={handleProjectCreated}/>
            {projects.map(project => (
                <Project key={project._id} project={project} onUpdate={handleUpdateProject}
                         onDelete={handleDeleteProject}/>
            ))}
        </div>
    );
};

export default ProjectList;
