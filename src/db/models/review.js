import { errorMessages } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";

const errors = errorMessages().review;

const constraints = {}

const reviewList = async (user,book=null) => { // получить список заметок
    try {
        const forBook = book ? {book} : {}
        const reviews = await _selectFrom("reviews",{user, ...forBook});
        if (reviews.length > 0) {
            for (let k in reviews) {
                reviews[k] = new ReviewModel({ ...reviews[k] });
            }
            return reviews;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getReview = async (user,id) => { // получить заметку
    const reviews = await _selectFrom("reviews", { id, user });
    if (reviews.length > 0) {
        const review = reviews[0];
        return new ReviewModel({ ...review });
    };
    throw errors.not_found

}

const createReview = async (user,data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        data.user = user;
        const add = await _insertInto("reviews", data);
        const review = await _selectFrom("reviews", { id: add.insertId });
        return review[0];
    }
}

/* Модель */

const ReviewModel = class {
    /**
    * @apiDefine ReviewResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {Number} book ID Книги
    * @apiSuccess (200) {Number} page Страница 
    * @apiSuccess (200) {String} text Текст
    */

    constructor(data) {
        this.id = data.id;
        this.book = data.book;
        this.page = data.page;
        this.text = data.text
    }

    remove = async () => {
        await _removeById("reviews", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            book: this.book,
            page: this.page,
            text: this.text
        }
    }

    update = async () => {
        const data = {
            book: this.book,
            page: this.page,
            text: this.text
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("reviews", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    reviewList,
    createReview,
    getReview
}