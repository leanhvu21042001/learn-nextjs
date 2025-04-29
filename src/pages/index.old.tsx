import { useState, useEffect } from "react";
import { useTodoPageFetchStore } from "@/lib/zustand/todo.zustand.pages";
import { PageAnchorTodoDetail } from "@/components/Anchors";

export default function Home() {
  const { todos, fetchTodos, addTodo, deleteTodo } = useTodoPageFetchStore();
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold">Page TODO - Home</h1>
      <div className="my-4">
        <input
          className="border p-2 w-full mb-2"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <input
          className="border p-2 w-full mb-2"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          placeholder="Mô tả..."
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={() => addTodo(newTitle, newDesc)}
        >
          Thêm
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between p-2 border-b">
            <PageAnchorTodoDetail todo={todo} />
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
