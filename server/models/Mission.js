import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    missionTitle: {type: String, required: true},
    deadline: {type: String, required: true},
    compensation: {type: Number},
    completed: {type: Number, default: 0},
    askForConfirm: {type: Number, default: 0}
})

const Mission = mongoose.model('Mission', missionSchema);
export default Mission; 