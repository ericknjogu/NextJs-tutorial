import mongoose from "mongoose";

const connectToDB = async () => {
  const url = "mongodb+srv://ericknjogu:Erick1999@erick.tf4im.mongodb.net/";

  try {
    await mongoose.connect(url);
    console.log("connected succesfully to DB");
  } catch (error) {
    console.log("error connecting to database", error.message);
  }
};

export default connectToDB;
