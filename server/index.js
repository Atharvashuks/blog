import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log("Connection established..."))
  .catch((error) => console.error(error));

const PORT = 5000;

app.use("/server/auth", authRoutes);
app.use('/server/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server listining at port ${PORT}`);
});
