import React from "react";

async function fetchUserDetails(userId) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const data = await response.json();

    return data;
  } catch (e) {
    throw new Error(e);
  }
}

export default async function UserDetails({ params }) {
  console.log(params);

  const userDetails = await fetchUserDetails(params.details);

  return (
    <div>
      <h1>This is user details page</h1>

      <p>
        {userDetails?.firstName} {userDetails?.lastName}
      </p>
      <p>{userDetails?.birthDate}</p>
      <p>{userDetails?.age}</p>
      <p>{userDetails?.email}</p>
      <p>{userDetails?.phone}</p>
    </div>
  );
}
