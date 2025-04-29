"use client";
import { AppBtnAnchorBackTodo } from "@/components/Anchors";
import { useTodoAppPrismaStore } from "@/lib/zustand/todo.zustand.app";
import { use } from "react";

export default function TodoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsUsed = use(params);
  const todo = useTodoAppPrismaStore((state) =>
    state.todos.find((t) => t.id === Number(paramsUsed.id))
  );

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">{todo.title}</h1>
      <p>{todo.completed ? "✅ Completed" : "⏳ Not completed"}</p>
      <AppBtnAnchorBackTodo />
    </div>
  );
}
