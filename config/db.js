import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_DB);
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};
