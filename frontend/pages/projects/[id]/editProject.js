import { useRouter } from 'next/router';

export default function EditProject() {
    const router = useRouter();
    const { id } = router.query;


    const project = {
        _id: id,
        name: `Project ${id}`,
        description: `Description for Project ${id}`,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // logic
        console.log('Project updated');
    };

    const handleDelete = () => {
        //  logic
        console.log('Project deleted');
        router.push('/projects');
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name</label>
                    <input type="text" defaultValue={project.name} className="w-full border px-4 py-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea defaultValue={project.description} className="w-full border px-4 py-2 rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Update Project</button>
                <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete Project</button>
            </form>
        </div>
    );
}
