import Mission from "../models/Mission.js";
import Parent from "../models/Parent.js";
import Child from "../models/Child.js";

//로그인하면 client local Storage에 jwt token, isParent저장
//isParent => 1이면 부모, 0이면 자식
//password local storage에 저장할 때 암호화해서 저장

export const loadMission = async (req, res) => {
    const {email, isParent} = req.body; //post로 token, isParent 넘겨줄 것
    //email => token
    // var base64Url = token.split('.')[1];
    // var base64 = base64Url.replace('-', '+').replace('_', '/');
    // const email = JSON.parse(atob(base64)).email

    if(isParent){
        const user = await Parent.find({email:email});
        const mission = await Mission.find({_id: user[0].missionId});
        console.log(mission[0].askForConfirm,
            mission[0].completed);
        res.json(mission);
    }
    else{
        const user = await Child.find({email:email});
        const mission = await Mission.find({_id: user[0].missionId});
        res.json(mission);
        
    }
    // client 측에서 mission 받아서 뿌려줄 때 mission 마다 _id 값도 저장해놓아야
    // 버튼눌러서 확인요청 주고 받을 때 그 mission지정 가능
    // client 측에서 mission의 completed와 askForConfirm에 따라 ui 다르게 구성
}

export const askForConfirm = async (req,res) => {
    
    const {id} = req.body; //해당 mission의 _id 받아옴
    
    try{
        await Mission.update( {_id: id},
           {$set: {askForConfirm: 1}}
        );
    }
    catch(error){
        console.log('error 발생');
    }

    res.send("success");
}   
// verifyToken을 통해 검증된 후 진행

export const confirmMission = async (req,res) => {
    
    const {id} = req.body; //해당 mission의 _id 받아옴

    try{
        await Mission.update( {_id: id},
           {$set: {askForConfirm: 0, completed: 1}}
        );
    }
    catch(error){
        console.log('error 발생');
    }

    res.send("success");
}   
// verifyToken을 통해 검증된 후 진행

