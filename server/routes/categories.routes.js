import express from "express";

import { newCategory } from "../controllers/categories.controllers.js";

const router = express.Router();

router.post("/", newCategory);


export default router;
