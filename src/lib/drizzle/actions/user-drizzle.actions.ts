import { user } from "../schema";
import { db } from "../db";
import { eq } from "drizzle-orm";

export const updateUser = async (
  userId: number,
  userData: Partial<typeof user.$inferInsert>
) => {
  if (!userId) {
    throw new Error("User ID is required for update.");
  }
  if (Object.keys(userData).length === 0) {
    throw new Error("No user data provided for update.");
  }

  return await db
    .update(user)
    .set(userData)
    .where(eq(user.id, userId))
    .returning();
};
