import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>This page does not exist</h1>
      <Link href={"/"}>Go back Home</Link>
    </div>
  );
}
