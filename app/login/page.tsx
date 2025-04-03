"use client"
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      alert("Invalid credentials");
    } else {
      router.push("/dashboard"); // Redirect after login
    }
  };
  return (
    <div className="bg-[#edd4ad] min-h-screen flex flex-col px-22 py-4 items-center font-serif">
      {/* Page Title */}
      <h1 className="text-5xl text-[#4a3222] self-start">ReadVault</h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-24 w-full max-w-4xl">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/coffee-book.png"
            alt="Coffee and Book"
            width={350}
            height={250}
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 bg-[#edd4ad] text-center">
          <h2 className="text-5xl text-[#4a3222] mb-6">Login</h2>

          {/* Email Input */}
          <div className="mb-4 text-left">
            <label className="block text-[#4a3222] font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full p-3 border border-[#4a3222] rounded bg-[#e3c599] focus:outline-none focus:ring-2 focus:ring-[#8b5a2b] shadow-inner text-[#4a3222]"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 text-left">
            <label className="block text-[#4a3222] font-semibold mb-1">Password</label>
            <input
              type="password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-[#4a3222] rounded bg-[#e3c599] focus:outline-none focus:ring-2 focus:ring-[#8b5a2b] shadow-inner text-[#4a3222]"
            />
          </div>

          {/* Login Button */}
          <button className="px-10 py-2 bg-[#bd723c] text-white text-lg rounded hover:bg-[#8b5a2b]" onClick={handleLogin}>
            Login
          </button>

          <p className="mt-4 text-[#4a3222]">Don't have an account? <a href="#" className="text-[#8b5a2b] underline">Sign up</a></p>

        </div>
      </div>
    </div>
  );
}
