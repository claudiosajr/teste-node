var express = require('express')
var app = express();

app.set('view engine','ejs');

app.get('/produtos',function(req,res){
    res.render("produtos/lista");
});

app.listen(process.env.PORT || 5000, function(){
    console.log("servidor rodando");
});