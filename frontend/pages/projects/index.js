import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectList from "@/components/projects/projectList";
import React from 'react';
import TasksPage from "@/pages/tasks";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>

            <main className="flex-grow container mx-auto py-8">
                <ProjectList/>
            </main>

            <Footer/>
        </div>
    );
};


export default ProjectsPage;