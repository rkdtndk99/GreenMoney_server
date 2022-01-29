import mongoose from "mongoose";

const pinSchema = new mongoose.Schema({
    max: {type: Number, required: true},
    salaryDay: {type: String, required: true},
    parentId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Parent"},
    childId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Child"}
})

const Pin = mongoose.model('Pin', pinSchema);
export default Pin; 