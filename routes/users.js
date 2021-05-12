
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

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
      
  });


router.get('/', (req,res)=>{

let sql = 'select * from Login';
db.query(sql, (err,result)=>{
if(err) throw err;
console.log(result);
res.send(result);
});

});

router.post('/', (req,res)=>{
    
   console.log(req.body.user);
    let sql = "insert  into Login set ?";
    const users=req.body;
    
    db.query(sql,[users], (err,result)=>{
    if(err) {
        console.log(err);
        console.log("wee, server didn't die")
        res.send(err);
    } else
     {
        console.log(result);
    }
    
    
});

    });







    router.patch('/update/', (req,res)=>{
        res.send('que');
        });
        

module.exports= router;