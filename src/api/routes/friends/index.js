import FriendList from "./controllers/list";
import FriendCreate from "./controllers/create";
import FriendUpdate from "./controllers/update";
import FriendRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/friends/list/ Список друзей
 * @apiVersion 1.0.0
 * @apiName GetFriendList
 * @apiGroup Friends
 * @apiUse FriendResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', FriendList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/friends/create/ Создать друга
 * @apiVersion 1.0.0
 * @apiName CreateFriend
 * @apiGroup Friends
 * @apiUse FriendResult
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', FriendCreate); // Создать друга

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/friends/update/:id Изменить друга
 * @apiVersion 1.0.0
 * @apiName UpdateFriend
 * @apiGroup Friends
 * @apiUse FriendResult
 * @apiParam {Number} id Идентификатор друга
 * @apiParam {String} name
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', FriendUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/friends/delete/:id Удалить друга
 * @apiVersion 1.0.0
 * @apiName DeleteFriend
 * @apiGroup Friends
 * @apiUse FriendResult
 * @apiParam {Number} id Идентификатор друга
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', FriendRemove);

export default router;