import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 2. Mengubah handleSubmit menjadi fungsi async
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validasi dasar tetap di sini
    if (!email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);

    try {
      // 3. Proses Login ke Supabase
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (authError) {
        // Jika ada error dari Supabase (misal: password salah), tampilkan pesannya
        throw authError;
      }

      // 4. Jika login berhasil, ambil profil untuk mendapatkan role
      if (authData.user) {
        // Kode Baru (Lebih Aman)
        const { data: profiles, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', authData.user.id);

        if (profileError) {
          throw profileError;
        }
        if (!profiles || profiles.length === 0) {
          // Jika tidak ada profil, berikan pesan error yang jelas
          throw new Error("Login berhasil, tetapi profil pengguna tidak ditemukan.");
        }

        const profileData = profiles[0];

        // 5. Arahkan pengguna berdasarkan rolenya
        if (profileData && profileData.role === 'admin') {
          navigate("/"); // Arahkan ke dashboard admin
        } else {
          navigate("/User"); // Arahkan ke dashboard user biasa
        }
      }
    } catch (error) {
      setError(error.error_description || error.message);
    } finally {
      setLoading(false); // Hentikan loading, baik berhasil maupun gagal
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-8 rounded-xl shadow-lg"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo1.png" alt="logo" className="h-12" />
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Log in
        </h2>

        {/* Email */}
        <div className="mb-4">
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-amber-400">
            {/* ... SVG Ikon Email ... */}
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
        <div className="mb-6">
          <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-amber-400">
            {/* ... SVG Ikon Password ... */}
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
          className={`w-full py-3 rounded-md text-white font-semibold ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#b57c51] hover:bg-[#9c6843]"
            } transition-all`}
        >
          {loading ? "Loading..." : "Log In"}
        </button>

        {/* Forgot Password */}
        <p className="mt-4 text-sm text-center text-gray-500">
          <a href="#" className="font-medium text-amber-600 hover:underline">
            Forgot password?
          </a>
        </p>
      </form>
    </div>
  );
}