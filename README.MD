#### todolist（一个问题一个问题解决）

0. [参考项目](https://github.com/fxy5869571/blog-ts-koa/blob/master/src/controller/UserController.ts)
1. 安装启动koa2
2. 安装使用koa-router中间件
   * 创建router架子
   * 入口引用


#### konwledge

1. node
   
   * 回调的写法

2. koa的中间件
   
   * 必须是函数
   * 级联
   * 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。
   * koa拿取get和post请求参数：https://www.jianshu.com/p/f9d3c281f484

3. mysql数据库操作
   
   * 文档：https://www.runoob.com/nodejs/nodejs-mysql.html



#### problem

1. [如何在 Node.js 中使用 import / export 的三种方法](https://blog.csdn.net/zwkkkk1/article/details/81564971)
2. node模块引用导出（require/module.exports=...）


#### 文件结构
```shell
.

└── src     源码
    ├── config  项目配置文件
    └── controller  路由分发的控制器函数
    ├── middleware  中间件
    ├── models  数据库crud操作
    ├── mysql  mysql配置
    ├── mysqlHelper  处理数据库crud结果逻辑
    ├── router  路由
    ├── app.js  服务入口
```

