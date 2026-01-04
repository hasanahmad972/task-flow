import React from 'react'
import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        token: null,
        user: null,
        role: null,

    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const username = localStorage.getItem("username");

        if (token && role && username) {
            setAuth({ token, role, username });
        }

        setLoading(false);
    }, []);

    const login = async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post("http://localhost:8081/auth/login", { username, password });
            const { token, role, username: uname } = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("username", uname);
            setAuth({ token, role, username: uname });
            return role;
        }
        catch (err) {
            setError("Login failed. Please try again.");
            throw err;
        }
        finally {
            setLoading(false);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        setAuth({ token: null, role: null, username: null });
    };
    const signup = async (username, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                "http://localhost:8081/auth/signup",
                { username, password }
            );

            return {
                success: true,
                mssg: response.data,
            };

        } catch (err) {
            console.error("Signup error:", err);

            return {
                success: false,
                mssg:
                    err.response?.data ||
                    err.message ||
                    "Signup failed",
            };

        } finally {
            setLoading(false);
        }
    };


    return (
        <AuthContext.Provider
            value={{
                signup,
                auth,
                login,
                logout,
                loading,
                error,
            }}>
            {children}
        </AuthContext.Provider>
    );
}

// 🔹 custom hook
export const useAuth = () => useContext(AuthContext);


 