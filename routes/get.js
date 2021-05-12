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



//get from example
router.get('/', (req,res) =>
{

    let sql = 'select * from Login';
    db.query(sql, (err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result);
    });
    
    });

    router.get('/firstQuestion', (req,res) =>
    {
    
        let sql = 'select * from Questions where questionNumber=1';
        db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
        });
        console.log("worked");
        });


        router.get('/questions', (req,res) =>
        {
        
            let sql = 'select * from Questions ';
            db.query(sql, (err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send(result);
            });
            console.log("worked");
            });

module.exports= router;