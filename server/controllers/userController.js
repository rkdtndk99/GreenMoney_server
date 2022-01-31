import Parent from "../models/Parent.js"
import Child from "../models/Child.js"

export const postParentJoin = async(req, res) => {
    const {name, email, pw, verifypw, phonenumber, childEmail} = req.body; 
    if (pw != verifypw){
        return res.status(409).send({error : 'db failure'});
    }
    else{
        const parentEmailExists = await Parent.exists({email});
        if(parentEmailExists){
            console.log('이미 가입된 이메일')
        } 
        else{
            try{
                await Parent.create({
                    name, email, password : pw, phonenumber, childEmail
                });
                console.log('db에 회원정보 저장 성공')
            }catch(error){
                console.log('db에 회원정보 저장 실패')
            }
        }
        res.send('Parent Join OK')
    }
}

export const postChildJoin = async(req, res) => {
    const {name, email, pw, verifypw, phonenumber, parentEmail} = req.body; 
    if (pw != verifypw){
        return res.status(409).send({error : 'db failure'});
    }
    else{
        const childEmailExists = await Child.exists({email});
        if(childEmailExists){
            console.log('이미 가입된 이메일')
        } 
        else{
            try{
                await Child.create({
                    name, email, password : pw, phonenumber, parentEmail
                });
                console.log('db에 회원정보 저장 성공')
            }catch(error){
                console.log('db에 회원정보 저장 실패')
            }
        }
        res.send('Child Join OK')
    }
}