import { Blog } from "@/types/types";
import React from "react";

export default function ListBlog({
  list,
  actions,
}: {
  list: Blog[];
  actions: {
    edit: (id: Blog["id"]) => void;
    delete: (id: Blog["id"]) => void;
  };
}) {
  return (
    <ul className="max-w-xl mx-auto mt-8">
      {list.map((blog) => (
        <li
          key={blog.id}
          className="p-6 border rounded-md my-4 shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-4">{blog.content}</p>
          <p className="text-sm text-gray-500">{blog.createdAt}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => actions.edit(blog.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => actions.delete(blog.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
