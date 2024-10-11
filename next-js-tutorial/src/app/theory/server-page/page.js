import React from "react";

import { fetchListOfProducts } from "@/app/actions";

export default async function ServerActionsExample() {
  const products = await fetchListOfProducts();

  console.log(products);

  return <div> Server Actions Example --server components</div>;
}
