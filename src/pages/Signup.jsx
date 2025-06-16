import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak sama");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/signin");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#b57c51] flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-8">Sign Up</h2>

        {/* Email */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-4">
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
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-4">
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
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex items-center border rounded-md px-3 py-2 mb-4">
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
            placeholder="Repeat Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        {error && (
          <p className="text-center text-red-600 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#b57c51] hover:bg-[#9c6843] text-white py-2 rounded-md font-medium transition"
        >
          {loading ? "Loading..." : "Log In"}
        </button>

        <p className="text-sm text-center text-red-600 mt-3 cursor-pointer hover:underline">
          Forgot password?
        </p>

        <div className="my-4 flex items-center gap-4">
          <hr className="flex-grow border-t" />
          <span className="text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Social buttons */}
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
            Google
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm">
            <img src="https://www.svgrepo.com/show/157810/facebook.svg" className="w-5 h-5" />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm mt-6 text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-green-600 font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
