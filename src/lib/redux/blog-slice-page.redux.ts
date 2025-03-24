import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Blog } from "@/types/types";

// Gọi API Blogs
export const fetchBlogsThunk = createAsyncThunk(
  "blogs-page/fetchBlogs",
  async () => {
    const res = await fetch("/api/blogs");
    const blogs = await res.json();

    return blogs.map((blog: Blog) => ({
      ...blog,
      createdAt: new Date(blog.createdAt).toISOString(),
    }));
  }
);

export const addBlogThunk = createAsyncThunk(
  "blogs-page/addBlog",
  async ({ title, content }: Pick<Blog, "title" | "content">) => {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const blog = await res.json();
    return {
      ...blog,
      createdAt: new Date(blog.createdAt).toISOString(),
    };
  }
);

export const editBlogThunk = createAsyncThunk(
  "blogs-page/editBlog",
  async ({ id, title, content }: Pick<Blog, "id" | "title" | "content">) => {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    const blog = await res.json();
    return {
      ...blog,
      createdAt: new Date(blog.createdAt).toISOString(),
    };
  }
);

export const deleteBlogThunk = createAsyncThunk(
  "blogs-page/deleteBlog",
  async (id: Blog["id"]) => {
    await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return { id };
  }
);

// Redux Slice
const blogSlice = createSlice({
  name: "blogs",
  initialState: [] as Blog[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsThunk.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addBlogThunk.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editBlogThunk.fulfilled, (state, action) => {
        const blog = state.find((t) => t.id === action.payload?.id);
        if (blog) {
          blog.title = action.payload?.title || blog.title;
          blog.content = action.payload?.content || blog.content;
          blog.createdAt = action.payload?.createdAt || blog.createdAt;
        }
      })
      .addCase(deleteBlogThunk.fulfilled, (state, action) =>
        state.filter((t) => t.id !== action.payload?.id)
      );
  },
});

export default blogSlice.reducer;
