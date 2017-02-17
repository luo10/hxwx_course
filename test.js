/**
 * Created by luojia on 2017/2/16.
 */
var express = require('express');
var app = express();
var router = express.Router();
router.get('/', function (req, res, next) {
  req.url='/index.html';
  next();
})
app.use(router);
app.use(express.static('./dist'));

app.listen(9000);

