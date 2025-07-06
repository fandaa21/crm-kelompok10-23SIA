import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // State untuk menyimpan data user yang login, diambil dari localStorage jika ada
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const navigate = useNavigate();

    // Fungsi untuk "login"
    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        // Arahkan berdasarkan role setelah login
        if (userData.role === 'admin') {
            navigate('/dashboard');
        } else {
            navigate('/User');
        }
    };

    // Fungsi untuk "logout"
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/'); // Kembali ke halaman utama
    };

    const value = {
        user,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook untuk mempermudah penggunaan
export const useAuth = () => {
    return useContext(AuthContext);
};