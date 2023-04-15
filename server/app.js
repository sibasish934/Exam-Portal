import express from "express";
import dotenv from "dotenv";
const app = express();
import { connectDb } from "./config/database.js";
import openRoutes from "./routes/openRoutes.js"


dotenv.config({
    path:"./config/config.env"
})

connectDb();

app.use(express.json());
app.use('/api/v1', openRoutes);

app.get("/", (req, res, next)=>{
    res.status(200).send("This server is for the exam portal");
})

export default app;