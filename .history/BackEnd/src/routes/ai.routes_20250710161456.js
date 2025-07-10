import express from 'express';
import { getResponse } from '../controllers/ai.controller.js';

const router = express.Router();

router.post("/getReview", getReview);

export default router;
