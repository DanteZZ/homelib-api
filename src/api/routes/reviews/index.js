import ReviewList from "./controllers/list";
import ReviewCreate from "./controllers/create";
import ReviewUpdate from "./controllers/update";
import ReviewRemove from "./controllers/remove";

import express from 'express';
var router = express.Router();

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {get} /api/reviews/list/ Список заметок
 * @apiVersion 1.0.0
 * @apiName GetReviewList
 * @apiGroup Reviews
 * @apiUse ReviewResult
 * @apiParam {Number} book
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.get('/list', ReviewList);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/reviews/create/ Создать заметку
 * @apiVersion 1.0.0
 * @apiName CreateReview
 * @apiGroup Reviews
 * @apiUse ReviewResult
 * @apiParam {Number} book
 * @apiParam {Number} page
 * @apiParam {String} text
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/create', ReviewCreate); // Создать заметку

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {post} /api/reviews/update/:id Изменить заметку
 * @apiVersion 1.0.0
 * @apiName UpdateReview
 * @apiGroup Reviews
 * @apiUse ReviewResult
 * @apiParam {Number} id Идентификатор заметки
 * @apiParam {Number} book
 * @apiParam {Number} page
 * @apiParam {String} text
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.post('/update/:id', ReviewUpdate);

/**
 * /---------------------------------------------------------------------------------------------------------------------/
 * @api {delete} /api/reviews/delete/:id Удалить заметку
 * @apiVersion 1.0.0
 * @apiName DeleteReview
 * @apiGroup Reviews
 * @apiUse ReviewResult
 * @apiParam {Number} id Идентификатор заметки
 * @apiHeader {String} Authorization Bearer токен.
 * @apiErrorExample {json} Error-Auth:
 *      HTTP/1.1 403 AuthenticationFailed
 *      {
 *          "errors": "Ошибка авторизации"
 *      }
 */
router.delete('/delete/:id', ReviewRemove);

export default router;