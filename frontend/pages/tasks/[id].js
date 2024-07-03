export default function TaskDetail() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task Title</h1>
            <p>Task Description</p>
            <p>Status: Pending</p>
            <a href="/tasks" className="text-blue-500">Back to Tasks</a>
        </div>
    );
}
