$(document).ready(function(){

       var passregex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
       var emailregex='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
       var phregex="\+?\d[\d -]{8,12}\d";

   
    $('#btnsbmt').on('click',function(e){
        e.preventDefault();
       
       var username=$('#username').val();
       var password=$('#password').val();
       var emailid=$('#emailid').val();
       var phoneno=$('#phoneno').val();
    

       if (username.length < 3) {
        $('#username').after('<span class="error">This field is required</span>');
        return false;
      }

      if (password.length < 8) {
        $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        return false;
      }

      if (emailid.length < 1) {
        $('#emailid').after('<span class="error">This field is required</span>');
        return false;
      } else {
        var regEx = /^(([^<>()[\]{}'^?\\.,!|//#%*-+=&;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        var validEmail = regEx.test(emailid);
        if (!validEmail) {
          $('#emailid').after('<span class="error">Enter a valid email</span>');
          return false;
        }
      }

      if (phoneno.length < 1) {
        $('#phoneno').after('<span class="error">This field is required</span>');
        return false;
      } else {
        var regEx = /^(0|[+91]{3})?[7-9][0-9]{9}$/ ;
        var validphone = regEx.test(phoneno);
        if (!validphone) {
          $('#phoneno').after('<span class="error">Enter a valid phoneno</span>');
          return false;
        }
      }

      $(".error").remove();
      $('#username').val(' ');
      $('#password').val(' ');
      $('#emailid').val(' ');
      $('#phoneno').val(' ');
     


       $.ajax({
        url:'/',
        type:'POST',
        data:{
            username:username,
            password:password,
            emailid:emailid,
            phoneno:phoneno
        },
        success: function(data) {
           
           
        }
    });
    });

 

   
  
});
