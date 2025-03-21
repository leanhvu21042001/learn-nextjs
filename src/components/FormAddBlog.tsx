
export default function FormAddBlog({
  onSubmit,
}: {
  onSubmit: (state: React.FormEvent<HTMLFormElement>) => void;
}) {

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-xl mx-auto p-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="content"
        placeholder="Content"
        className="p-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Blog
      </button>
    </form>
  );
}
