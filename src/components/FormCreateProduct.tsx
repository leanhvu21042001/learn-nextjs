import { addProductThunk } from "@/lib/redux/product-slice-app.redux";
import { AppDispatch } from "@/lib/redux/store.redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={`w-full p-3 rounded-md font-medium ${
        pending
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 text-white transition-colors"
      }`}
      disabled={pending}
      type="submit"
    >
      {pending ? "Creating..." : "Create Product"}
    </button>
  );
}

function FormContent() {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="mb-4">
        <input
          name="name"
          type="text"
          placeholder="Product name"
          className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={pending}
        />
      </div>
      <div className="mb-4">
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price"
          className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={pending}
        />
      </div>
      <div className="mb-4 flex-grow">
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-full min-h-[100px]"
          rows={4}
          disabled={pending}
        ></textarea>
      </div>
      <div className="mb-4">
        <input
          name="image"
          type="file"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={pending}
        />
      </div>
      <SubmitButton />
    </>
  );
}

export default function FormCreateProduct() {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string | null;
    const image = formData.get("image") as File | null;

    // validate
    if (!name?.length) {
      toast.error("Please enter a name");
      return;
    }
    if (!price?.length) {
      toast.error("Please enter a price");
      return;
    }
    if (isNaN(+price)) {
      toast.error("Price must be a number");
      return;
    }
    if (+price < 0) {
      toast.error("Price must be greater than 0");
      return;
    }
    if (!description?.length) {
      toast.error("Please enter a description");
      return;
    }
    // validate file
    if (!image?.size) {
      toast.error("Please select an image");
      return;
    }

    try {
      // base64 image
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64String = `data:${image.type};base64,${buffer.toString(
        "base64"
      )}`;

      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ image: base64String }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error uploading image:", errorMessage);
      }
      const { imageUrl } = await response.json();

      dispatch(
        addProductThunk({
          name,
          price: +price,
          description,
          image: imageUrl,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Product added successfully");
          e.currentTarget?.reset();
        })
        .catch((error) => {
          console.log({ error });
          toast.error("Failed to add product");
        });
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Add New Product</h2>
      <form className="flex-grow flex flex-col" onSubmit={onSubmit}>
        <FormContent />
      </form>
    </div>
  );
}
