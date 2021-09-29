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
    function bigger(sizeImg){
        sizeImg.style.height = "300px";
        sizeImg.style.width = "300px";
      }
      function normal(sizeImg){
          sizeImg.style.height = "260px";
          sizeImg.style.width = "260px";
      }
  