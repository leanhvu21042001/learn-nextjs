"use server";
import prisma from "./prisma";

export async function getTodos() {
  return await prisma.todo.findMany();
}

export async function addTodo(title: string) {
  await prisma.todo.create({ data: { title } });
}

export async function toggleTodo(id: number) {
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return;
  await prisma.todo.update({
    where: { id },
    data: { completed: !todo.completed },
  });
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({ where: { id } });
}
