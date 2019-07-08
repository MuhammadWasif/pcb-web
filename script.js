function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab_2(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent_2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab_3(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent_3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
var img = [
  "images/girl.jpg",
  "images/ball_img.jpg"
];
var title = [
  "Pakistan Women's team captain Bismah Maroof Press Conference at National Stadium Karachi",
  "State Bank and Higher Education Commission to feature in four-day Patron's Trophy Grade-II final"
];
var desc = [
  "EVENTS: Pakistan Women's team captain Bismah Maroof Press Conference at National Stadium Karachi",
  "NEWS: Lahore, 01 May 2019: Bangladesh U16 won the first three-day match against Pakistan U16 by five wickets"
];
var n = 0;
function carousel(){
  document.querySelector(".carousel-cont .img-carousel").setAttribute("src", img[n]);
  document.querySelector(".carousel-cont h4").innerText = title[n];
  document.querySelector(".carousel-cont p").innerText = desc[n];
  if(n == 0){
    document.querySelector(".square-1").style.background = "red";
    document.querySelector(".square-2").style.background = "#efefef";
  }else{
    document.querySelector(".square-1").style.background = "#efefef";
    document.querySelector(".square-2").style.background = "red";
  }
  n = n==0?1:0;
}
setInterval(carousel, 3000);



$(function(){
  $(".menu-pcb, .menu-nca, .menu-car, .menu-profile, .menu-dom, .menu-cal").hide();
  $("#menu-pcb").hover(function() {
    $(".menu-pcb").toggle(200);
  });
  $("#menu-nca").hover(function() {
    $(".menu-nca").toggle(200);
  });
  $("#menu-car").hover(function() {
    $(".menu-car").toggle(200);
  });

});
