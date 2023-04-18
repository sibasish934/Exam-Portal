import express, { urlencoded } from "express";
import dotenv from "dotenv";
const app = express();
import { connectDb } from "./config/database.js";
import openRoutes from "./routes/openRoutes.js"
import userRoutes from "./routes/userRoutes.js";
import { errorMiddleWare } from "./middleware/errorMiddleWare.js"
import cookieParser from "cookie-parser";
import cors from "cors";


dotenv.config({
    path:"./config/config.env"
})

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000",
    methods:["GET", "POST", "PUT","DELETE"],
}))

app.use(cookieParser());

app.use(express.json());

app.use(urlencoded({
    extended:true
}));

connectDb();

app.use(express.json());
app.use('/api/v1/', userRoutes);
app.use('/api/v1', openRoutes);

app.get("/", (req, res, next)=>{
    res.status(200).send("This server is for the exam portal");
})

app.use(errorMiddleWare);

export default app;