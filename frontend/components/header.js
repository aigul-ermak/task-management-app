import Link from 'next/link';
import {useAuth} from "@/context/authContext";

export default function Header() {
    const {isAuthenticated, logout} = useAuth();

    const handleLogout = () => {
        logout();

    };

    return (
        <header className="bg-indigo-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:underline">Home </Link>
                        </li>
                        {!isAuthenticated ? (
                            <>
                                <li>
                                    <Link href="/register" className="hover:underline">Register</Link>
                                </li>
                                <li>
                                    <Link href="/login" className="hover:underline">Login </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/tasks" className="hover:underline">Tasks</Link>
                                </li>
                                <li>
                                    <Link href="/projects" className="hover:underline">Projects</Link>
                                </li>
                                <li>
                                    <Link href="/teams" className="hover:underline">Teams</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout} className="hover:underline">
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
