import React from 'react'
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Login() {
    const { login, loading, error } = useAuth();

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [localError, setLocalError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const role = await login(username, password);
            if (role === "ROLE_ADMIN") {
                navigate("/admin/users")
            }
            else if (role === "ROLE_USER") {
                navigate("/user/profile");
            }
        }
        catch (err) {
            setLocalError(err.message);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-20 bg-white p-8 rounded-xl shadow-lg space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login
                </h2>

                {(error || localError) && (
                    <p className="text-red-500 text-sm text-center font-medium">
                        {error || localError}
                    </p>
                )}

                {/* Username */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-transparent transition"
                        placeholder="Enter your username"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-transparent transition"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-lg font-semibold text-white transition
      ${loading
                            ? "bg-blue-300 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
            

<p className="text-sm text-gray-600">
  Don&apos;t have an account?{" "}
  <Link
    to="/signup"
    className="text-blue-600 font-medium hover:underline"
  >
    Sign up
  </Link>
</p>


        </div>
    )
}
