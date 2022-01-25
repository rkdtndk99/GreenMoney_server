import express from "express";
import missionRouter from "./routers/missionRouter.js";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/mission", missionRouter);

export default app;