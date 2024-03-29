import { question } from "../model/question.js";
import {answer} from "../model/answer.js";
export const postController = async(req,res,next)=>{
    const {title, intution, approach, solution} = req.body;
    // req.body.user = req.user.id;

    const data = await question.findOne({title});
    //console.log(data);
    if(data){
        const questionOptions= {
            intution,
            approach,
            solution,
            question : data._id,
            user:req.user._id,
        }

        await answer.create(questionOptions);
        res.status(200).json({
            success:true,
            message: "Answer Posted Successfully."
        })
    }else{
        const Question = await question.create({
            title:title,
        });

        const options = {
            intution,
            approach,
            solution,
            question: Question._id,
            user:req.user._id,
        }

        await answer.create(options);
        res.status(200).json({
            success:true,
            message:"Question and Answer Added Successfully."
        })
    }
    
}

export const getALLQuestions = async(req, res, next)=>{
    const data = await question.find({});
    res.status(200).json({
        success:true,
        data
    })
}

export const getAnswers = async(req, res, next) =>{
    const {id} = req.params;
    const answers = await answer.find({
        question:id
    }).populate('user', "name").populate("question", "title");

    res.status(200).json({
        success:true,
        answers
    })
}