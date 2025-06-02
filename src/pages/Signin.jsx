import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect ke dashboard setelah login berhasil
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-md w-full"
      >
        <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-10 tracking-wide">
          Selamat Datang
        </h2>

        {/* Email input */}
        <div className="relative mb-8">
          <label
            htmlFor="email"
            className="block text-indigo-900 font-semibold mb-2"
          >
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
            />
            {/* Icon email */}
            <svg
              className="w-6 h-6 text-indigo-400 absolute left-3 top-3.5 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" />
              <path d="M22 6L12 13 2 6" />
            </svg>
          </div>
        </div>

        {/* Password input */}
        <div className="relative mb-8">
          <label
            htmlFor="password"
            className="block text-indigo-900 font-semibold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Minimal 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
            />
            {/* Icon lock */}
            <svg
              className="w-6 h-6 text-indigo-400 absolute left-3 top-3.5 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
        </div>

        {error && (
          <p className="text-center text-red-600 font-semibold mb-6 animate-pulse">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-full text-white font-bold tracking-wider transition-all duration-300 ${
            loading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-indigo-700/50"
          }`}
        >
          {loading ? "Loading..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
