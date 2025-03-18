import { create } from "zustand";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "./actions";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  toggleTodo: (id: number) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

export const useTodoClientStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: async () => {
    const data = await getTodos();
    set({ todos: data });
  },
  addTodo: async (title) => {
    await addTodo(title);
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, completed: false }],
    }));
  },
  toggleTodo: async (id) => {
    await toggleTodo(id);
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }));
  },
  deleteTodo: async (id) => {
    await deleteTodo(id);
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) }));
  },
}));
