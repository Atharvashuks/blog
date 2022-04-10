import express from "express";
import { update, deleteUser } from "../controllers/user.controllers.js";

const router = express.Router();

router.put("/:id", update);
router.delete("/:id", deleteUser);

export default router;
