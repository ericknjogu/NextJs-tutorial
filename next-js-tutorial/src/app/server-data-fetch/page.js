async function fetchListOfUsers() {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=10", {
      cache: "no-store",
    });

    const data = await response.json();

    return data.users;
  } catch (error) {
    throw new Error(error);
  }
}

import React from "react";

export default async function ServerSideDataFetch() {
  const listOfUsers = await fetchListOfUsers();

  return (
    <div>
      <h1 className="font-bold text-3xl underline ml-4">
        Server side data fetching
      </h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <li key={user.id}>
                <h2>{user.firstName}</h2>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
