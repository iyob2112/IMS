"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/e6/b6/e7/e6b6e7b1f782a3c01cdcea20c97fab80.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glass Card */}
      <div
        className="relative z-10 w-full max-w-sm rounded-2xl p-6 sm:p-8
        bg-white/10 backdrop-blur-md
        border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >

        {/* Title */}
        <h1 className="text-sky-400 text-center text-xl font-semibold tracking-wide">
          Shop Inventory System
        </h1>

        <h2 className="text-white text-center text-3xl font-bold mt-2 mb-6">
          Login
        </h2>

        {/* Email */}
        <label className="text-white text-xs">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full mt-2 mb-4 p-3 rounded-xl
          bg-white/5 border border-white/30
          text-white placeholder:text-white/40
          focus:outline-none focus:ring-2 focus:ring-sky-400
          transition"
        />

        {/* Password */}
        <label className="text-white text-xs">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full mt-2 mb-6 p-3 rounded-xl
          bg-white/5 border border-white/30
          text-white placeholder:text-white/40
          focus:outline-none focus:ring-2 focus:ring-sky-400
          transition"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl font-semibold text-white
          bg-sky-500 hover:bg-sky-600
          shadow-lg shadow-sky-500/30
          active:scale-[0.98] transition"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-center text-white/70 text-xs mt-6">
          Don’t have an account?{" "}
          <span className="text-sky-400 font-semibold cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}