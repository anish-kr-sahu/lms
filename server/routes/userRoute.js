import express from "express";
import { getUserProfile, login, logout, register } from "../controllers/userController.js";
import { isauthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(logout);
router.route("/profile").get(isauthenticated,getUserProfile);

export default router;