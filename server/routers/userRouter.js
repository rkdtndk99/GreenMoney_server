import express from "express";
import {parentJoin, childJoin, parentLogin, childLogin} from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.post('/parentJoin', parentJoin);
userRouter.post('/childJoin', childJoin);
userRouter.post('/parentLogin', parentLogin);
userRouter.post('/childLogin', childLogin);

export default userRouter;