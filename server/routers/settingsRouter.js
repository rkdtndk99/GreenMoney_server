import express from "express"
import {updateUser} from "../controllers/settingsController.js" 

const settingsRouter = express.Router();

settingsRouter.post('/updateUser',updateUser);

export default settingsRouter;