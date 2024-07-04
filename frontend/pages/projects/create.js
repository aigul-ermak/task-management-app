import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectCreate from "@/components/projects/projectCreate";

const CreateProjectPage = () => {
    const handleProjectCreated = (newProject) => {
        console.log('Project created:', newProject);
    };

    return (
        <div className="container mx-auto p-4">
            <Header/>

            <h1 className="text-2xl font-bold mb-4">Create Project</h1>
            <ProjectCreate onProjectCreated={handleProjectCreated}/>

            <Footer/>
        </div>
    );
};

export default ProjectCreatePage;