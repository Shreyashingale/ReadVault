import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const paramsData = await params;
    const bookId = paramsData.id;
    const body = await req.json();
    const { word, meaning } = body;

    try {
        const entry = await prisma.dictionary.create({
            data: {
                word,
                meaning,
                bookId,
            },
        });

        return new Response(JSON.stringify(entry), { status: 201 });
    } catch (err) {
        console.error("Error adding dictionary entry:", err);
        return new Response(JSON.stringify({ error: "Failed to add dictionary entry" }), { status: 500 });
    }
}
