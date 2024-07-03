export default function CreateTask() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create New Task</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Title</label>
                    <input type="text" className="w-full border px-4 py-2 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Description</label>
                    <textarea className="w-full border px-4 py-2 rounded"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Status</label>
                    <select className="w-full border px-4 py-2 rounded">
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Task</button>
            </form>
        </div>
    );
}
