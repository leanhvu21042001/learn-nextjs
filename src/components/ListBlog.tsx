import { Blog } from "@/types/types";
import React from "react";

export default function ListBlog({ list }: { list: Blog[] }) {
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
        </li>
      ))}
    </ul>
  );
}
