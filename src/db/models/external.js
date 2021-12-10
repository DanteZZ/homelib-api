import bukvoed from "../gates/bukvoed";
import litres from "../gates/litres";
import request from "request";

export const ExternalModel = class {
    constructor(data) { this.data = data; }
    info() { return this.data; }
}

const Find = async (query) => {
    const Gates = [
        litres,
        bukvoed
    ];

    let result = Gates.map(i => ({
        name: i.name,
        image: i.image,
        results: []
    }));

    for (let k in Gates) {
        const Gate = Gates[k];
        try {
            result[k].results = await Gate.find(query);
        } catch { };
    }
    return result.map(r => ({ ...r, results: r.results.map(i => i.info()) }));
}

const getFile = (url) => {
    return new Promise((_res, _rej) => {
        request.get(url, { insecureHTTPParser: true, encoding: null }, (err, result, body) => {
            if (err) {
                _rej(err);
            } else {
                _res({ result, body });
            }
        })
    })
}

const GetImage = async (url) => {
    const info = await getFile(url);
    return { info: info.body, type: info.result.caseless.dict['content-type'] }
}

export {
    Find,
    GetImage
}