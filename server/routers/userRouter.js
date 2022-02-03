import express from "express";
import {postParentJoin, postChildJoin, parentLogin, childLogin} from "../controllers/userController.js"
import { verifyToken } from "./middlewares/authorization.js";

const userRouter = express.Router();

userRouter.post('/parentJoin', postParentJoin);
userRouter.post('/childJoin', postChildJoin);
userRouter.post('/parentLogin', parentLogin);
userRouter.post('/childLogin', childLogin);
userRouter.get('/verifyToken', verifyToken);

export default userRouter;