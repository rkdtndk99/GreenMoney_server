import mongoose from "mongoose";
import moment from "moment";



const missionSchema = new mongoose.Schema({
    missionTitle: {type: String, required: true},
    deadline: {type: String},
    compensation: {type: Number, required: true},
    completed: {type: Number, default: 0},
    askForConfirm: {type: Number, default: 0},
    date: {type: String,required:true, default: moment().format('YYYY-MM-DD') }
})

const Mission = mongoose.model('Mission', missionSchema);
export default Mission; 