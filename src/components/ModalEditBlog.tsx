"use client";

import { editBlogThunk } from "@/lib/redux/blog-slice-app.redux";
import { AppDispatch, RootState } from "@/lib/redux/store.redux";
import { Blog } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function ModalEditBlog({
  close,
  isOpen,
  blogId,
}: {
  close: () => void;
  isOpen: boolean;
  blogId: Blog["id"] | null;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const blog = useSelector((state: RootState) =>
    state.blogsApp.find((t) => t.id === blogId)
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    // validate
    if (!blogId) {
      toast.error(`Blog not found to edit with id: ${blogId}`);
      return;
    }

    if (!title) {
      toast.error("Title is required");
      return;
    }

    dispatch(editBlogThunk({ id: blogId, title, content }))
      .unwrap()
      .then(() => {
        toast.success("Blog edited successfully");
        close();
      })
      .catch(() => {
        toast.error("Failed to edit blog");
      });
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/50" onClick={close} />
      <dialog
        open={isOpen}
        className="p-4 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lg font-medium mb-4">Edit Blog</p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={blog?.title}
          />
          <textarea
            name="content"
            placeholder="Content"
            className="p-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={
              blog?.content as string | number | readonly string[] | undefined
            }
          ></textarea>

          <div className="flex gap-3 justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              type="submit"
            >
              submit
            </button>
            <button
              onClick={close}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
