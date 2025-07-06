import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const ADMIN_USER = { email: 'admin@hotel.com', password: 'admin', role: 'admin' };
const NORMAL_USER = { email: 'user@hotel.com', password: 'user', role: 'user' };

export default function Login() {
  const { login } = useAuth(); // Ambil fungsi login dari context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => { // Kita tetap pakai setTimeout untuk efek loading
      if (email === ADMIN_USER.email && password === ADMIN_USER.password) {
          login(ADMIN_USER); // Panggil fungsi login dengan data admin
      } else if (email === NORMAL_USER.email && password === NORMAL_USER.password) {
          login(NORMAL_USER); // Panggil fungsi login dengan data user
      } else {
          setError("Email atau password salah.");
      }
      setLoading(false);
  }, 1000);
};

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-10 rounded-xl shadow-xl"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="logo" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Log in
        </h2>

        {/* Email */}
        <div className="mb-4">
          <div className="flex items-center border rounded-md px-3 py-2">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6L12 13 2 6" />
            </svg>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-700"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="flex items-center border rounded-md px-3 py-2">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-700"
              required
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md text-white font-medium ${
            loading
              ? "bg-amber-300 cursor-not-allowed"
              : "bg-[#b57c51] hover:bg-[#9c6843]"
          } transition-all`}
        >
          {loading ? "Loading..." : "Log In"}
        </button>

        {/* Forgot Password */}
        <p className="mt-4 text-sm text-center text-red-600 font-medium cursor-pointer hover:underline">
          Forgot password?
        </p>
      </form>
    </div>
  );
}
