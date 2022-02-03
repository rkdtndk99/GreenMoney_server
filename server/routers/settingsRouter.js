import express from "express"
import {updateUser, loadUser, loadMission, fixMission, loadMoney, fixMoney} from "../controllers/settingsController.js" 

const settingsRouter = express.Router();

settingsRouter.post('/updateUser',updateUser);
settingsRouter.post('/loadUser', loadUser);
settingsRouter.post('/loadMission', loadMission);
settingsRouter.post('/fixMission', fixMission);
settingsRouter.post('/loadMoney', loadMoney);
settingsRouter.post('/fixMoney', fixMoney);

export default settingsRouter;