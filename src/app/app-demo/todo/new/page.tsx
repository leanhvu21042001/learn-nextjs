"use client";
import { useState } from "react";
import { useTodoAppPrismaStore } from "@/lib/zustand/todo.zustand.app";
import { AppBtnAnchorAddTodo } from "@/components/Anchors";

export default function NewTodoPage() {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodoAppPrismaStore();

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">Add Todo</h1>
      <input
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title..."
      />
      <AppBtnAnchorAddTodo action={addTodo} payload={title} />
    </div>
  );
}
