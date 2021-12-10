import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().cover;

const constraints = {}

const coverList = async () => { // получить список переплётов
    try {
        const covers = await _selectFrom("covers");
        if (covers.length > 0) {
            for (let k in covers) {
                covers[k] = new CoverModel({ ...covers[k] });
            }
            return covers;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getCover = async (id) => { // получить переплёт
    const covers = await _selectFrom("covers", { id });
    if (covers.length > 0) {
        const cover = covers[0];
        return new CoverModel({ ...cover });
    };
    throw errors.not_found

}

const createCover = async (data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        const add = await _insertInto("covers", data);
        return await getCover(add.insertId);
    }
}

/* Модель */

const CoverModel = class {
    /**
    * @apiDefine CoverResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} name Название
    */

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
    }

    remove = async () => {
        await _removeById("covers", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            name: this.name
        }
    }

    update = async () => {
        const data = {
            name: this.name,
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("covers", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    coverList,
    createCover,
    getCover
}