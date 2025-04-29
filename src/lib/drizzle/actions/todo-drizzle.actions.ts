"use server";

import { eq } from "drizzle-orm";

import { db } from "../db";
import { todo, user } from "../schema";

export const getTodos = async (id: number) => {
  const todos = await db
    .select()
    .from(todo)
    .leftJoin(user, eq(todo.userId, user.id))
    .where(eq(todo.id, id));

  return todos;
};
