"use server";

import prisma from "./prisma";

// TODO
export async function getTodos() {
  return await prisma.todo.findMany();
}

export async function addTodo(title: string) {
  return await prisma.todo.create({ data: { title } });
}

export async function toggleTodo(id: number) {
  const todo = await prisma.todo.findUnique({ where: { id } });
  if (!todo) return;
  return await prisma.todo.update({
    where: { id },
    data: { completed: !todo.completed },
  });
}

export async function deleteTodo(id: number) {
  return await prisma.todo.delete({ where: { id } });
}

// BLOG
export async function getBlogs() {
  return await prisma.blog.findMany();
}

export async function addBlog(title: string, content: string) {
  return await prisma.blog.create({
    data: { title, content, createdAt: new Date() },
  });
}

export async function editBlog(id: number, title: string, content: string) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) return;
  return await prisma.blog.update({
    where: { id },
    data: {
      title,
      content,
    },
  });
}

export async function deleteBlog(id: number) {
  return await prisma.blog.delete({ where: { id } });
}
