import express from "express";
import {loadMission
} from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.post("/loadMission", loadMission);

export default rootRouter;   