import { errorMessages, common } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";
import { saveImage, removeImage } from "../file";

const errors = errorMessages().publisher;

const constraints = {}

const publisherList = async () => { // получить список издателей
    try {
        const publishers = await _selectFrom("publishers");
        if (publishers.length > 0) {
            for (let k in publishers) {
                publishers[k] = new PublisherModel({ ...publishers[k] });
            }
            return publishers;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getPublisher = async (id) => { // получить издателя
    const publishers = await _selectFrom("publishers", { id });
    if (publishers.length > 0) {
        const publisher = publishers[0];
        return new PublisherModel({ ...publisher });
    };
    throw errors.not_found

}

const createPublisher = async (data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        const add = await _insertInto("publishers", data);
        const publisher = await _selectFrom("publishers", { id: add.insertId });
        return publisher[0];
    }
}

/* Модель */

const PublisherModel = class {
    /**
    * @apiDefine PublisherResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} name Название
    * @apiSuccess (200) {String} image Изображение
    */

    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
    }

    remove = async () => {
        if (this.image) { await removeImage(this.image); }
        await _removeById("publishers", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            name: this.name,
            image: this.image ? common.parameters.repo_images + this.image : this.image
        }
    }

    setImage = async (base64) => {
        try {
            if (base64) {
                if (this.image) { await removeImage(this.image) };
                const name = await saveImage(base64);
                this.image = name;
                return true;
            } else {
                await this.removeImage();
            }
        } catch (e) {
            throw e;
        }
    }

    removeImage = async () => {
        try {
            if (this.image) { await removeImage(this.image); }
            this.image = null;
            return true;
        } catch (e) {
            throw e;
        }
    }

    update = async () => {
        const data = {
            name: this.name,
            image: this.image
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("publishers", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    publisherList,
    createPublisher,
    getPublisher
}