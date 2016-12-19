var express = require('express')
var http = require('http');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("produtos/lista");
});

app.get('/produtos',function(req,res){
    res.render("produtos/lista");
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});