import express from "express"
import missionRouter from "./routers/missionRouter.js"
import userRouter from "./routers/userRouter.js"
import settingsRouter from "./routers/settingsRouter.js"
import {verifyToken} from "./routers/middlewares/authorization.js"

const app = express();
//const specs = swaggerJsdoc(swaggerOptions);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/mission", verifyToken, missionRouter);
app.use("/user", userRouter);
app.use("/settings", verifyToken, settingsRouter);

export default app;