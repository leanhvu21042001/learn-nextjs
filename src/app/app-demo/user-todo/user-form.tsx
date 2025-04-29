"use client";

import { updateUser } from "@/lib/drizzle/actions/user-drizzle.actions";

export default function UserForm() {
  const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const userTime = formData.get("userTime") as string;
    const userTimestamp = formData.get("userTimestamp") as string;
    const userDate = formData.get("userDate") as string;

    updateUser(1, {
      name,
      email,
      userTime,
      userTimestamp: new Date(userTimestamp),
      userDate,
    })
      .then(() => {
        alert("User updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Failed to update user.");
      });
  };

  return (
    <form id="user" onSubmit={handleUpdateUser}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="time" name="userTime" />
      <input type="datetime-local" name="userTimestamp" />
      <input type="date" name="userDate" />
      <button type="submit">Submit</button>
    </form>
  );
}
