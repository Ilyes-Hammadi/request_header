var express = require('express');
var router = express.Router();


var userInfos = (req) => {
  return {
    software: req.headers['user-agent'].split('(')[1].split(')')[0],
    ipaddress: req.connection.remoteAddress,
    language: req.headers['accept-language'].split(',')[0]
  }
};


/* GET users listing. */
router.get('/', function (req, res) {
  res.json(userInfos(req));
});

module.exports = router;
