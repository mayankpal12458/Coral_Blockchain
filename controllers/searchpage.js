'use strict'

const mysql=require('mysql');



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
   
    console.log("connection done in search");

});
      return {
        setRouting: function(router){
            router.get('/search',this.searchpg);
            router.post('/search',this.searchpgpost);
            
        },

        searchpg:function(req,res){
            res.render('search');
        },
        searchpgpost:function(req,res){
            var searchbar=req.body.searchbar;
            db.query('SELECT * FROM userData WHERE emailId=?',[searchbar],function(err,result){
                if(err)
                {
                    console.log('error');
                }
                else{
               
               console.log(result); 
                res.send(result);
                
                }
            });
        }
    }
}