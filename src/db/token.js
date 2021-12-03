import jwt from "jsonwebtoken";
import { getUser } from "./models/user";
import { errorMessages } from "../configs";

const errmsg = errorMessages().tokens;

const Sign = ({salt,username,id}) => new Promise((res,rej)=>{
    jwt.sign({id,username,salt},salt,(err,token) => res(token))
})

const Verify = ([token,salt]) => new Promise((res,rej)=>{
    jwt.verify(token, salt,(err, decoded) => {
        if (err) {
            rej(err)
        } else {
            res(decoded);
        }
    });
})

export const genToken = async (salt) => {
    if (!salt) {throw errmsg.not_found_salt};
    try {
        const user = await getUser("salt",salt);
        if (user) {
            const token = await Sign(user.info(true));
            return token
        }
        throw errmsg.not_found_salt
    } catch (e) {
        throw errmsg.undefined
    }
}

export const checkToken = async (tokenWithSalt) => {
    if (!tokenWithSalt) {throw errmsg.auth}
    try {
        const pay = Buffer.from(tokenWithSalt, 'base64').toString().split("/");
        const data = await Verify(pay);
        const user = await getUser("salt",data.salt);
        if (!user) {throw errmsg.auth};
        return data;
    } catch (e) {
        throw errmsg.auth
    }

}