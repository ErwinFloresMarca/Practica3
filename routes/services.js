var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //console.log(req);
  var host = req.headers.host;
  var baseUrl = "no se encontro baseUrl" ;
  var originalUrl = req.originalUrl ;
  var httpVersion = req.httpVersion;
  var _startTime = req._startTime;
  res.status(200).json({
      "host":host,
      "baseUrl":baseUrl,
      "originalUrl":originalUrl,
      "httpVersion":httpVersion,
      "_startTime":_startTime

    });
    return;

});

module.exports = router;
