import express from "express";
import {loadMission, askForConfirm,confirmMission, getPercent
} from "../controllers/missionController.js";

const missionRouter = express.Router();

missionRouter.post("/loadMission", loadMission);
missionRouter.post("/askForConfirm", askForConfirm);
missionRouter.post("/confirmMission", confirmMission);
missionRouter.post("/getPercent", getPercent);

export default missionRouter;   