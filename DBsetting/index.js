// index.js

var express = require('express');
var mongoose = require('mongoose');
var app = express();

// DB setting
mongoose.set('useNewUrlParser', true);    
mongoose.set('useFindAndModify', false);  
mongoose.set('useCreateIndex', true);     
mongoose.set('useUnifiedTopology', true); 
mongoose.connect(process.env.MONGO_DB); 
var db = mongoose.connection; 
//4
db.once('open', function(){
  console.log('DB connected');
});
//5
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

// Port setting
app.listen(52273, function(){
  console.log('runn..');
});