"use client";

import FormAddBlog from "@/components/FormAddBlog";
import ListBlog from "@/components/ListBlog";
import { addBlogThunk, fetchBlogsThunk } from "@/lib/redux/blog-slice.redux";
import { AppDispatch, RootState } from "@/lib/redux/store.redux";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component that uses Redux
export default function AppBlog() {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState) => state.blogs);

  const handleAddBlog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    dispatch(addBlogThunk({ title, content }));
  };

  useEffect(() => {
    dispatch(fetchBlogsThunk());
  }, [dispatch]);

  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-4">App Blog</h1>
      <FormAddBlog onSubmit={handleAddBlog} />
      <ListBlog list={blogs} />
    </main>
  );
}
