$(document).ready(function(){

   
    $('#btnsrch').on('click',function(e){
        e.preventDefault();

        $('#result').text(' ');
       
       var searchbar=$('#searchbar').val();
       
       $.ajax({
        url:'/search',
        type:'POST',
        data:{
            searchbar:searchbar,
            
        },
        success: function(data) {

            var count = Object.keys(data).length;
            if(count==0)
            {
                $('#result').append("No such user exists");
            }
            else{
            $('#result').append("username : " +data[0].userName);
            $('#result').append("\n");
            $('#result').append("emailid : " +data[0].emailId);
            $('#result').append("\n"); 
            $('#result').append("phoneNo : " +data[0].phoneNo);
            $('#result').append("\n"); 
            $('#result').append("Date And Time : " +data[0].dateTime);
            $('#result').append("\n");
            }
        }
    });
    });
});
