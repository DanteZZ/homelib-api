import PublisherList from "./controllers/list";
import PublisherCreate from "./controllers/create";
import PublisherUpdate from "./controllers/update";
import PublisherRemove from "./controllers/remove";
import PublisherRemoveImg from "./controllers/removeimg";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/publishers/list/ Список издателей
 * @apiVersion 1.0.0
 * @apiName GetPublisherList
 * @apiGroup Publishers
 * @apiUse PublisherResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', PublisherList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/publishers/create/ Создать издателя
 * @apiVersion 1.0.0
 * @apiName CreatePublisher
 * @apiGroup Publishers
 * @apiUse PublisherResult
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', PublisherCreate); // Создать издателя

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/publishers/update/:id Изменить издателя
 * @apiVersion 1.0.0
 * @apiName UpdatePublisher
 * @apiGroup Publishers
 * @apiUse PublisherResult
 * @apiParam {Number} id Идентификатор издателя
 * @apiParam {String} name
 * @apiParam {String} image
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', PublisherUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/publishers/delete/:id Удалить издателя
 * @apiVersion 1.0.0
 * @apiName DeletePublisher
 * @apiGroup Publishers
 * @apiUse PublisherResult
 * @apiParam {Number} id Идентификатор издателя
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', PublisherRemove);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/publishers/deleteimg/:id Удалить изображение издателя
 * @apiVersion 1.0.0
 * @apiName DeletePublisherImg
 * @apiGroup Publishers
 * @apiUse PublisherResult
 * @apiParam {Number} id Идентификатор издателя
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
 router.delete('/deleteimg/:id', PublisherRemoveImg);

export default router;