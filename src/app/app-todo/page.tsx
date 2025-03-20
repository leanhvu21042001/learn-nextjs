"use client";
import { useTodoAppPrismaStore } from "@/lib/zustand/todo.zustand.app";
import Link from "next/link";
import { useEffect } from "react";

export default function TodoPage() {
  const { todos, fetchTodos, toggleTodo, deleteTodo } = useTodoAppPrismaStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">App Todo</h1>
      <Link
        href="/app-todo/new"
        className="bg-blue-500 text-white p-2 inline-block my-4"
      >
        + Add Todo
      </Link>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between p-2 border-b">
            <Link href={`/app-todo/${todo.id}`}>
              <span
                className={
                  todo.completed
                    ? "line-through cursor-pointer"
                    : "cursor-pointer"
                }
              >
                {todo.title}
              </span>
            </Link>
            <div>
              <button onClick={() => toggleTodo(todo.id)}>✅</button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
