"use client";

import { fetchListOfProducts } from "@/app/actions";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();

    console.log(data);

    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  if (loading) return <h2>Loading data please wait...</h2>;

  return (
    <div>
      <h1>Client page example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => <li key={product.id}>{product.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}
