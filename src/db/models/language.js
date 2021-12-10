import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().language;

const constraints = {}

const languageList = async () => { // получить список языков
    try {
        const languages = await _selectFrom("languages");
        if (languages.length > 0) {
            for (let k in languages) {
                languages[k] = new LanguageModel({ ...languages[k] });
            }
            return languages;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getLanguage = async (id) => { // получить язык
    const languages = await _selectFrom("languages", { id });
    if (languages.length > 0) {
        const language = languages[0];
        return new LanguageModel({ ...language });
    };
    throw errors.not_found

}

const createLanguage = async (data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        const add = await _insertInto("languages", data);
        return await getLanguage(add.insertId);
    }
}

/* Модель */

const LanguageModel = class {
    /**
    * @apiDefine LanguageResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} name Название
    * @apiSuccess (200) {String} icon Иконка
    */

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon;
    }

    remove = async () => {
        await _removeById("languages", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            name: this.name,
            icon: this.icon
        }
    }

    update = async () => {
        const data = {
            name: this.name,
            icon: this.icon
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("languages", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    languageList,
    createLanguage,
    getLanguage
}