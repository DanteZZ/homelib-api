import litres from "../gates/litres";
import bukvoed from "../gates/bukvoed";

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

const Get = async (url, type) => {
    return {};
}

export {
    Find,
    Get
}