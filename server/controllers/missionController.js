import Mission from "../models/Mission.js";
import Parent from "../models/Parent.js";
import Child from "../models/Child.js";
import moment from "moment";
import Money from "../models/Money.js";


function calculateMoney(mission){
    let earned = 0
    const length = mission.length
    for(let i = 0; i<length; i++ ){
        if(mission[i].completed == 1){
            earned += mission[i].compensation
        }
    }
    console.log("earned:", earned);
    return earned
}

function createMonthInfo(mission){
    var month = new Set();
    
    const missionLength = mission.length
    for(var i = 0; i<missionLength; i++ ){
        console.log('hi')
        var missionMonth = mission[i].date.split('-')[0] + '-' + mission[i].date.split('-')[1]
        month.add(missionMonth)
    }
    const arrMonth = Array.from(month);
    const monthLength = arrMonth.length
    
    var summMonth = []

    for(var i = 0; i<monthLength; i++ ){
        summMonth.push([0,0,0])
    }// 첫 칸은 완료미션 수 , 획득한 돈

    for(var i = 0; i<missionLength; i++ ){
        var index = arrMonth.indexOf(mission[i].date.split('-')[0] + '-' + mission[i].date.split('-')[1])
        summMonth[index][2] += 1
        if(mission[i].completed == 1){
            summMonth[index][0] += 1
            summMonth[index][1] += mission[i].compensation
        }
    }

    for(var i = 0; i<monthLength; i++ ){
        summMonth[index][0] = String(summMonth[index][0]) + "/" + String(summMonth[index][2])
        summMonth[index].length = 2
    }

    const existMonth = JSON.stringify(arrMonth);
    const monthInfo = JSON.stringify(summMonth);

    return {existMonth, monthInfo}
}


//로그인하면 client local Storage에 jwt token, isParent저장
//isParent => 1이면 부모, 0이면 자식
//password local storage에 저장할 때 암호화해서 저장
//mission저장할때 date정보 Mission에 date default에 있는걸로 저장할 것

export const loadMonthMission = async (req, res) => {

    const email = res.locals.email;
    const isParent = res.locals.isParent;
    const month = req.body;

    if(isParent){
        const user = await Parent.find({email:email});
        const mission = await Mission.find({parentId: user[0]._id ,date: {$regex: new RegExp(`${month}`)}});
        res.json(mission);
    }
    else{
        const user = await Child.find({email:email});
        const mission = await Mission.find({childId: user[0]._id ,date: {$regex: new RegExp(`${month}`)}});
        res.json(mission);
    }
    // client 측에서 mission 받아서 뿌려줄 때 mission 마다 _id 값도 저장해놓아야
    // 버튼눌러서 확인요청 주고 받을 때 그 mission지정 가능
    // client 측에서 mission의 completed와 askForConfirm에 따라 ui 다르게 구성
}


export const loadAllMission = async (req, res) => {
    console.log(res.locals.email);
    const email = res.locals.email
    const isParent = res.locals.isParent

    if(isParent){
        const user = await Parent.find({email:email});  
        const mission = await Mission.find({parentId: user[0]._id});
        const monthInfo = createMonthInfo(mission);
        console.log(monthInfo);
        res.json(monthInfo);
    }
    else{
        const user = await Child.find({email:email});
        const mission = await Mission.find({childId: user[0]._id });
        const monthInfo = createMonthInfo(mission);
        console.log(monthInfo);
        res.json(monthInfo);
    }
}


export const askForConfirm = async (req,res) => {
    
    const {id} = req.body; //해당 mission의 _id 받아옴
    
    try{
        await Mission.update( {_id: id},
           {$set: {askForConfirm: 1}}
        );
        return res.status(200).send('success');
    }
    catch(error){
        console.log('error 발생');
        return res.status(400).send('fail');
    }
}   
// verifyToken을 통해 검증된 후 진행


export const confirmMission = async (req,res) => {
    
    const {id} = req.body; //해당 mission의 _id 받아옴

    try{
        await Mission.update( {_id: id},
           {$set: {askForConfirm: 0, completed: 1}}
        );
        return res.status(200).send('success');
    }
    catch(error){
        console.log('error 발생');
        return res.status(400).send('fail');
    }
}   
// verifyToken을 통해 검증된 후 진행

export const getPercent = async (req,res) => {

    const email = res.locals.email
    const isParent = res.locals.isParent
    const yearMonth = moment().format('YYYY-MM')

    if(isParent){
        const user = await Parent.find({email:email});
        const money = await Money.find({parentId: user[0]._id });
        const mission = await Mission.find({parentId: user[0]._id ,date: {$regex: new RegExp(`${yearMonth}`)}});
        const percent = calculateMoney(mission)/money[0].maxMoney
        res.send(String(percent));
    }
    else{
        const user = await Child.find({email:email});
        const money = await Money.find({childId: user[0]._id });
        const mission = await Mission.find({childId: user[0]._id ,date: {$regex: new RegExp(`${yearMonth}`)}});   
        const percent = calculateMoney(mission)/money[0].maxMoney
        res.send(String(percent));
    }
}
