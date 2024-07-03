export default function ProjectDetail() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Project Title</h1>
            <p>Project Description</p>
            <p>Status: Pending</p>
            <a href="/projects" className="text-blue-500">Back to Project</a>
        </div>
    );
}