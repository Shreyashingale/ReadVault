import Image from "next/image";

export default function LoginPage() {

  return (
    <div className="flex h-screen items-center justify-center bg-[#f4e0c9]">
      <div className="flex w-3/4 max-w-4xl shadow-lg rounded-lg overflow-hidden bg-[#f4e0c9]">
        {/* Left Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-[#4a3222] mb-6">ReadVault</h1>
          <Image
            src="/coffee-book.png"
            alt="Coffee and Book"
            width={150}
            height={150}
            className="mb-4"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-[#e3c5a8] p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#4a3222] mb-6">Login</h2>
          <form >
            <label className="block text-[#4a3222] mb-2">Email</label>
            <input
              type="email"
            
              className="w-full px-4 py-2 mb-4 border rounded bg-[#f4e0c9] text-[#4a3222] focus:outline-none focus:ring-2 focus:ring-[#a97c50]"
            />
            
            <label className="block text-[#4a3222] mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mb-6 border rounded bg-[#f4e0c9] text-[#4a3222] focus:outline-none focus:ring-2 focus:ring-[#a97c50]"
            />
            
            <button type="submit" className="w-full bg-[#a97c50] text-white py-2 rounded text-lg hover:bg-[#8b5a2b]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
