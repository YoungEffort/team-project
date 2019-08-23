/**
 * @api {post} /api/user/login 登录
 * @apiName UserLogin
 * @apiGroup User
 *
 * @apiParam {String} loginName 用户名.
 * @apiParam {String} password 密码.
 *
 * @apiSuccess {String} code code码.
 * @apiSuccess {String} token token.
 * @apiSuccess {String} msg  信息.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { 
 *          "code": '200',
 *          "data":token, 
 *          "msg": '登录成功' 
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

/**
 * @api {post} /api/user/register 注册
 * @apiName UserRegister
 * @apiGroup User
 *
 * @apiParam {String} loginName 用户名.
 * @apiParam {String} password 密码.
 *
 * @apiSuccess {String} code code码.
 * @apiSuccess {null} null  null.
 * @apiSuccess {String} msg  信息.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     { 
 *          "code": '200',
 *          "data":null, 
 *          "msg": '注册成功' 
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
