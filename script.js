AOS.init();
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsiv";
  } else {
    x.className = "topnav";
  }
}
