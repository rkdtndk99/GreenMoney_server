import express from "express";
import missionRouter from "./routers/missionRouter.js";
import userRouter from "./routers/userRouter.js";
// import swaggerUi from "swagger-ui-express";
// import swaggerFile from "../swagger-output.json";

const app = express();
//const specs = swaggerJsdoc(swaggerOptions);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/mission", missionRouter);
app.use("/user", userRouter);

export default app;