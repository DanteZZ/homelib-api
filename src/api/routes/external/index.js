import ExternalFind from "./controllers/find";
import ExternalGet from "./controllers/get";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/external/search/ Поиск книг
 * @apiVersion 1.0.0
 * @apiName GetExternalFind
 * @apiGroup Externals
 * @apiHeader {String} Authorization Bearer токен.
 * @apiParam {String} query
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/search', ExternalFind);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/external/getimage/ Получить изображение
 * @apiVersion 1.0.0
 * @apiName ExternalGet
 * @apiGroup Externals
 * @apiParam {String} url
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/getimage', ExternalGet);

export default router;