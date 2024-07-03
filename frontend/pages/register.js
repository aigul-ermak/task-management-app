import { useState } from 'react';
import axios from "@/utils/axios";
import {useAuth} from "@/context/authContext";
import {useRouter} from "next/router";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const { login: authLogin } = useAuth();
    const router = useRouter();
    const handleRegister = async () => {
        try {
            const response = await axios.post('/users/registration', { login, email, password });
            console.log('Response:', response);
            if (response.status === 201) {
                authLogin();
                router.push('/');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
            <div className="container max-w-md mx-auto p-4 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
                <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Register
                </button>
            </div>
        </div>
    );
};
