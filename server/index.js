import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import courseRoute from "./routes/courseRoute.js"

dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

// apis
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5175",
    credentials: true
}));
app.use(cookieParser());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);

app.listen(PORT);