import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Move the config to `lib/auth.ts`

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);
    console.log("Sessions : ", session);
  
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
    if (!session) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const { title, author } = await req.json();
    //   const book = await prisma.book.create({
    //     data: { title, userId: session.user.id },
    //   });

    return NextResponse.json([], { status: 201 });
}
