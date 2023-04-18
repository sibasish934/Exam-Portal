import ErrorHandler from "../utils/ErrorHandler.js";
import { catchAsyncError } from "./errorMiddleWare.js";
import jwt from "jsonwebtoken";
import { User } from "../model/user.js";

export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
  
    if (!token) {
      return next(new ErrorHandler("Please Login to access this resource", 401));
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decodedData.id);
  
    next();
});
