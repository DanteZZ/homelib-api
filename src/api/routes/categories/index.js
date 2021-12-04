import CategoryList from "./controllers/list";
import CategoryCreate from "./controllers/create";
import CategoryUpdate from "./controllers/update";
import CategoryRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/categories/list/ Список категорий
 * @apiVersion 1.0.0
 * @apiName GetCategoryList
 * @apiGroup Categories
 * @apiUse CategoryResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', CategoryList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/categories/create/ Создать категорию
 * @apiVersion 1.0.0
 * @apiName CreateCategory
 * @apiGroup Categories
 * @apiUse CategoryResult
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', CategoryCreate); // Создать категорию

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/categories/update/:id Изменить категорию
 * @apiVersion 1.0.0
 * @apiName UpdateCategory
 * @apiGroup Categories
 * @apiUse CategoryResult
 * @apiParam {Number} id Идентификатор категории
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', CategoryUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/categories/delete/:id Удалить категорию
 * @apiVersion 1.0.0
 * @apiName DeleteCategory
 * @apiGroup Categories
 * @apiUse CategoryResult
 * @apiParam {Number} id Идентификатор категории
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', CategoryRemove);

export default router;