import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs, addBlog, editBlog, deleteBlog } from "../prisma/actions";
import { Blog } from "@/types/types";

// Gọi API Blogs
export const fetchBlogsThunk = createAsyncThunk(
  "blogs-app/fetchBlogs",
  async () => {
    const blogs = await getBlogs();
    return blogs.map((blog) => ({
      ...blog,
      createdAt: blog.createdAt.toISOString(),
    }));
  }
);

export const addBlogThunk = createAsyncThunk(
  "blogs-app/addBlog",
  async ({ title, content }: Pick<Blog, "title" | "content">) => {
    const blog = await addBlog(title, content || "");
    return {
      ...blog,
      createdAt: blog.createdAt.toISOString(),
    };
  }
);

export const editBlogThunk = createAsyncThunk(
  "blogs-app/editBlog",
  async ({ id, title, content }: Pick<Blog, "id" | "title" | "content">) => {
    const blog = await editBlog(id, title, content || "");
    return {
      ...blog,
      createdAt: blog?.createdAt.toISOString(),
    };
  }
);

export const deleteBlogThunk = createAsyncThunk(
  "blogs-app/deleteBlog",
  async (id: Blog["id"]) => {
    const blog = await deleteBlog(id);

    return {
      ...blog,
      createdAt: blog?.createdAt.toISOString(),
    };
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
