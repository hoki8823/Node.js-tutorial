var express = require('express');
var app = express();

app.set('view engine','ejs'); //ejs를 사용하기 위해 express의 view engine에 ejs를 set하는 코드
app.use(express.static(__dirname + '/public'));

app.get('/hello',(req,res)=>{ //query를 통해서 이름을 받는 코드
    res.render('hello',{name:req.query.nameQuery}); 
});

app.get('/hello/:nameParam',(req,res)=>{ //route parameter를 통해 이름을 받는 코드
    res.render('hello',{name:req.params.nameParam});
});

app.listen(52273,()=>{
    console.log('run...');
});