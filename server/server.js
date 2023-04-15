import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path:"./config/config.env"
})

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server started with Port no : ${port}`);
})