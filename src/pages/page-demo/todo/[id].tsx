import { useTodoPageFetchStore } from "@/lib/zustand/todo.zustand.pages";
import { useRouter } from "next/router";

export default function TodoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const todo = useTodoPageFetchStore((state) =>
    state.todos.find((t) => t.id === Number(id))
  );

  if (!todo) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl">title: {todo.title}</h1>
      <p>description: {todo.description}</p>
      <button
        className="bg-gray-500 text-white p-2"
        onClick={() => router.push("/")}
      >
        Quay lại
      </button>
    </div>
  );
}
