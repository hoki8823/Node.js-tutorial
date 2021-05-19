var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
    secret: 'secret key', resave: false,
    saveUninitialized: true
}));
app.get('/logout',(req,res) => {
    console.log('********logout**********');
    console.log(req.session);
    if(req.session.user) {
        req.session.destroy((err) => {
            if(err) {throw err;}
            res.send('<h1>로그아웃 성공</h1>');
        });
    }else {
        res.send('<h1>아직 로그인되어 있지 않습니다.</h1>');
    }
});
app.get('/login',(req,res) => {
    req.session.user = {
        id:'rint',
        name:'text계정',
        connectTime:(new Date()).toUTCString()
    };
    console.log('******login*********');
    console.log(req.session);
    res.send('<h1>로그인 성공</h1>');
});

app.listen(52273,() => {
    console.log('server on...');
});
