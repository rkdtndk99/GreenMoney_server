import express from "express"
import {updateParent} from "../controllers/settingsController.js" 

const settingsRouter = express.Router();

settingsRouter.post('/parent',updateParent);

export default settingsRouter;