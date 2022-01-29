import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phonenumber: {type: String, required: true},
    parentEmail: {type: String}
})

const Child = mongoose.model('Child', childSchema);
export default Child; 