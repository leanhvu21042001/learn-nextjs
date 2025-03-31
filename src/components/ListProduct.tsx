import { useEffect } from "react";
import { fetchProductsThunk } from "@/lib/redux/product-slice-app.redux";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store.redux";
import { formatPrice } from "@/lib/format";

export function ListProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.productsApp);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-lg font-bold mb-2">
                {formatPrice(product.price)}
              </p>
              <div className="flex justify-center mb-3">
                <Image
                  src={product.image || ""}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="mt-3">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
