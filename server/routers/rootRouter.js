import express from "express";
import {loadMission, askForConfirm,confirmMission
} from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.post("/loadMission", loadMission);
rootRouter.post("/askForConfirm", askForConfirm);
rootRouter.post("/confirmMission", confirmMission);

export default rootRouter;   