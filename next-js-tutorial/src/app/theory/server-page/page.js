import React from "react";

import { fetchListOfProducts } from "@/app/actions";

export default async function ServerActionsExample() {
  const products = await fetchListOfProducts();

  console.log(products);

  return (
    <div>
      {" "}
      Server Actions Example --server components
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => <li>{product.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}
