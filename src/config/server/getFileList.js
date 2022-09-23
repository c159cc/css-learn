
let readFiles = require('./readFile');

var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

app.get('/api/routes', function (req, res, next) {
  console.log("readFle2 服务器收到请求")
  res.json(readFiles());
});

app.listen(999, function () {
  console.log('CORS-enabled web server listening on port 999');
});