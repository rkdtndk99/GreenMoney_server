import Parent from "../models/Parent.js"
import Child from "../models/Child.js"
import Mission from "../models/Mission.js"
import Money from "../models/Money.js"

export const updateUser = async(req, res) => {
    const isParent = res.locals.email
    const {email, connectedEmail, phonenumber, password } = req.body;

    if(isParent){
        const user_p = await Parent.find({email : email}); 
    
        try{
            await Parent.findByIdAndUpdate(user_p[0]._id.toString(),  
                {$set : {childEmail : connectedEmail, phonenumber, password}}
            );
            return res.status(200).send('SUCCESS : parent 정보 수정 성공');
        }
        catch(error){
            return res.status(400).send('FAIL : parent 정보 수정 실패');
        }
    }
    else{
        const user_c = await Child.find({email : email}); 
    
        try{
            await Child.findByIdAndUpdate(user_c[0]._id.toString(),  
                {$set : {parentEmail : connectedEmail, phonenumber, password}}
            );
            return res.status(200).send('SUCCESS : child 정보 수정 성공');
        }
        catch(error){
            return res.status(400).send('FAIL : child 정보 수정 실패');
        }
    }
}