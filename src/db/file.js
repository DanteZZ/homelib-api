import fs from "fs";
import md5 from "crypto-js/md5";
import { errorMessages, common } from "../configs";
const errors = errorMessages().upload;

const saveFile = (base64Data,path) => new Promise((res,rej)=> {
    fs.writeFile(path, base64Data, 'base64', function(err) {
        if (err) {console.log(err); rej(errors.save); return false;}
        res(true);
    });
})

const removeFile = (path) => new Promise((res)=> {
    fs.unlink(path, function() {
        res(true);
    });
})


export const saveImage = async (base64) => {
    console.log(process.cwd());
    try {
        const name = md5(Date.now().toString())+".png";
        const path = process.cwd()+common.repo_images+name;
        const base64Data = base64.replace(/^data:image\/png;base64,/, "");
        await saveFile(base64Data,path);
        return name;
    } catch (e) {
        throw e;
    }
}

export const removeImage = async (name) => {
    try {
        const path = process.cwd()+common.repo_images+name;
        await removeFile(path);
        return true;
    } catch (e) {
        throw e;
    }
}