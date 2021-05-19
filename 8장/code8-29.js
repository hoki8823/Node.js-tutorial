
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
    var comment = req.body.comment;
    var imgFile = req.files.image;
    if(imgFile && imgFile.size > 0) {
        var name = imgFile.name;
        var path = imgFile.path;
        var type = imgFile.type;
        if(type.indexOf('image') != -1) {
            var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
            console.log(outputPath);
            fs.rename(path,outputPath,(err) => {
                res.redirect('/');
            });
        }else { 
            fs.unlink(path,(err) => {
                res.sendStatus(400);
            });
        }
    }else {
        res.sendStatus(404);
    }
});

app.listen(52273,() => {
    console.log("running...");
});