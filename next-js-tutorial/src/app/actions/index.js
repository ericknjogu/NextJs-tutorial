"use server";

import { revalidatePath } from "next/cache";
import connectToDB from "../database";
import User from "../models/user";

// export async function fetchListOfProducts() {
//   const response = await fetch("https://dummyjson.com/products");

//   const results = await response.json();

//   return results?.products;
// }

//add new user action

export async function addNewUser(formData, pathToRefresh) {
  await connectToDB();

  try {
    const newlyCreatedUser = await User.create(formData);

    if (newlyCreatedUser) {
      //refresh the page after adding new user

      revalidatePath(pathToRefresh);

      return {
        success: true,
        message: "New user added successfully",
      };
    } else {
      return {
        success: false,
        message: "Error adding new user, please try again ",
      };
    }
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Error adding new user, please try again ",
    };
  }
}

//fetch user actions

export async function getUsersAction() {
  await connectToDB();

  try {
    const allUsers = await User.find({});

    if (allUsers) {
      return {
        success: true,
        message: "Fetched all users successfully  ",
        data: JSON.parse(JSON.stringify(allUsers)),
      };
    } else {
      return {
        success: false,
        message: "Error fetching users, Please try again !",
      };
    }
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Error fetching users, Please try again !",
    };
  }
}

//edit user action

//delete user action
