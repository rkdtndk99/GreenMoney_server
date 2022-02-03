import Parent from "../models/Parent.js"
import Child from "../models/Child.js"
import Mission from "../models/Mission.js"
import Money from "../models/Money.js"

//이 부분 모르겠다... 
export const updateParent = async(req, res) => {
    const {email, childEmail, phonenumber, password } = req.body;

    try{
        await Parent.findByIdAndUpdate(email, 
            {childEmail, phonenumber, password}
        );
    }
    catch(error){
        return res.status(400).send('FAIL : parent 정보 수정 실패');
    }
}