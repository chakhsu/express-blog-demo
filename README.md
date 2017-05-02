对应文件及文件夹的用处:

1. models: 存放操作数据库的文件
2. public: 存放静态文件，如样式、图片等
3. routes: 存放路由文件
4. views: 存放模板文件
5. index.js: 程序主文件
6. package.json: 存储项目名、描述、作者、依赖等等信息

```
npm i config-lite connect-flash connect-mongo ejs express express-formidable express-session marked moment mongolass objectid-to-timestamp sha1 winston express-winston --save
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