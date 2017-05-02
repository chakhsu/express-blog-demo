对应文件及文件夹的用处:

1. config: 存放数据库配置文件
1. lib: 存放函数文件
1. logs: 存放日志文件
1. models: 存放操作数据库的文件
1. public: 存放静态文件，如样式、图片等
1. routes: 存放路由文件
1. views: 存放模板文件
1. test: 存放测试文件
1. index.js: 程序主文件
1. package.json: 存储项目名、描述、作者、依赖等等信息

```md
.
├── README.md
├── config
│   └── default.js
├── index.js
├── lib
│   └── mongo.js
├── logs
│   └── success.log
├── middlewares
│   └── check.js
├── models
│   ├── comments.js
│   ├── posts.js
│   └── users.js
├── package.json
├── public
│   ├── css
│   └── img
├── routes
│   ├── index.js
│   ├── posts.js
│   ├── signin.js
│   ├── signout.js
│   └── signup.js
├── test
│   ├── avatar.jpeg
│   └── signup.js
└── views
    ├── 404.ejs
    ├── components
    ├── create.ejs
    ├── edit.ejs
    ├── error.ejs
    ├── footer.ejs
    ├── header.ejs
    ├── post.ejs
    ├── posts.ejs
    ├── signin.ejs
    └── signup.ejs
```

对应模块的用处:

* `express`: web 框架
* `express-session`: session 中间件
* `connect-mongo`: 将 session 存储于 mongodb，结合 express-session 使用
* `connect-flash`: 页面通知提示的中间件，基于 session 实现
* `ejs`: 模板
* `express-formidable`: 接收表单及文件的上传中间件
* `config-lite`: 读取配置文件
* `marked`: markdown 解析
* `moment`: 时间格式化
* `mongolass`: mongodb 驱动
* `objectid-to-timestamp`: 根据 ObjectId 生成时间戳
* `sha1`: sha1 加密，用于密码加密
* `winston`: 日志
* `express-winston`: 基于 winston 的用于 express 的日志中间件

启用 `npm start`
打开浏览器访问 http://localhost:8081/