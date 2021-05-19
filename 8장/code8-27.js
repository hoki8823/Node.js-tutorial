
var fs = require("fs");
var path = require("path");
var express = require("express");
var multipart = require("connect-multiparty");

var app = express();

app.use(multipart({ uploadDir: __dirname + '/multipart'}));
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,"html","HTMLPage.html"));
});
app.post('/',(req,res) => {
    console.log(req.body);
    console.log('------------');
    console.log(req.files);
    res.redirect('/');
});

app.listen(52273,() => {
    console.log("running...");
});