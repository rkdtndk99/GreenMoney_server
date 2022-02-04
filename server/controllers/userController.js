import Parent from "../models/Parent.js"
import Child from "../models/Child.js"
import jwt from "jsonwebtoken"
import {secretKey} from "../config/secret.js"


export const ParentJoin = async(req, res) => {
    const {name, email, pw, verifypw, phonenumber, childEmail} = req.body; 
    if (pw != verifypw){
        return res.status(400).send('FAIL : 비밀번호 오류');
    }
    else{
        const parentEmailExists = await Parent.exists({email});
        if(parentEmailExists){
            res.status(400).send('FAIL : 이미 가입된 이메일')
        } 
        else{
            try{
                await Parent.create({
                    name, email, password : pw, phonenumber, childEmail
                });
                res.status(200).send('SUCCESS : parent join 정보 저장 성공');
            }catch(error){
                res.status(400).send('FAIL : parent join 정보 저장 실패');
            }
        }
    }
}

export const ChildJoin = async(req, res) => {
    const {name, email, pw, verifypw, phonenumber, parentEmail} = req.body; 
    if (pw != verifypw){
        return res.status(400).send('FAIL : 비밀번호 오류');
    }
    else{
        const childEmailExists = await Child.exists({email});
        if(childEmailExists){
            res.status(400).send('FAIL : 이미 가입된 이메일')
        } 
        else{
            try{
                await Child.create({
                    name, email, password : pw, phonenumber, parentEmail
                });
                res.status(200).send('SUCCESS : child join 정보 저장 성공');
            }catch(error){
                res.status(400).send('FAIL : child join 정보 저장 실패');
            }
        }
    }
}

export const parentLogin = async(req, res, next) => {
    const{email, pw} = req.body;
    const parentEmailExists = await Parent.exists({email});
    if(parentEmailExists){
        const user_p = await Parent.find({email : email});
        if(user_p[0].password == pw){
            const isParent = 1
            const token1 = jwt.sign({
                email : user_p[0].email,
                isParent
            }, secretKey,{
                expiresIn : '1h'
            });
            const token =String(token1);
            return res.status(200).json({token, isParent});
        }
        else {
            return res.status(400).json({token:'wrongpassword'});
        }
    }
    else{
        return res.status(400).json({token:'wrongemail'});
    }
}

export const childLogin = async(req, res, next) => {
    const{email, pw} = req.body;
    const childEmailExists = await Child.exists({email});
    if(childEmailExists){
        const user_p = await Child.find({email : email});
        if(user_p[0].password == pw){
            const isParent = 0
            const token1 = jwt.sign({
                email : user_p[0].email,
                isParent
            }, secretKey,{
                expiresIn : '1h'
            });
            const token =String(token1);
            return res.status(200).json({token, isParent});
        }
        else {
            return res.status(400).json({token:'wrongpassword'});
        }
    }
    else{
        return res.status(400).json({token:'wrongemail'});
    }
}
