import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const blogs = await prisma.blog.findMany();
    return res.status(200).json(blogs);
  }

  if (req.method === "POST") {
    const { title, content } = req.body;
    const newBlog = await prisma.blog.create({
      data: { title, content },
    });
    return res.status(201).json(newBlog);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
