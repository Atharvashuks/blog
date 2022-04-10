import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log("Connection established..."))
  .catch((error) => console.error(error));

