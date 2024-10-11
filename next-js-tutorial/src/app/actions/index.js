"use server";

export async function fetchListOfProducts() {
  const response = await fetch("https://dummyjson.com/products");

  const results = await response.json();

  return results?.products;
}
