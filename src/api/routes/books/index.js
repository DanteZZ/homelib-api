import BookList from "./controllers/list";
import BookCreate from "./controllers/create";
import BookUpdate from "./controllers/update";
import BookRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/books/list/ Список книг
 * @apiVersion 1.0.0
 * @apiName GetBookList
 * @apiGroup Books
 * @apiUse BookResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', BookList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/books/create/ Создать книгу
 * @apiVersion 1.0.0
 * @apiName CreateBook
 * @apiGroup Books
 * @apiUse BookResult
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', BookCreate); // Создать книгу

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/books/update/:id Изменить книгу
 * @apiVersion 1.0.0
 * @apiName UpdateBook
 * @apiGroup Books
 * @apiUse BookResult
 * @apiParam {Number} id Идентификатор книги
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', BookUpdate); // Не подтверждать приглашение в диалоги

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/books/delete/:id Удалить книгу
 * @apiVersion 1.0.0
 * @apiName DeleteBook
 * @apiGroup Books
 * @apiUse BookResult
 * @apiParam {Number} id Идентификатор книги
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', BookRemove); // Не подтверждать приглашение в диалоги

export default router;