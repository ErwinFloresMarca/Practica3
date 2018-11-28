var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  //console.log(req)
  //return;
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
});


router.get('/respB', function(req, res) {
  var respuesta = "originalUrl devuleve la url original de la solicitud original ,este nos permite reescribir req.url libremente ";
  res.status(200).json({
    "respuesta1b":respuesta
  });
});

router.post('/interes',function(req,res,next) {
      var montoinicial=req.body.montoinicial;
      var Ianual=req.body.Ianual;
      if(montoinicial==0 || Ianual==0 || montoinicial==undefined || Ianual== undefined){
        res.status(400).json({msm: "error en las variables"});
      }
      var a =parseFloat(montoinicial);
      var b=parseFloat(Ianual);
      var montofinal=0;
      montofinal=((b/100)*a)+(a);
      var anual=0;
      anual=(b*100);
      var mensual=anual/12;
      var semanal=anual/52;
      var diario=anual/365;
      res.status(400).json({
        "montofinal":montofinal,
        "monto anual":Ianual,
        "monto mensual":mensual,
        "monto semanal":semanal,
        "monto diario":diario
      });
  });
//respondan los siguientes incisos

module.exports = router;
