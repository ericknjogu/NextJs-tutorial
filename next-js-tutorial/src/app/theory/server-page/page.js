import React from "react";

async function fetchListOfProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const results = await response.json();

    return results;
  } catch (error) {
    throw new Error(error);
  }
}

fetchListOfProducts();

export default function ServerActionsExample() {
  return <div> ServerActionsExample --server components</div>;
}
