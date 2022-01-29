import mongoose from "mongoose";

const moneySchema = new mongoose.Schema({
    maxMoney : {type : Number, required : true},
    paymentDate : {type : Date, required : true},
    parentId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Parent"},
    childId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "Child"}
})

const Money = mongoose.model('Money', moneySchema);
export default Money;