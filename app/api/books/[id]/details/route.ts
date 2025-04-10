import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const paramsData = await params;
  const bookId = paramsData.id;
  console.log("books id : ", bookId)
  try {
    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    const lessons = await prisma.lesson.findMany({
      where: { bookId },
    });

    const dictionary = await prisma.dictionary.findMany({
      where: { bookId },
    });
    return NextResponse.json({ book, lessons, dictionary });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
