import express from "express";

import { uploadImg, UploadMsg } from "../controllers/img.controllers.js";

const router = express.Router();

router.post("/", uploadImg, UploadMsg);

export default router;
