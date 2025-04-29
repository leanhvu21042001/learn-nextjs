"use client";

import React from "react";

import FormCreateProduct from "@/components/FormCreateProduct";
import FormShoppingCart from "@/components/FormShoppingCart";
import { ListProduct } from "@/components/ListProduct";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8 text-blue-600">
        App Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
        {/* form create product */}
        <FormCreateProduct />

        {/* cart */}
        <FormShoppingCart />
      </div>

      {/* Product list */}
      <ListProduct />
    </div>
  );
}
