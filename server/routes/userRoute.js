import express from "express";
import { getUserProfile, login, logout, register, updateProfile } from "../controllers/userController.js";
import { isauthenticated } from "../middlewares/isAuthenticated.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isauthenticated,getUserProfile);
router.route("/profile/update").put(isauthenticated,upload.single("profilePhoto"), updateProfile)

export default router;