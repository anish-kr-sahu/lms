import express from "express";

import { isauthenticated } from "../middlewares/isAuthenticated.js";
import { createCourse } from "../controllers/courseController.js";


const router = express.Router();

router.route("/").post(isauthenticated, createCourse);

export default router;