function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
//  document.getElementById("supercontainer").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("supercontainer").style.marginLeft= "0";
}

function calendarReminder(){
// alert("buttonclicked");
    document.getElementById("show-confirmation").style.display = "block";
}
