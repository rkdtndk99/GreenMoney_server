import express from "express"
import {loadUser, updateUser, loadMission, fixMission, createMission, deleteMission, loadMoney,fixMoney} from "../controllers/settingsController.js" 

const settingsRouter = express.Router();

settingsRouter.post('/loadUser', loadUser);
settingsRouter.post('/updateUser',updateUser);
settingsRouter.post('/loadMission', loadMission);
settingsRouter.post('/fixMission', fixMission);
settingsRouter.post('/createMission', createMission);
settingsRouter.post('/deleteMission', deleteMission);
settingsRouter.post('/loadMoney', loadMoney);
settingsRouter.post('/fixMoney', fixMoney);

export default settingsRouter;