"use server";

import prisma from "./prisma";

// get product
export async function getProducts() {
  return await prisma.product.findMany();
}

// add product
export async function addProduct(
  name: string,
  price: number,
  description: string,
  image: string
) {
  return await prisma.product.create({
    data: { name, price, description, image, createdAt: new Date() },
  });
}

// delete product
export async function deleteProduct(id: number) {
  return await prisma.product.delete({ where: { id } });
}

// update product
export async function updateProduct(
  id: number,
  name: string,
  price: number,
  description: string,
  image: string
) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return;
  return await prisma.product.update({
    where: { id },
    data: {
      name,
      price,
      description,
      image,
    },
  });
}
