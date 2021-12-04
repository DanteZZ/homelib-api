import CoverList from "./controllers/list";
import CoverCreate from "./controllers/create";
import CoverUpdate from "./controllers/update";
import CoverRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/covers/list/ Список переплётов
 * @apiVersion 1.0.0
 * @apiName GetCoverList
 * @apiGroup Covers
 * @apiUse CoverResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', CoverList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/covers/create/ Создать переплёт
 * @apiVersion 1.0.0
 * @apiName CreateCover
 * @apiGroup Covers
 * @apiUse CoverResult
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', CoverCreate); // Создать переплёт

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/covers/update/:id Изменить переплёт
 * @apiVersion 1.0.0
 * @apiName UpdateCover
 * @apiGroup Covers
 * @apiUse CoverResult
 * @apiParam {Number} id Идентификатор переплёта
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', CoverUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/covers/delete/:id Удалить переплёт
 * @apiVersion 1.0.0
 * @apiName DeleteCover
 * @apiGroup Covers
 * @apiUse CoverResult
 * @apiParam {Number} id Идентификатор переплёта
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', CoverRemove);

export default router;