import LanguageList from "./controllers/list";
import LanguageCreate from "./controllers/create";
import LanguageUpdate from "./controllers/update";
import LanguageRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/languages/list/ Список языков
 * @apiVersion 1.0.0
 * @apiName GetLanguageList
 * @apiGroup Languages
 * @apiUse LanguageResult
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', LanguageList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/languages/create/ Создать язык
 * @apiVersion 1.0.0
 * @apiName CreateLanguage
 * @apiGroup Languages
 * @apiUse LanguageResult
 * @apiParam {String} name
 * @apiParam {String} icon
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', LanguageCreate); // Создать язык

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/languages/update/:id Изменить язык
 * @apiVersion 1.0.0
 * @apiName UpdateLanguage
 * @apiGroup Languages
 * @apiUse LanguageResult
 * @apiParam {Number} id Идентификатор языка
 * @apiParam {String} name
 * @apiParam {String} icon
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', LanguageUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/languages/delete/:id Удалить язык
 * @apiVersion 1.0.0
 * @apiName DeleteLanguage
 * @apiGroup Languages
 * @apiUse LanguageResult
 * @apiParam {Number} id Идентификатор языка
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', LanguageRemove);

export default router;