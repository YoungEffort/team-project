/**
 * @api {get} /api/get/techstack/querylist 技术栈列表
 * @apiName TechStack
 * @apiGroup Tech
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { 
 *          "code": '200',
 *          "data":response, 
 *          "msg": '' 
 *     }
 *
 * @apiError (Error 500) 500 服务器错误.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */