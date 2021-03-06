import { errorMessages, common } from "../../configs";
import validate from "validate.js";
import { _selectFrom, _insertInto, _updateIn, _removeById } from "../common";
import { removeImage, saveImage } from "../file";

const errors = errorMessages().book;

const constraints = {}

const bookList = async (id) => { // получить список книг
    try {
        const books = await _selectFrom("books", { user: id });
        if (books.length > 0) {
            for (let k in books) {
                const handovereds = await _selectFrom("handovers", { handovered: 1, book: books[k].id });
                const handovered = handovereds.length ? true : false
                books[k] = new BookModel({ ...books[k], handovered });
            }
            return books;
        }
        return [];
    } catch (e) {
        return [];
    }
}

const getBook = async (user, id) => { // получить книгу
    const books = await _selectFrom("books", { user, id });
    if (books.length > 0) {
        const book = books[0];
        const handovereds = await _selectFrom("handovers", { handovered: 1, book: book.id });
        const handovered = handovereds.length ? true : false
        return new BookModel({ ...book, handovered });
    };
    throw errors.not_found

}

const createBook = async (from, data) => {
    const isInvalid = validate(data, constraints);
    if (isInvalid) {
        throw isInvalid
    } else {
        data.user = from
        data.image = data.image ? await saveImage(data.image) : null;
        data.read_dates = JSON.stringify(data.read_dates);
        data.reading = JSON.stringify(data.reading);
        const add = await _insertInto("books", data);
        return await getBook(from,add.insertId);
    }
}

/* Модель */

const BookModel = class {
    /**
    * @apiDefine BookResult
    * @apiSuccess (200) {Number} id ID
    * @apiSuccess (200) {String} author Автор
    * @apiSuccess (200) {String} name Название
    * @apiSuccess (200) {Number} publisher Издатель
    * @apiSuccess (200) {Year} year Год
    * @apiSuccess (200) {Number} isbn ISBN
    * @apiSuccess (200) {Date} buy_date Дата покупки
    * @apiSuccess (200) {Number} language Язык
    * @apiSuccess (200) {Number} pages Количество страниц
    * @apiSuccess (200) {Number} price Цена
    * @apiSuccess (200) {String} image Изображение
    * @apiSuccess (200) {Number} cover Тип обложки
    * @apiSuccess (200) {Number} category Категория
    * @apiSuccess (200) {Number} rate Рейтинг
    * @apiSuccess (200) {Boolean} handovered Отдана ли кому-то
    * @apiSuccess (200) {String} serie Серия
    * @apiSuccess (200) {Array} read_dates Даты прочтения
    * @apiSuccess (200) {Object} reading читается ли сейчас книга
    * @apiSuccess (200) {Boolean} unhauled На паузе ли книга
    * @apiSuccess (200) {Boolean} ordered Находится ли она в доставке
    */

    constructor(data) {
        this.id = data.id;
        this.user = data.user;
        this.name = data.name;
        this.author = data.author;
        this.publisher = data.publisher;
        this.year = data.year;
        this.isbn = data.isbn;
        this.buy_date = data.buy_date;
        this.language = data.language;
        this.pages = data.pages;
        this.price = data.price;
        this.image = data.image;
        this.cover = data.cover;
        this.category = data.category;
        this.rate = data.rate;
        this.handovered = data.handovered;
        this.serie = data.serie;
        this.read_dates = JSON.parse(data.read_dates);
        this.reading = JSON.parse(data.reading);
        this.unhauled = data.unhauled;
        this.ordered = data.ordered;
    }

    remove = async () => {
        if (this.image) { await removeImage(this.image); }
        await _removeById("books", this.id);
        return true;
    }

    info = () => {
        return {
            id: this.id,
            name: this.name,
            publisher: this.publisher,
            author: this.author,
            year: this.year,
            isbn: this.isbn,
            buy_date: this.buy_date,
            language: this.language,
            pages: this.pages,
            price: this.price,
            image: this.image ? common.parameters.repo_images + this.image : this.image,
            cover: this.cover,
            category: this.category,
            rate: this.rate,
            handovered: this.handovered,
            serie: this.serie,
            unhauled: this.unhauled,
            reading: this.reading,
            read_dates: this.read_dates,
            ordered: this.ordered,

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
            user: this.user,
            name: this.name,
            publisher: this.publisher,
            author: this.author,
            year: this.year,
            isbn: this.isbn,
            buy_date: this.buy_date,
            language: this.language,
            pages: this.pages,
            price: this.price,
            image: this.image,
            cover: this.cover,
            category: this.category,
            rate: this.rate,
            reading: JSON.stringify(this.reading),
            serie: this.serie,
            read_dates: JSON.stringify(this.read_dates),
            unhauled: this.unhauled,
            ordered: this.ordered
        }
        const isInvalid = validate(data, constraints);

        if (isInvalid) {
            throw isInvalid
        } else {
            try {
                const res = await _updateIn("books", this.id, data)
                return true;
            } catch (e) {
                throw errors.update
            }
        }
    }
}

export {
    bookList,
    createBook,
    getBook
}