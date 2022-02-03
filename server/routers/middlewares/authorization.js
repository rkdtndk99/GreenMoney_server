import jwt from "jsonwebtoken"
import {secretKey} from "../../config/secret.js"

export const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken, secretKey);
        
        if (decoded) {
            res.locals.userId = decoded.user_id;
            next();
        } 
        else {
            res.json({ error: 'unauthorized' });
        }
    } catch (err) {
        res.json({ error: 'token expired' });
    }
};