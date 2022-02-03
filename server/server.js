import express from "express";
import missionRouter from "./routers/missionRouter.js";
import userRouter from "./routers/userRouter.js"
import {verifyToken} from "./routers/middlewares/authorization.js"

const app = express();
//const specs = swaggerJsdoc(swaggerOptions);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/mission", verifyToken, missionRouter);
app.use("/user", userRouter);

export default app;