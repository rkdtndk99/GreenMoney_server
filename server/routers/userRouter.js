import express from "express";
import {postParentJoin, postChildJoin, parentLogin} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post("/parentJoin", postParentJoin);
userRouter.post("/childJoin", postChildJoin);
userRouter.post("/parentLogin", parentLogin);

export default userRouter;