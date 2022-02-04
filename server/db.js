import mongoose from "mongoose";
// "mongodb://127.0.0.1:27017/gag"
mongoose.connect("mongodb+srv://rkdtndk99:A1b2c347@cluster0.mpbip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);