import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { title, content } = req.body;
    const updatedBlog = await prisma.blog.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    return res.status(200).json(updatedBlog);
  }

  if (req.method === "DELETE") {
    await prisma.blog.delete({
      where: { id: Number(id) },
    });
    return res.status(204).end();
  }

  res.setHeader("Allow", ["PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
