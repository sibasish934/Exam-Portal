import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
})

export const question = new mongoose.model("Question", schema);