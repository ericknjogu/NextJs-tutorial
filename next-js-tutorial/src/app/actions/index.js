"use server";

import connectToDB from "../database";
import User from "../models/user";

// export async function fetchListOfProducts() {
//   const response = await fetch("https://dummyjson.com/products");

//   const results = await response.json();

//   return results?.products;
// }

//add new user action

export async function addNewUser(formData) {
  await connectToDB();

  try {
    const newlyCreatedUser = await User.create(formData);

    if (newlyCreatedUser) {
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

//edit user action

//delete user action
