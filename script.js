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
  var pictures= new Array();
  function preload(){
    for(i=0;i<preload.arguments.length;i++){
      pictures[i] = new Image();
          pictures[i].src = preload.arguments[i];
    }
  
  }
  preload("pictures/ACDRC_Logo.jpg","pictures/annie-spratt-1YnBzhJISg4-unsplash.jpg", "pictures/farming.jpg");