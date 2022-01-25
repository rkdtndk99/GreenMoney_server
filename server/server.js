import express from "express";
import rootRouter from "./routers/rootRouter.js";

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/", rootRouter);

export default app;