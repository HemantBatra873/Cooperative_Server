import express from "express";
import { config } from "dotenv";
import appRouter from "./src/routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

//middlewares
//production origin :  'http://localhost:5173'
//deplyment origin : "https://cooperativeai.vercel.app"
app.use(cors({ origin: 'https://cooperativeai.vercel.app', credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api/v1", appRouter);

export default app;
