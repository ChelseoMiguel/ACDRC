$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.read-more').click(function(){
        $('.span-read-more').toggleClass("active");
        $(this).text(function(i, text){
            return text === "read more" ? "view less" : "read more";
        });
        
    });
})
function subscription(){
    var emailInfo =document.getElementById("email");
    if(emailInfo.value.trim() == "")
    {
        alert("please enter a valid email address");
        
    }
    else{
    alert("Thank you for joining our newsletter");
    }
  }