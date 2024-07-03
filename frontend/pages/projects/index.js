import Link from 'next/link';

export default function ProjectList() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <a href="/projects/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create Project</a>
            <ul className="mt-4">
                <li className="border p-4 mb-2">
                    <h2 className="text-xl">Project Title</h2>
                    <p>Project Description</p>
                    <a className="text-blue-500">View Details</a>
                </li>
            </ul>
        </div>
    );
}
