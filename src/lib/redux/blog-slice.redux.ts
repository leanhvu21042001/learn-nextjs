import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs, addBlog, editBlog, deleteBlog } from "../prisma/actions";

// Gọi API Blogs
export const fetchBlogsThunk = createAsyncThunk(
  "blogs/fetchBlogs",
  async () => {
    const data = await getBlogs();
    return data;
  }
);

export const addBlogThunk = createAsyncThunk(
  "blogs/addBlog",
  async ({ title, content }: { title: string; content: string }) => {
    return await addBlog(title, content);
  }
);

export const editBlogThunk = createAsyncThunk(
  "blogs/editBlog",
  async ({
    id,
    title,
    content,
  }: {
    id: number;
    title: string;
    content: string;
  }) => {
    return await editBlog(id, title, content);
  }
);

export const deleteBlogThunk = createAsyncThunk(
  "blogs/deleteBlog",
  async (id: number) => {
    return await deleteBlog(id);
  }
);

// Redux Slice
const blogSlice = createSlice({
  name: "blogs",
  initialState: [] as {
    id: number;
    title: string;
    content: string | null;
    createdAt: Date;
  }[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsThunk.fulfilled, (state, action) => action.payload)
      .addCase(addBlogThunk.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editBlogThunk.fulfilled, (state, action) => {
        const blog = state.find((t) => t.id === action.payload?.id);
        if (blog) {
          blog.title = action.payload?.title || blog.title;
          blog.content = action.payload?.content || blog.content;
        }
      })
      .addCase(deleteBlogThunk.fulfilled, (state, action) =>
        state.filter((t) => t.id !== action.payload?.id)
      );
  },
});

export default blogSlice.reducer;
