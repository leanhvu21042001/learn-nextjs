import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Gọi API Todos
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/app-todos");
  return res.json();
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (title: string) => {
    const res = await fetch("/api/app-todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    return res.json();
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (id: number) => {
    const res = await fetch(`/api/app-todos/${id}`, { method: "PATCH" });
    return res.json();
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    await fetch(`/api/app-todos/${id}`, { method: "DELETE" });
    return id;
  }
);

// Redux Slice
const todoSlice = createSlice({
  name: "todos",
  initialState: [] as { id: number; title: string; completed: boolean }[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => action.payload)
      .addCase(addTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const todo = state.find((t) => t.id === action.payload.id);
        if (todo) todo.completed = action.payload.completed;
      })
      .addCase(deleteTodo.fulfilled, (state, action) =>
        state.filter((t) => t.id !== action.payload)
      );
  },
});

export default todoSlice.reducer;
