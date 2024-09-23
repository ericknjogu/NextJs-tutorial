"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleNavigate() {
    router.push("/products");
  }
  return (
    <div className="grid  p-2 pb-2  sm:p-2 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to next js</h1>
      <Link href={"/products"}>Navigate to products page</Link>
      <Link href={"/account"}>Navigate to account page</Link>

      <h2 className="mt-4 font-bold text-2xl">
        Alternative way to navigate to pages
      </h2>

      <button
        onClick={handleNavigate}
        className=" py-2 px-4 bg-blue-500 text-white cursor-pointer rounded-md w-52"
      >
        Navigate to products page
      </button>
    </div>
  );
}
