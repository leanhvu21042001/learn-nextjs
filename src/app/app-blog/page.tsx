"use client";

import FormAddBlog from "@/components/FormAddBlog";
import ListBlog from "@/components/ListBlog";
import ModalEditBlog from "@/components/ModalEditBlog";
import { useModal } from "@/lib/hooks";
import {
  addBlogThunk,
  deleteBlogThunk,
  fetchBlogsThunk,
} from "@/lib/redux/blog-slice.redux";
import { AppDispatch, RootState } from "@/lib/redux/store.redux";
import { Blog } from "@/types/types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Component that uses Redux
export default function AppBlog() {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState) => state.blogs);
  const { isOpen, close, open } = useModal();
  const [blogIdSelected, setBlogIdSelected] = useState<Blog["id"] | null>(null);

  const handleAddBlog = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    // validate title
    if (!title) {
      toast.error("Title is required");
      return;
    }

    dispatch(addBlogThunk({ title, content }))
      .unwrap()
      .then(() => {
        toast.success("Blog added successfully");
      })
      .catch(() => {
        toast.error("Failed to add blog");
      });
  };

  const handleEditBlog = (id: Blog["id"]) => {
    setBlogIdSelected(id);
    open();
  };

  const handleDeleteBlog = (id: Blog["id"]) => {
    dispatch(deleteBlogThunk(id))
      .unwrap()
      .then(() => {
        toast.success("Blog deleted successfully");
      })
      .catch(() => {
        toast.error("Failed to delete blog");
      });
  };

  useEffect(() => {
    dispatch(fetchBlogsThunk())
      .unwrap()
      .then(() => {
        toast.success("Blogs fetched successfully");
      })
      .catch(() => {
        toast.error("Failed to fetch blogs");
      });
  }, [dispatch]);

  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-4">App Blog</h1>
      <FormAddBlog onSubmit={handleAddBlog} />
      <ListBlog
        list={blogs}
        actions={{
          delete: (id) => handleDeleteBlog(id),
          edit: (id) => handleEditBlog(id),
        }}
      />

      <ModalEditBlog close={close} isOpen={isOpen} blogId={blogIdSelected} />

      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem;
        }
      `}</style>
    </main>
  );
}
