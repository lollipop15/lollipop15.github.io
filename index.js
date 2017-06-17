var express = require('express');
var http = require('http');
var path = require('path');
var errorhandler = require('errorhandler');
var bodyParser = require('body-parser');


var app = express();
var news = [];
var title = [];
var posts = [];
app.set('port', 3000);
app.use(errorhandler());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static);
//app.use(express.static('static'));

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port '+ app.get('port'));
});

app.get('/news', function (req, res) {
    res.send(posts);
    news = [];
    posts = [];
})

app.post('/news', function (req, res) {
    news.push(req.body.text1);
    news.push(req.body.news);
    posts.push(news);
    res.redirect('/');
})
// app.use(function(req,res,next){
//     if(req.url == '/'){
//         res.end("Hello");
//     }
//     else {
//         next();
//     }
// });




