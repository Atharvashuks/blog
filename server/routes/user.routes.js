import express from "express";
import {
  update,
  deleteUser,
  getUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.put("/:id", update);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

export default router;
