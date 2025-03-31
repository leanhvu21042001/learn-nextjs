import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../prisma/product.actions";
import { Product } from "@/types/types";

export const fetchProductsThunk = createAsyncThunk(
  "products-app/fetchProducts",
  async () => {
    const products = await getProducts();

    return products.map((product) => ({
      ...product,
      createdAt: new Date(product.createdAt).toISOString(),
    }));
  }
);

export const addProductThunk = createAsyncThunk(
  "products-app/addProduct",
  async ({
    name,
    price,
    description,
    image,
  }: Pick<Product, "name" | "price" | "description" | "image">) => {
    const product = await addProduct(
      name,
      price,
      description || "",
      image || ""
    );
    return {
      ...product,
      createdAt: new Date(product.createdAt).toISOString(),
    };
  }
);

export const editProductThunk = createAsyncThunk(
  "products-app/editProduct",
  async ({
    id,
    name,
    price,
    description,
    image,
  }: Pick<Product, "id" | "name" | "price" | "description" | "image">) => {
    const product = await updateProduct(
      id,
      name,
      price,
      description || "",
      image || ""
    );

    if (!product) return;

    return {
      ...product,
      createdAt: new Date(product.createdAt).toISOString(),
    };
  }
);

export const deleteProductThunk = createAsyncThunk(
  "products-app/deleteProduct",
  async (id: Product["id"]) => {
    const product = await deleteProduct(id);

    return {
      ...product,
      createdAt: new Date(product.createdAt).toISOString(),
    };
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(editProductThunk.fulfilled, (state, action) => {
        const product = state.find((t) => t.id === action.payload?.id);
        if (!product) {
          return;
        }
        product.name = action.payload?.name || product.name;
        product.price = action.payload?.price || product.price;
        product.description =
          action.payload?.description || product.description;
        product.image = action.payload?.image || product.image;
        product.createdAt = action.payload?.createdAt || product.createdAt;
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        return state.filter((product) => product.id !== action.payload.id);
      });
  },
});

export default productSlice.reducer;
