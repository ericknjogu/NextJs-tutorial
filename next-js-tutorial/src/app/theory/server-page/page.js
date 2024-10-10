import React from "react";

async function fetchListOfProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const results = await response.json();

    return results?.products;
  } catch (error) {
    throw new Error(error);
  }
}

fetchListOfProducts();

export default async function ServerActionsExample() {
  const products = await fetchListOfProducts();

  console.log(products);

  return <div> Server Actions Example --server components</div>;
}
