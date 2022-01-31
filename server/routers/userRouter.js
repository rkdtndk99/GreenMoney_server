import express from "express";
import {postParentJoin, postChildJoin} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/parentJoin", postParentJoin);
userRouter.post("/childJoin", postChildJoin);

export default userRouter;