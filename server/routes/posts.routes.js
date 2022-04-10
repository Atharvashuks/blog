import express from 'express';

import {createPost} from '../controllers/post.controllers.js';

const router = express.Router();

router.post("/", createPost);

export default router;