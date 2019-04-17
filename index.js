const express=require('express');
const http=require('http');
const https=require('https');
var cors = require('cors');
const bodyparser=require('body-parser');
const ejs=require('ejs');
const container=require('./container');
const fs=require('fs');



const expressvalidator=require('express-validator');
container.resolve(function(homepage,searchpage,deletepage){

    
    const app=setupexpress();

    function setupexpress()
    {
        const app=express();
        const server=http.createServer(app);

        
        server.listen(process.env.PORT || 5000,function(){
            console.log('Listening on port 5000');
        });
       
        configureexpress(app);
        const router=require('express-promise-router')();
        homepage.setRouting(router);
        searchpage.setRouting(router);
        deletepage.setRouting(router);
        app.use(router);

        function configureexpress(app)
        {
            app.use(express.static('public'));
            
            app.set('view engine','ejs');
           
            app.use(bodyparser.urlencoded({extended:true}));

            app.use(expressvalidator());
           
        }
    }
})