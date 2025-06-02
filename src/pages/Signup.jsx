import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (fullName.trim().length < 3) {
      setError("Nama lengkap minimal 3 karakter");
      return;
    }
    if (!email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak sama");
      return;
    }

    setLoading(true);

    // Simulasi loading dan redirect ke dashboard
    setTimeout(() => {
      setLoading(false);
      navigate("/signin");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-md w-full"
      >
        <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-10 tracking-wide">
          Buat Akun Baru
        </h2>

        <div className="relative mb-8">
          <label
            htmlFor="fullName"
            className="block text-indigo-900 font-semibold mb-2"
          >
            Nama Lengkap
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Nama lengkap Anda"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            disabled={loading}  // disable input hanya saat loading
            className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div className="relative mb-8">
          <label
            htmlFor="email"
            className="block text-indigo-900 font-semibold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div className="relative mb-8">
          <label
            htmlFor="password"
            className="block text-indigo-900 font-semibold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Minimal 6 karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>

        <div className="relative mb-8">
          <label
            htmlFor="confirmPassword"
            className="block text-indigo-900 font-semibold mb-2"
          >
            Konfirmasi Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Ulangi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
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
          {loading ? "Mendaftar..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}