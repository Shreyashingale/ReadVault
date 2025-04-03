"use client"; // Ensure it's a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
export default function Home() {
  const router = useRouter();

  const handleUserLogin = ()=>{
    router.push('/login')
  }
  return (
    <div className="bg-[#fbdca9] min-h-screen px-22 py-4 font-serif">
      {/* Navbar */}
      
      <Navbar/>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-16">
        {/* Left Section */}
        <div className="max-w-lg">
          <h2 className="text-6xl text-[#4a3222] mb-4">Welcome to ReadVault</h2>
          <p className="text-[#4a3222] mb-6 text-lg">
            Explore a world of books and enhance your learning experience.
          </p>
          <button className="px-6 py-2 bg-[#bd723c] text-white text-lg rounded hover:bg-[#8b5a2b]">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/bookshelf.png"
            alt="Bookshelf"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      {/* Additional Section */}
      <div className="border-t border-[#c4a484] mt-12 pt-6 flex justify-center items-center space-x-12">
        {/* Browse Books Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#4a3222] mt-2">Browse Books</h3>
          <Image
            src="/browse-books.png"
            alt="Browse Books"
            width={300}
            height={200}
          />
        </div>
        
        <div className="h-16 w-px bg-[#4a3222]"></div>
        
        {/* Dictionary Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-[#4a3222] mt-2">Access Your Dictionary</h3>
          <Image
            src="/dictionary.png"
            alt="Dictionary"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
