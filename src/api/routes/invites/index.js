import inviteDialogList from "./controllers/dialog/list";
import inviteDialogAccept from "./controllers/dialog/accept";
import inviteDialogDecline from "./controllers/dialog/decline";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /invites/dialog/ Список приглашений в диалоги
 * @apiVersion 0.5.0
 * @apiName GetDialogInvites
 * @apiGroup Invites-Dialog
 * @apiUse DialogInviteResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *          "id":1,
 *          "dialog":1337,
 *          "message":"Hello there!",
 *          "from":1333
 *      ]
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/dialog/', inviteDialogList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /invites/dialog/:id/accept Подтвердить приглашение в диалоги
 * @apiVersion 0.5.0
 * @apiName Accept
 * @apiGroup Invites-Dialog
 * @apiParam {String} id ID Инвайта
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 404 NOT FOUND
 *      {
 *          "errors": "Приглашение <id> не найдено"
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/dialog/:id/accept', inviteDialogAccept); // Подтвердить приглашение в диалоги

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /invites/dialog/:id/decline Не подтверждать приглашение в диалоги
 * @apiVersion 0.5.0
 * @apiName Decline
 * @apiGroup Invites-Dialog
 * @apiParam {String} id ID Инвайта
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 404 NOT FOUND
 *      {
 *          "errors": "Приглашение <id> не найдено"
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/dialog/:id/decline', inviteDialogDecline); // Не подтверждать приглашение в диалоги

export default router;