import Parent from "../models/Parent.js"
import Child from "../models/Child.js"
import Mission from "../models/Mission"
import Money from "../models/Money"

export const updateParent = async(res, req) => {
    
    const filter = {
        email : req.body.email
    };

    const update = {
        childEmail : req.body.childEmail,
        phonenumber : req.body.phonenumber,
        password : req.body.phonenumber
    };

    Parent.find(filter, (err, item) => {
        if (item == null) res.status(200).send();
        try{
            await Parent.findOneAndUpdate(filter, update);
            res.status(200).send('SUCCESS : parent 정보 수정 성공');
        }catch(error){
            res.status(400).send('FAIL : parent 정보 수정 실패');
        }
    })
}