import mongoose from "mongoose";

mongoose.set('strictQuery', false);

export const connectDb = async()=>{
    const {connection} = await mongoose.connect(process.env.DB_URL);
    console.log(`Database Connected with ${connection.host}`);
}