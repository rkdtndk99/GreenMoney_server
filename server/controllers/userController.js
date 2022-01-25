import Mission from "../models/Mission.js";
import Parent from "../models/Parent.js";
import Child from "../models/Child.js";
import jwt from 'jsonwebtoken';
import {secretKey, option} from "../../config/secretkey.js";

//로그인하면 client local Storage에 jwt token, email, password, isParent저장
//isParent => 1이면 부모, 0이면 자식

export const loadMission = async (req, res) => {
    
    const {email, isParent} = req.body; //post로 email, isParent 넘겨줄 것

    if(isParent){
        const user = await Parent.find({email:email});
    }
    else{
        const user = await Child.find({email:email});
    }
    const mission = await Mission.find({_id: user.missionId});
    
};