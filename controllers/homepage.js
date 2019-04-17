'use strict'
const fs=require('fs');
const mysql=require('mysql');
const bcrypt=require('bcrypt');



module.exports=function(){

  const db = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : 'mayankpal@19',
          database : 'db_intern',
          port:3306
  });
  db.connect(function(err){
      if(err)
      {
          throw err;
      }
      var sql = "CREATE TABLE IF NOT EXISTS userData (userName VARCHAR(25), emailId VARCHAR(50) PRIMARY KEY,phoneNo VARCHAR(10) not null,password VARCHAR(100) not null,dateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP)";
      db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
      });
      console.log("connection dones");
  
  });
    return {
        setRouting: function(router){
            router.get('/',this.homepage);
            router.post('/',this.homepost);
        },

        homepage:function(req,res){
            res.render('home');
        },
        homepost:function(req,res){
            var username=req.body.username;
            var password=req.body.password;
            var emailid=req.body.emailid;
            var phoneno=req.body.phoneno;

            var hash = bcrypt.hashSync(password, 10);
            console.log(hash);
            
            //var sql = "INSERT INTO userData SET ? VALUES ('username','emailid','phoneno','password')"
            var user={userName:username,emailId:emailid,phoneNo:phoneno,password:hash};
          db.query('INSERT INTO userData SET ?',user, function (err, result) {
            if (err)
            {
              db.query('UPDATE userData SET ? WHERE emailId = ?', [{userName:username,phoneNo:phoneno,password:hash}, emailid],function(err,res){
                if(err){
                  console.log('error in update');
                }
                console.log('updated');
              });
            };
            console.log(result);
            console.log("Table inserted");
          });
        }
    }
}