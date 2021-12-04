import usersTop from "./controllers/top";
import usersGet from "./controllers/get";
import usersSearch from "./controllers/search";
import usersReg from "./controllers/reg";
import usersAuth from "./controllers/auth";

import meInfo from "./controllers/me/info";
import meUpdate from "./controllers/me/update";
import meChangemail from "./controllers/me/changemail";
import meChangepass from "./controllers/me/changepass";
import meSetAvatar from "./controllers/me/setavatar";
import meRemoveAvatar from "./controllers/me/removeavatar";
import meRemove from "./controllers/me/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/users/ Получить топ активных пользователей
 * @apiVersion 0.5.0
 * @apiName GetTop
 * @apiGroup Users
 * @apiUse UserResult
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "id": 1,
 *              "username": "testuser",
 *              "avatar": "",
 *              "name": "Тестовый пользователь",
 *              "email": "test@test.ru",
 *              "ingame": false,
 *              "ingame_info": null
 *          }
 *     ]
 */
router.get('/', usersTop);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/users/get/:username Получить пользователя по логину
 * @apiVersion 0.5.0
 * @apiName GetByUsername
 * @apiGroup Users
 * @apiUse UserResult
 * @apiParam {String} username Логин
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "username": "testuser",
 *         "avatar": "",
 *         "name": "Тестовый пользователь",
 *         "email": "test@test.ru",
 *         "ingame": false,
 *         "ingame_info": null
 *     }
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Пользователь <username> не найден"
 *      }
 */
router.get('/get/:username', usersGet); // Получить инфу о юзере

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/users/search Поиск пользователей
 * @apiVersion 0.5.0
 * @apiName Search
 * @apiGroup Users
 * @apiUse UserResult
 * @apiParam {String} search Логин
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "id": 1,
 *              "username": "testuser",
 *              "avatar": "",
 *              "name": "Тестовый пользователь",
 *              "email": "test@test.ru",
 *              "ingame": false,
 *              "ingame_info": null
 *          }
 *     ]
 */
router.get('/search', usersSearch); // Искать юзера

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/users/reg Регистрация пользователя
 * @apiVersion 0.5.0
 * @apiName Registration
 * @apiGroup Users
 * @apiParam {String}   username    Логин
 * @apiParam {String}   password     Пароль
 * @apiParam {String}   name        Имя пользователя
 * @apiParam {String}   email       E-Mail
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "username": "testuser",
 *         "avatar": "",
 *         "name": "Тестовый пользователь",
 *         "email": "test@test.ru",
 *         "ingame": false,
 *         "ingame_info": null
 *     }
 * @apiErrorExample {json} Error-Validation:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": {
 *              "name": [
 *                  "Name Имя пользователя не может быть короче 2 символов"
 *              ]
 *          }
 *      }
 * @apiErrorExample {json} Error-Registration:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Пользователь с таким логином или E-Mail уже существует"
 *      }
 */
router.post('/reg', usersReg); // Регистрация юзера

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/users/auth Авторизация пользователя
 * @apiVersion 0.5.0
 * @apiName Authentication
 * @apiGroup Users
 * @apiParam {String}   username    Логин
 * @apiParam {String}   password     Пароль
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "result": true,
 *          "data": <user>
 *     }
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Неверный логин или пароль"
 *      }
 */
router.post('/auth', usersAuth);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/users/me/info Получить информацию о текущем пользователе
 * @apiVersion 0.5.0
 * @apiName GetInfoAboutMe
 * @apiGroup Users-Me
 * @apiUse UserResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "username": "testuser",
 *         "avatar": "",
 *         "name": "Тестовый пользователь",
 *         "email": "test@test.ru",
 *         "ingame": false,
 *         "ingame_info": null
 *     }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/me/info', meInfo); // Инфа обо мне

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {put} /api/users/me/update Обновить информацию о текущем пользователе
 * @apiVersion 0.5.0
 * @apiName UpdateMyInfo
 * @apiGroup Users-Me
 * @apiParam {String}   name        Имя пользователя
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Validation:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": {
 *              "name": [
 *                  "Имя пользователя не может быть короче 2 символов"
 *              ]
 *          }
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.put('/me/update', meUpdate); // Обновить инфу обо мне

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {put} /api/users/me/changepass Изменить пароль текущего пользователя
 * @apiVersion 0.5.0
 * @apiName ChangeMyPass
 * @apiGroup Users-Me
 * @apiParam {String}   old_password        Старый пароль
 * @apiParam {String}   password        Новый пароль
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Validation:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Пароли не совпадают"
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.put('/me/changepass', meChangepass); // Установить пароль

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {put} /api/users/me/changemail Изменить email текущего пользователя
 * @apiVersion 0.5.0
 * @apiName ChangeMyEmail
 * @apiGroup Users-Me
 * @apiParam {String}   password     Пароль для подтверждения
 * @apiParam {String}   email        E-Mail
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Validation:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Неверный формат E-Mail"
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.put('/me/changemail', meChangemail); // Установить мейл

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {put} /api/users/me/setavatar Изменить аватар текущего пользователя
 * @apiVersion 0.5.0
 * @apiName SetMyAvatar
 * @apiGroup Users-Me
 * @apiParam {String}   avatar        Аватар (base64)
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Validation:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Не удалось сохранить изображение"
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.put('/me/setavatar', meSetAvatar); // Установить аватар

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/users/me/removeavatar Удалить аватар текущего пользователя
 * @apiVersion 0.5.0
 * @apiName RemoveMyAvatar
 * @apiGroup Users-Me
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "username": "testuser",
 *         "avatar": "",
 *         "name": "Тестовый пользователь",
 *         "email": "test@test.ru",
 *         "ingame": false,
 *         "ingame_info": null
 *     }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/me/removeavatar', meRemoveAvatar); // Удалить аватар

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/users/me/remove Удалить текущего пользователя
 * @apiVersion 0.5.0
 * @apiName RemoveMe
 * @apiGroup Users-Me
 * @apiParam {String}   password        Пароль для подтверждения
 * @apiHeader {String} Authorization Bearer токен.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "result":true
 *     }
 * @apiErrorExample {json} Error-Validation:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "errors": "Неверный пароль"
 *      }
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/me/remove', meRemove); // Удалить аккаунт

export default router;