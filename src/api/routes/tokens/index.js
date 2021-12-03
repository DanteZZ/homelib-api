import gen from "./controllers/gen";
//import removeToken from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/token/gen Сгенерировать токен
 * @apiVersion 0.5.0
 * @apiName GenToken
 * @apiGroup Tokens
 * @apiParam {String} salt Ключ юзера
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":<Bearer roken>
 *     }
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 404 NOT FOUND
 *      {
 *          "errors": "Пользователь с таким ключом не найден"
 *      }
 */
router.post('/gen', gen);

export default router;