$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            phname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            psname:{
                required:true,
                minlength:4,
                maxlength:10
            }

        }
        
    })
})