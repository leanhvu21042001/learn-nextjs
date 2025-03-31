import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice.redux";
import blogAppReducer from "./blog-slice-app.redux";
import blogPageReducer from "./blog-slice-page.redux";
import productAppReducer from "./product-slice-app.redux";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    blogsApp: blogAppReducer,
    blogsPage: blogPageReducer,
    productsApp: productAppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
