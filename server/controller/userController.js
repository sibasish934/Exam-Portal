import {catchAsyncError} from "../middleware/errorMiddleWare.js";
import {User} from "../model/user.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import sendToken from "../utils/jwtToken.js";

export const register = catchAsyncError(async (req,res,next) =>{
    const {name, email, password, photo, description, skills} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        photo,
        description,
        skills
    });

    sendToken(user,201,res,"User registered Successfully");
})

export const loginUser = catchAsyncError(async (req,res,next) =>{   //->  const loginUser = async(res, res, next)+>[
    const {email, password} = req.body;
    
    if(!email || !password){
        return next(new ErrorHandler("Pls Enter Email and Password",401));
        //return res.status(200).json/send()
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Please Enter Valid Email And Password",400));
    }

    const passwordCheck = await user.comparePassword(password);

    if(!passwordCheck){
        return next(new ErrorHandler("Please Enter Valid Email And Password",401));
    }

    sendToken(user,200,res,"login Successfull");
})

export const logout = catchAsyncError(async (req, res, next) =>{
    res.cookie("token", null , {
        expires : new Date(Date.now()),
        httpOnly:true
    });
    
    res.status(200).json({
        success: true,
        message:"Looged out",
    });
}); 

export const getUserDetails = catchAsyncError(async(req,res,next) =>{
    const user = await User.findById(req.user.id);
  
    res.status(200).json({
      success:true,
      user
    })
})
