import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().handover;

const constraints = {}

const handoverList = async (user,book=null, to=null) => { // получить список передач
    try {
        const forBook = book ? {book} : {}
        const forTo = to ? {to} : {}
        const handovers = await _selectFrom("handovers",{user, ...forBook, ...forTo});
        if (handovers.length > 0) {
            for (let k in handovers) {
                handovers[k] = new HandoverModel({ ...handovers[k] });
            }
            return handovers;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getHandover = async (user,id) => { // получить передачу
    const handovers = await _selectFrom("handovers", { id, user });
    if (handovers.length > 0) {
        const handover = handovers[0];
        return new HandoverModel({ ...handover });
    };
    throw errors.not_found

}

const createHandover = async (user,data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        data.user = user;
        const add = await _insertInto("handovers", data);
        return await getHandover(add.insertId);
    }
}

/* Модель */

const HandoverModel = class {
    /**
    * @apiDefine HandoverResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {Number} book ID Книги
    * @apiSuccess (200) {Number} to ID Друга
    * @apiSuccess (200) {String} date Дата передачи 
    * @apiSuccess (200) {String} return_date Дата возврата
    * @apiSuccess (200) {String} fact_date Фактическая дата возврата
    * @apiSuccess (200) {String} handovered Передана ли
    */

    constructor(data) {
        this.id = data.id;
        this.book = data.book;
        this.to = data.to;
        this.date = data.date;
        this.return_date = data.return_date;
        this.fact_date = data.fact_date;
        this.handovered = data.handovered;
    }

    remove = async () => {
        await _removeById("handovers", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            book: this.book,
            to: this.to,
            date: this.date,
            return_date: this.return_date,
            fact_date: this.fact_date,
            handovered: this.handovered,
        }
    }

    update = async () => {
        const data = {
            book: this.book,
            to: this.to,
            date: this.date,
            return_date: this.return_date,
            fact_date: this.fact_date,
            handovered: this.handovered,
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("handovers", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    handoverList,
    createHandover,
    getHandover
}