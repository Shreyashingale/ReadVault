import Image from "next/image";
import { prisma } from "@/lib/db";  // Absolute path (recommended)

export default async function Home() {
  const books = await prisma.book.findMany();
  console.log("Books : ", books)
  return (
    <div>
    </div>
  );
}
