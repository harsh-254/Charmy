window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header-container").style.backgroundColor = "#fff";

    $(".head-nav-a").css("color", "#000000");
    $(".nav-img-logo").css("border","10px solid white");

    
  } else {  
    // transparent background
    document.getElementById("header-container").style.backgroundColor = "transparent";
    document.getElementById("head-nav-img").style.backgroundColor = "#fff";
    
    $(".nav-img-logo").css("border","20px solid white");
    // font Color
    $(".head-nav-a").css("color", "#fff");
    document.getElementById("head-nav-img").style.width = "16 0px";

  }
}
// hover effect method
function textColor(x) {
  if (document.documentElement.scrollTop > 50) {
    x.style.color = "red";
    x.style.borderBottom = "2px solid red";
  }
  else {  
    x.style.color = "white";
    x.style.borderBottom = "2px solid #fff";
  }
}
function textCol(x){
  if (document.documentElement.scrollTop > 50) {
    x.style.color = "black";
    x.style.borderBottom = "none";
  }
  else{
    x.style.color = "white";
    x.style.borderBottom = "none";
  }
}
