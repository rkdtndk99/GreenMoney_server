import express from "express"
import {updateParent, loadUser, loadMission, fixMission, loadMoney, fixMoney} from "../controllers/settingsController.js" 

const settingsRouter = express.Router();

settingsRouter.post('/updateParent',updateParent);
settingsRouter.post('/loadUser', loadUser);
settingsRouter.post('/loadMission', loadMission);
settingsRouter.post('/fixMission', fixMission);
settingsRouter.post('/loadMoney', loadMoney);
settingsRouter.post('/fixMoney', fixMoney);

export default settingsRouter;