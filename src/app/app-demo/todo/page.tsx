"use client";
import { AppAnchorAddTodo, AppAnchorTodoDetail } from "@/components/Anchors";
import { useTodoAppPrismaStore } from "@/lib/zustand/todo.zustand.app";
import { useEffect } from "react";

export default function TodoPage() {
  const { todos, fetchTodos, toggleTodo, deleteTodo } = useTodoAppPrismaStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">App Todo</h1>
      <AppAnchorAddTodo />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between p-2 border-b">
            <AppAnchorTodoDetail todo={todo} />
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
