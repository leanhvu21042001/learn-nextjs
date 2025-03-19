import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const todo = await prisma.todo.update({
    where: { id },
    data: { completed: { set: false } },
  });
  return NextResponse.json(todo);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
