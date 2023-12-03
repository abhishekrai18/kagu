import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const Connection = async () => {
  const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mydb.obfrvl6.mongodb.net/ecommerce`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log("Error :", error.message);
  }
};

export default Connection;
