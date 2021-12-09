import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().category;

const constraints = {}

const categoryList = async () => { // получить список категорий
    try {
        const categories = await _selectFrom("categories");
        if (categories.length > 0) {
            for (let k in categories) {
                categories[k] = new CategoryModel({ ...categories[k] });
            }
            return categories;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getCategory = async (id) => { // получить категорию
    const categories = await _selectFrom("categories", { id });
    if (categories.length > 0) {
        const category = categories[0];
        return new CategoryModel({ ...category });
    };
    throw errors.not_found

}

const createCategory = async (data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        const add = await _insertInto("categories", data);
        const category = await _selectFrom("categories", { id: add.insertId });
        return category[0];
    }
}

/* Модель */

const CategoryModel = class {
    /**
    * @apiDefine CategoryResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} name Название
    * @apiSuccess (200) {Number} parent ID родительской категории
    */

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.parent = data.parent;
    }

    remove = async () => {
        await _removeById("categories", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            name: this.name,
            parent: this.parent
        }
    }

    update = async () => {
        const data = {
            name: this.name,
            parent: this.parent,
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("categories", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    categoryList,
    createCategory,
    getCategory
}