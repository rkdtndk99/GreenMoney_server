import express from "express";
import {loadMission, askForConfirm,confirmMission
} from "../controllers/missionController.js";

const missionRouter = express.Router();

missionRouter.post("/loadMission", loadMission);
missionRouter.post("/askForConfirm", askForConfirm);
missionRouter.post("/confirmMission", confirmMission);

export default missionRouter;   