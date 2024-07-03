export default function TaskList() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Tasks</h1>
            <a href="/tasks/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create New Task</a>
            <ul className="mt-4">
                <li className="border p-4 mb-2">
                    <h2 className="text-xl">Task Title</h2>
                    <p>Task Description</p>
                    <a href="/tasks/1" className="text-blue-500">View Details</a>
                </li>
            </ul>
        </div>
    );
}
