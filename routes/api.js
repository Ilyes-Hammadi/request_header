var express = require('express');
var router = express.Router();

// Get ip address software version and language of the connected user 
// from the http headers
var userInfos = (req) => {
  return {
    software: req.headers['user-agent'].split('(')[1].split(')')[0],
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers['accept-language'].split(',')[0]
  }
};


/* GET users listing. */
router.get('/whoami', function (req, res) {
  res.json(userInfos(req));
});

module.exports = router;
