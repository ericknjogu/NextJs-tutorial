import { redirect } from "next/navigation";

export default function page() {
  //assume profile is null

  const userProfileInfo = null;

  if (userProfileInfo === null) redirect("products?search=product1");
  return <div>account page</div>;
}
