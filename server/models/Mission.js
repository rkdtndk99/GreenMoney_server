import mongoose from "mongoose";
import moment from "moment";

const missionSchema = new mongoose.Schema({
    missionTitle: {type: String, required: true},
    deadline: {type: String},
    compensation: {type: Number,required: true},
    completed: {type: Number,required: true, default: 0},
    askForConfirm: {type: Number,required: true, default: 0},
    date: {type: String, required:true, default: moment().format('YYYY-MM-DD')},
    parentId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Parent"},
    childId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Child"}
})

const Mission = mongoose.model('Mission', missionSchema);
export default Mission; 