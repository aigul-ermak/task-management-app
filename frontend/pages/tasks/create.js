import React from 'react';
import TaskCreate from '../../components/tasks/taskCreate';
import Header from "@/components/header";
import Footer from "@/components/footer";

const CreateTaskPage = () => {
    const handleTaskCreated = (newTask) => {
        console.log('Task created:', newTask);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <main className="flex-grow container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Create Task</h1>
                <TaskCreate onTaskCreated={handleTaskCreated} />
            </main>

            <Footer/>
        </div>
    );
};

export default CreateTaskPage;
