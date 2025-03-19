"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTodoAppPrismaStore } from "@/lib/zustand/todo.zustand.app";

export default function NewTodoPage() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoAppPrismaStore();
  const router = useRouter();

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">Add Todo</h1>
      <input
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title..."
      />
      <button
        className="bg-green-500 text-white p-2"
        onClick={() => {
          addTodo(title);
          router.push("/app-todo");
        }}
      >
        Save
      </button>
    </div>
  );
}
