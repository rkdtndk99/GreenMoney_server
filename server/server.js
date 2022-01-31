import express from "express";
import missionRouter from "./routers/missionRouter.js";
import userRouter from "./routers/userRouter.js"

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/mission", missionRouter);
app.use("/user", userRouter);

export default app;