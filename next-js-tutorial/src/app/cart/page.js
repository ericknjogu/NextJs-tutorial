"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Cart() {
  const pathName = usePathname();

  console.log(pathName);

  const searchParams = useSearchParams();

  console.log(searchParams.get("search"), searchParams.get("randomvalue"));

  return <div>This is cart component</div>;
}
