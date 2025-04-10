import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    const paramsData = await params;
    const bookId = paramsData.id;
    const body = await req.json();
    const { content } = body;

    try {
        const lesson = await prisma.lesson.create({
            data: {
                content,
                bookId,
            },
        });

        return new Response(JSON.stringify(lesson), { status: 201 });
    } catch (err) {
        console.error("Error adding lesson:", err);
        return new Response(JSON.stringify({ error: "Failed to add lesson" }), { status: 500 });
    }
}
