import express from "express"
import {updateParent} from "../controllers/settingsController.js" 

const settingsRouter = express.Router();

settingsRouter.put('/settings/user',updateParent );

export default settingsRouter;