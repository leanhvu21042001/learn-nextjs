import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    return res.status(200).json(todos);
  }

  if (req.method === "POST") {
    const { title, description } = req.body;
    const newTodo = await prisma.todo.create({
      data: { title, description },
    });
    return res.status(201).json(newTodo);
  }

  if (req.method === "PUT") {
    const { id, completed } = req.body;
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed },
    });
    return res.status(200).json(updatedTodo);
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    await prisma.todo.delete({ where: { id } });
    return res.status(204).end();
  }

  res.status(405).json({ error: "Method not allowed" });
}
