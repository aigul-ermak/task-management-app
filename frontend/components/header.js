import Link from 'next/link';
import {useState} from 'react';

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogout = () => {
        // logic
        setIsAuthenticated(false);
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        {!isAuthenticated ? (
                            <>
                                <li>
                                    <Link href="/" className="hover:underline">Home </Link>
                                </li>
                                <li>
                                    <Link href="/register" className="hover:underline">Register</Link>
                                </li>
                                <li>
                                    <Link href="/login" className="hover:underline">Login </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <button onClick={handleLogout} className="hover:underline">
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
