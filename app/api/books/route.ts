import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Move the config to `lib/auth.ts`

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Get user from email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  // Now that you have the user ID, fetch associated books
  const books = await prisma.book.findMany({
    where: { userId: user.id },
  });

  return NextResponse.json(books);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Get user from email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  const { title } = await req.json();

  if (!title || typeof title !== "string") {
    return NextResponse.json({ message: 'Invalid or missing title' }, { status: 400 });
  }

  try {
    const book = await prisma.book.create({
      data: {
        title,
        userId: user.id,
      },
    });

    return NextResponse.json(book, { status: 201 }); // returning created book instead of []
  } catch (error) {
    console.error("Error creating book:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
