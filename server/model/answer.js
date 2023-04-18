import mongoose from "mongoose";

const schema = new mongoose.Schema({
    question:{
        type: mongoose.Schema.ObjectId,
        ref: "Question",
        required:true
    },
    intution:{
        type:String,
        required:true,
    },
    approach:{
        type:String,
        required:true,
    },
    solution:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    }
})

export const answer = new mongoose.model("Answer", schema);