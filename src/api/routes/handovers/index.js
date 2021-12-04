import HandoverList from "./controllers/list";
import HandoverCreate from "./controllers/create";
import HandoverUpdate from "./controllers/update";
import HandoverRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/handovers/list/ Список передач
 * @apiVersion 1.0.0
 * @apiName GetHandoverList
 * @apiGroup Handovers
 * @apiUse HandoverResult
 * @apiParam {Number} book
 * @apiParam {Number} to
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', HandoverList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/handovers/create/ Создать передачу
 * @apiVersion 1.0.0
 * @apiName CreateHandover
 * @apiGroup Handovers
 * @apiUse HandoverResult
 * @apiParam {Number} book
 * @apiParam {Number} to
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', HandoverCreate); // Создать передачу

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/handovers/update/:id Изменить передачу
 * @apiVersion 1.0.0
 * @apiName UpdateHandover
 * @apiGroup Handovers
 * @apiUse HandoverResult
 * @apiParam {Number} id Идентификатор передачи
 * @apiParam {Number} book
 * @apiParam {Number} to
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', HandoverUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/handovers/delete/:id Удалить передачу
 * @apiVersion 1.0.0
 * @apiName DeleteHandover
 * @apiGroup Handovers
 * @apiUse HandoverResult
 * @apiParam {Number} id Идентификатор передачи
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', HandoverRemove);

export default router;