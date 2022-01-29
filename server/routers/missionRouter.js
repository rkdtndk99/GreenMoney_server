import express from "express";
import {loadMonthMission, askForConfirm,confirmMission, getPercent, loadAllMission
} from "../controllers/missionController.js";

const missionRouter = express.Router();

missionRouter.post("/loadMonthMission", loadMonthMission);
missionRouter.post("/loadAllMission", loadAllMission);
missionRouter.post("/askForConfirm", askForConfirm);
missionRouter.post("/confirmMission", confirmMission);
missionRouter.post("/getPercent", getPercent);

export default missionRouter;   