import React from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [successmssg, setSuccessmssg] = useState("");
  const [errmssg, setErrmssg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("CLICK WORKING");
    const result = await signup(username, password);
    if (result.success) {
      setSuccessmssg(result.mssg);
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    }
    else {
      setErrmssg(result.mssg);
      setSuccessmssg("");
    }
  }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-800">
      Admin Signup
    </h2>

    {/* Username */}
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />

    {/* Password */}
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />

    {/* Button */}
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded-lg
                 hover:bg-blue-700 transition disabled:opacity-60"
    >
      {loading ? "Please wait..." : "Sign Up"}
    </button>

    {/* Messages */}
    {successmssg && (
      <p className="text-green-600 text-sm text-center">
        {successmssg}
      </p>
    )}

    {errmssg && (
      <p className="text-red-600 text-sm text-center">
        {errmssg}
      </p>
    )}
  </form>
</div>

  )
}
