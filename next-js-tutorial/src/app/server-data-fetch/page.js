import Link from "next/link";
import React from "react";

async function fetchListOfUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=10", {
      cache: "default",
    });

    const data = await response.json();

    return data.users;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ServerSideDataFetch() {
  const listOfUsers = await fetchListOfUsers();

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl underline ml-4">
        Server side data fetching: user list
      </h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <li
                key={user.id}
                className="mt-4 cursor-pointer hover:bg-gray-100"
              >
                <Link href={`/server-data-fetch/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
