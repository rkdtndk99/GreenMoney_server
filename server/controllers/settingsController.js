import Parent from "../models/Parent.js"
import Child from "../models/Child.js"
import Mission from "../models/Mission.js"
import Money from "../models/Money.js"
import moment from "moment";

export const updateUser = async(req, res) => {
    const email = res.locals.email
    const isParent = res.locals.isParent
    const {connectedEmail, phonenumber, password } = req.body;

    if(isParent){
        const user_p = await Parent.find({email : email}); 
    
        try{
            await Parent.findByIdAndUpdate(user_p[0]._id.toString(),  
                {$set : {childEmail : connectedEmail, phonenumber, password}}
            );
            return res.status(200).send('success');
        }
        catch(error){
            return res.status(400).send('fail');
        }
    }
    else{
        const user_c = await Child.find({email : email}); 
    
        try{
            await Child.findByIdAndUpdate(user_c[0]._id.toString(),  
                {$set : {parentEmail : connectedEmail, phonenumber, password}}
            );
            return res.status(200).send('success');
        }
        catch(error){
            return res.status(400).send('fail');
        }
    }
}

export  const loadUser = async(req,res) => {
    const email = res.locals.email
    const isParent = res.locals.isParent

    if(isParent){
        const user = await Parent.find({email:email}); 
        res.json({user})
    }
    else{
        const user = await Child.find({email:email}); 
        res.json({user})
    }
    
}

export const loadMission = async(req,rex) => {
    const email = req.locals.email
    const isParent = req.locals.isParent

    if(isParent){
        const user = await Parent.find({email:email});  
        const mission = await Mission.find({parentId: user[0]._id});
        res.json({mission});
    }
    else{
        const user = await Child.find({email:email});
        const mission = await Mission.find({childId: user[0]._id });
        res.json({mission});
    }
}

export const fixMission = async(req,res) => {
    const {id, missionTitle, deadline, compensation} = req.body;

    try{
        await Mission.findByIdAndUpdate(id, 
            {$set: {missionTitle, deadline, compensation}}
        );
        return res.status(200).send('success');
    }
    catch(error){
        return res.status(400).send('fail');
    }
}

export const createMission = async(req,res) => {
    const email = res.locals.email;
    const isParent = res.locals.isParent;
    const {missionTitle, deadline, compensation} = req.body;
    
    if(isParent){
        const user = await Parent.find({email:email});  
        try{
            const child = await Child.find({parentEmail:user[0].email})
            await Mission.create({
                missionTitle, deadline, compensation, completed: 0, 
                askForConfirm: 0, date: moment().format('YYYY-MM-DD'),
                parentId: user[0]._id, childId: child[0]._id
            });
            res.status(200).send('SUCCESS : mission 정보 저장 성공');
        }catch(error){
            res.status(400).send('FAIL : mission 정보 저장 실패');
        }
    }
    else{
        const user = await Child.find({email:email});
        try{
            const parent = await Parent.find({childEmail:user[0].email})
            await Mission.create({
                missionTitle, deadline, compensation, completed: 0, 
                askForConfirm: 0, date: moment().format('YYYY-MM-DD'),
                parentId: parent[0]._id, childId: user[0]._id
            });
            res.status(200).send('SUCCESS : mission 정보 저장 성공');
        }catch(error){
            res.status(400).send('FAIL : mission 정보 저장 실패');
        }
    }
}

export const deleteMission = async(req,res) => {
    const id = req.body;
    try{
        Mission.deleteOne({_id: id}, function(error){
            if (error) return handleError(error);
        })
        return res.status(200).send('success');
    }catch(error){
        res.status(400).send('fail');
    }
}

export const loadMoney = async(req,res) => {

    const email = req.locals.email;
    const isParent = req.locals.isParent;

    if(isParent){
        const user = await Parent.find({email:email});  
        const money = await Money.find({parentId: user[0]._id});
        res.json({money});
    }
    else{
        const user = await Child.find({email:email});
        const money = await Money.find({childId: user[0]._id });
        res.json({money});
    }
}

export const fixMoney = async(req,res) => {

    const email = req.locals.email;
    const isParent = req.locals.isParent;
    const {maxMoney, paymentDate} = req.body;
    
    if(isParent){
        const user = await Parent.find({email:email});  
        const money = await Money.find({parentId: user[0]._id});
        await Money.findByIdAndUpdate(money[0]._id, 
            {$set: {maxMoney, paymentDate}}
        );
        return res.status(200).send('success');
    }
    else{
        const user = await Child.find({email:email});
        const money = await Money.find({childId: user[0]._id });
        await Money.findByIdAndUpdate(money[0]._id, 
            {$set: {maxMoney, paymentDate}}
        );
        return res.status(200).send('success');
    }
}

