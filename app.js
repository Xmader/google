var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var request = require('request');
var fs = require('fs');

var KEY = 'AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY';
var CX = '010939073182372963055:k8pff1pzvy8';
var REQ_URL = 'https://www.googleapis.com/customsearch/v1element?' +
                'key=' + KEY +
                '&cx=' + CX +
                '&num=10' + 
                '&hl=zh_CN' + 
                '&prettyPrint=false' +
                '&q=';

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.static(__dirname + '/public/'));

app.get('/search', function(req, res, next) {
  var url;
  if (req.query.q) {
    url = REQ_URL + req.query.q;
    if (req.query.start) url = url + '&start=' + req.query.start;
    
    request(url, function (err, response, body) {
      if (!err && response.statusCode == 200) {
        res.render('search', JSON.parse(body));
      } else {
        res.sendfile(__dirname + '/public/index.html');
      }
    });
    /*
    var body = fs.readFileSync('./test.json');
    res.render('search', JSON.parse(body));
    */
  } else {
    res.sendfile(__dirname + '/public/index.html');
  }
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(80);
