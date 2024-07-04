import React from 'react';
import TaskList from '../../components/tasks/taskList';
import Header from "@/components/header";
import Footer from "@/components/footer";

const TasksPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow container mx-auto py-8">
                <TaskList/>
            </main>

            <Footer/>
        </div>
    );
};

export default TasksPage;
