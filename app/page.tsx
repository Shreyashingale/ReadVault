import Image from "next/image";
import { prisma } from "@/lib/db";  // Absolute path (recommended)

export default async function Home() {
  const books = await prisma.book.findMany();
  console.log("Books : " , books)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    </div>
  );
}
