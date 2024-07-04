import React from 'react';
import { useRouter } from 'next/router';
import EditProject from '@/components/projects/EditProject';

const EditProjectPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const handleProjectUpdated = (updatedProject) => {
        console.log('Project updated:', updatedProject);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
            {id && <EditProject projectId={id} onProjectUpdated={handleProjectUpdated} />}
        </div>
    );
};

export default EditProjectPage;
