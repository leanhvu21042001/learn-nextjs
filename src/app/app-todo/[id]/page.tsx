"use client";
import { useTodoClientStore } from "@/lib/todo.zustand.app";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function TodoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsUsed = use(params);
  const router = useRouter();
  const todo = useTodoClientStore((state) =>
    state.todos.find((t) => t.id === Number(paramsUsed.id))
  );

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">{todo.title}</h1>
      <p>{todo.completed ? "✅ Completed" : "⏳ Not completed"}</p>
      <button
        className="bg-gray-500 text-white p-2"
        onClick={() => router.push("/app-todo")}
      >
        Back
      </button>
    </div>
  );
}
