module.exports = {
  port: 3000,
  session: {
    secret: 'blog-demo',
    key: 'blog-demo',
    maxAge: 259200000
  },
  mongodb: 'mongodb://localhost:27017/blogdemo'
}
