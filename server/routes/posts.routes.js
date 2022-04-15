import express from "express";

import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getPost);
router.get("/", getAllPost);

export default router;
