import React from 'react';
import {useRouter} from 'next/router';
import EditTask from '../../../components/tasks/EditTask';
import Footer from "@/components/footer";
import Header from "@/components/header";

const EditTaskPage = () => {
    const router = useRouter();
    const {id} = router.query;

    const handleTaskUpdated = (updatedTask) => {
        console.log('Task updated:', updatedTask);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <main className="flex-grow container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
                {id && <EditTask taskId={id} onTaskUpdated={handleTaskUpdated}/>}
            </main>

            <Footer/>
        </div>
    );
};

export default EditTaskPage;
