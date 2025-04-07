
'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOut } from 'next-auth/react';

export default function Navbar() {
    const router = useRouter();

    const handleUserLogin = () => {
        router.push("/login");
    };
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center py-4 px-6 border-b border-[#c4a484] bg-[#fbdca9] relative">
          {/* Logo */}
          <h1 className="text-4xl md:text-6xl text-[#4a3222]">ReadVault</h1>
    
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#4a3222] text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
    
          {/* Menu Items */}
          <div
            className={`absolute top-full right-0 w-full md:w-auto md:static bg-[#fbdca9] md:flex md:space-x-6 text-[#4a3222] p-4 md:p-0 transition-all ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/" className="block md:inline hover:underline p-2">
              Home
            </Link>
            <Link href="/dashboard" className="block md:inline hover:underline p-2">
              Dashboard
            </Link>
            <button
            onClick={handleUserLogin}
              className="border px-4 py-1 rounded text-[#4a3222] hover:bg-[#8b5a2b] block md:inline"
            >
              Login
            </button>
            <button
              className="border px-4 py-1 rounded text-[#4a3222] hover:bg-[#8b5a2b] block md:inline"
              onClick={() => signOut({ callbackUrl: '/login' })}
            >
              Logout
            </button>
          </div>
        </nav>
      );
    };
    
