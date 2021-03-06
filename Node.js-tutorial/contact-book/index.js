// index.js

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// DB setting
mongoose.set('useNewUrlParser', true);    
mongoose.set('useFindAndModify', false);  
mongoose.set('useCreateIndex', true);     
mongoose.set('useUnifiedTopology', true); 
mongoose.connect(process.env.MONGO_DB); 
var db = mongoose.connection; 


db.once('open', function(){
  console.log('DB connected');
});


db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// Other settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// var contactSchema = mongoose.Schema({
//   name:{type:String, required:true, unique:true},
//   email:{type:String},
//   phone:{type:String}
// });

// var Contact = mongoose.model('contact',contactSchema);

// app.get('/',(req,res)=>{
//   res.redirect('/contacts');
// });

// app.get('/contacts',(req,res)=>{
//   Contact.find({},(err,contacts)=>{
//     if(err) return res.json(err);
//     res.render('contacts/index',{contacts:contacts});
//   });
// });

// app.get('/contacts/new',(req,res)=>{
//   res.render('contacts/new');
// });

// app.post('/contacts', function(req, res){
//   Contact.create(req.body, function(err, contact){
//     if(err) return res.json(err);
//     res.redirect('/contacts');
//   });
// });

// app.get('/contacts/:id',(req,res)=>{
//   Contact.findOne({_id:req.params.id},(err,contact)=>{
//     if(err) return res.json(err);
//     res.render('contacts/show',{contact:contact});
//   });
// });

// app.get('/contacts/:id/edit',(req,res)=>{
//   Contact.findOne({_id:req.params.id},(err,contact)=>{
//     if(err) return res.json(err);
//     res.render('contacts/edit',{contact:contact});
//   });
// });

// app.put('/contacts/:id',(req,res)=>{
//   Contact.findOneAndUpdate({_id:req.params.id}, req.body, (err,contact)=>{
//     if(err) return res.json(err);
//     res.redirect('/contacts/'+req.params.id);
//   });
// });

// app.delete('/contacts/:id',(req,res)=>{
//   Contact.deleteOne({_id:req.params.id},(err)=>{
//     if(err) return res.json(err);
//     res.redirect('/contacts');
//   });
// });

app.use('/',require('./routes/home'));
app.use('/contacts',require('./routes/contacts'));

// Port setting
app.listen(52273, function(){
  console.log('runn..');
});