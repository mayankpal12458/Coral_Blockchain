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
   
    console.log("connection done in delete");

});
      return {
        setRouting: function(router){
            router.get('/delete',this.deletepg);
            router.post('/delete',this.deletepgpost);
            
        },

        deletepg:function(req,res){
            res.render('delete');
        },
        deletepgpost:function(req,res){
            var searchbar1=req.body.searchbar1;
            db.query('DELETE FROM userData WHERE emailId=?',[searchbar1],function(err,result){
                if(err)
                {
                    console.log('error');
                }
                else{
                    console.log(result);
                    
                   if(result.affectedRows==0)
                   {
                       res.send("No such User Exists");
                   }
                   else{
                       res.send("Deletion Successfull!!!!!");
                   }
                }
            });
        }
    }
}