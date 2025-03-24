import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice.redux";
import blogAppReducer from "./blog-slice-app.redux";
import blogPageReducer from "./blog-slice-page.redux";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    blogsApp: blogAppReducer,
    blogsPage: blogPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
