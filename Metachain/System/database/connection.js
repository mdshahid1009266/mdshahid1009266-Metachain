import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGODB_URL;


async function connectToDatabase() {
  try {
    await mongoose.connect(URL);
    console.log('Database connected');
  } catch (error) {
    console.error('Connection failed:', error.message);
    // Handle the error appropriately, e.g., retry connection or display a user-friendly message
  }
}

export default connectToDatabase;
