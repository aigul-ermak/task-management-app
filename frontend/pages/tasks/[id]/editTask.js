

export default function EditTask() {
    const router = useRouter();
    const { id } = router.query;


    const task = {
        _id: id,
        title: `Task ${id}`,
        description: `Description for Task ${id}`,
        status: 'pending',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // logic
        console.log('Task updated');
    };

    const handleDelete = () => {
        // logic
        console.log('Task deleted');
        router.push('/tasks');
    };
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Title</label>
                    <input type="text" defaultValue={task.title} className="w-full border px-4 py-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea defaultValue={task.description} className="w-full border px-4 py-2 rounded"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Status</label>
                    <select defaultValue={task.status} className="w-full border px-4 py-2 rounded">
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Update Task</button>
                <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete Task</button>
            </form>
        </div>
    );
}
