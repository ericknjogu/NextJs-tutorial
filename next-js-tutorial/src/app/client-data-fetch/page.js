"use client";

import React, { useEffect, useState } from "react";

import useSWR from "swr";

import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetch() {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  // async function fetchListOfUsers() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://dummyjson.com/users");

  //     const data = await response.json();

  //     if (data?.users) {
  //       setUsers(data.users);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setUsers([]);
  //     setLoading(false);
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchListOfUsers();
  // }, []);

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading)
    return <h3 className="font-bold text-lg">Loading users please wait...</h3>;

  return (
    <div>
      Client Side DataFetch
      {/* <ul>
        {users && users.length > 0
          ? users.map((user) => (
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
      </ul> */}
      <ul>
        {data && data?.users && data?.users.length > 0
          ? data?.users.map((user) => (
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
