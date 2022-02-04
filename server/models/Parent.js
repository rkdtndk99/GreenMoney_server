import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phonenumber: {type: String, required: true},
    childEmail: {type: String}
})

const Parent = mongoose.model('Parent', parentSchema);
export default Parent; 