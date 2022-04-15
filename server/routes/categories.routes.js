import express from "express";

import { newCategory ,getCategory } from "../controllers/categories.controllers.js";

const router = express.Router();

router.post("/", newCategory);
router.get("/",getCategory);

export default router;
