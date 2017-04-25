module.exports = {
  port: 8081,
  session: {
    key: 'blogdemo',
    secret: 'blogdemo',
    maxAge: 259200000
  },
  mongodb: 'mongodb://localhost:27017/blogdemo'
};
