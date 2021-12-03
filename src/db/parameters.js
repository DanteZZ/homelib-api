import db from "./index";
import { setParameters, common } from "../configs";

const _loadParameters = () => {
    return new Promise((res,rej)=>{
        db.query("SELECT * FROM `parameters`", function (error, results, fields) {
            if (error) {rej(error);}
            res(results);
        });
    })
}

export const loadParameters = async () => {
    try {
        const params = await _loadParameters();
        const parameters = {};
        params.forEach((par) => {
            parameters[par.name] = par.value;
        })
        setParameters(parameters);
        return common.parameters;
    } catch (e) {
        throw e;
    }
}
