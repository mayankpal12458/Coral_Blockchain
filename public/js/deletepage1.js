$(document).ready(function(){

   
    $('#btndel').on('click',function(e){
        e.preventDefault();

        $('#result1').text(' ');
       
       var searchbar1=$('#searchbar1').val();
       
       $.ajax({
        url:'/delete',
        type:'POST',
        data:{
            searchbar1:searchbar1,
            
        },
        success: function(data) {

        

            $('#result1').append(data);
            
        }
    });
    });
});
