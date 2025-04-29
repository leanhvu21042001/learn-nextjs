import Image from "next/image";

export default function FormShoppingCart() {
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);

  //   console.log(formData);
  // };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-600">Shopping Cart</h2>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          3 items
        </span>
      </div>

      <div className="flex-grow mb-4 overflow-hidden">
        <ul className="divide-y divide-gray-200 overflow-y-auto h-[200px] border border-gray-200 rounded-md">
          {[1, 2, 3].map((item, index) => (
            <li key={index} className="p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                  <Image
                    src="/product.jpg"
                    alt="Product"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <h3 className="font-medium">Product Name {item}</h3>
                  <p className="text-sm text-gray-500">
                    ${(19.99 + item * 5).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  -
                </button>
                <span className="mx-1">{item}</span>
                <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  +
                </button>
                <button className="ml-2 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-gray-200 rounded-md p-4 mb-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$79.97</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between font-bold border-t border-gray-200 pt-2 mt-2">
          <span>Total</span>
          <span>$84.97</span>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors font-medium">
        Checkout
      </button>
    </div>
  );
}
