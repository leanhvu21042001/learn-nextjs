import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma Client

// Lấy danh sách todos
export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

// Thêm một todo mới
export async function POST(req: Request) {
  const { title } = await req.json();
  const newTodo = await prisma.todo.create({
    data: { title },
  });
  return NextResponse.json(newTodo);
}
