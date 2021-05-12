


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
//import routes
const getQuestions = require('./routes/get');
const getUsers = require('./routes/users');
const postData = require('./routes/post');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
// js part of the site 
app.use('/users', getUsers);
app.use('/post', postData);
app.use('/get', getQuestions);
// front end part of the site/html
app.get('/test', function(req, res) {
res.sendFile(path.join(__dirname, '/dktest1.html'));});

app.get('/doclogin', function(req, res) {
res.sendFile(path.join(__dirname, '/Doctor_login.html'));});

app.get('/docinfo', function(req, res) {
res.sendFile(path.join(__dirname, '/Doctor_info_page.html'));});

app.get('/questionaire', function(req, res) {
  res.sendFile(path.join(__dirname, '/questionaire.html'));});

  app.get('/Questionaire.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/Questionaire.js'));});

//resources such as pictures
app.get('/flagDK.jpg', function(req, res) {
res.sendFile(path.join(__dirname, '/flagDK.jpg'));});
app.get('/baggrund.jpg', function(req, res) {
res.sendFile(path.join(__dirname, '/baggrund.jpg'));});
    





//create connection
const db =mysql.createConnection({
    host: "34.105.255.191",
    user: "root",
    password: "DJWD_Z8?2cPm_hx",
    database : 'hospitalmanagement'
  });
  //connect
  db.connect((err)=> {
      if(err){
          throw err;
      }
      console.log('mysql connected');
  });






//insert to example
app.get('/insertanswer', (req,res) =>
{
let sql = "insert  into `Answers`(id, questionNumber, `answer`, `comment` ) values (1, 6, 'yes', 'comment')";
db.query(sql, (err,result)=>{
if(err) throw err;
console.log(result);
res.send(result);
var resultArray = JSON.parse(JSON.stringify(result));
console.log(resultArray[1]);
});
});

//update  to example
app.get('/updateanswer', (req,res) =>
{
let sql = "update  Answers set answer ='yes' where questionNumber =6 and id=1";
db.query(sql, (err,result)=>{
if(err) throw err;
console.log(result);
res.send(result);
var resultArray = JSON.parse(JSON.stringify(result));
console.log(resultArray[1]);
});
});


app.listen('3000',()=>{
    console.log("server started on port 3000");
});



/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DJWD_Z8?2cPm_hx"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
}); */