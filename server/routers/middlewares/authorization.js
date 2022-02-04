import jwt from "jsonwebtoken"
import {secretKey} from "../../config/secret.js"

export const verifyToken = (req, res, next) => {
    try {
        const {token}= req.body
        const decoded = jwt.verify(token, secretKey);
        if (decoded) {
            res.locals.email = decoded.email;
            res.locals.isParent = decoded.isParent;
            next();
        } 
        else {
            res.json({ error: 'unauthorized' });
        }
    } catch (err) {
        res.json({ error: 'token expired' });
    }
};