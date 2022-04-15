import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import "./db/config/db.config.js";

import authRoutes from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import postRoutes from "./routes/posts.routes.js";
import categoriesRoute from "./routes/categories.routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:5000",
  })
);

const PORT = process.env.PORT || 5000;

app.use("/server/auth", authRoutes);
app.use("/server/users", userRouter);
app.use("/server/posts", postRoutes);
app.use("/server/categories", categoriesRoute);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
