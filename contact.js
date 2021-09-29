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
  function Validate(){
    var name=document.getElementById("fname");
    var surname=document.getElementById("Sname");
    var infor=document.getElementById("messgae");
    if(name.value.trim()==""|| surname.value.trim()==""||infor.value.trim()==""){
      alert("no blank fields allowed");
      return false;
    }
    else{
      return true;
    }
}

var pictures= new Array();

function preload(){
  for(i=0;i<preload.arguments.length;i++){
    pictures[i] = new Image();
        pictures[i].src = preload.arguments[i];
  }

}
preload("pictures/ACDRC_Logo.jpg", "pictures/contact-icons.jpg", "pictures/Picture1.jpg");
