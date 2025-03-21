import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice.redux";
import blogReducer from "./blog-slice.redux";

export const store = configureStore({
  reducer: { todos: todoReducer, blogs: blogReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
