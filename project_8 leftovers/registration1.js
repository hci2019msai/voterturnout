function toggletest () {
  var x = document.getElementById("main_container");
    var y = document.getElementById("container1B");
    var z = document.getElementById("container1C");
 if (x.style.display === "none") {
   x.style.display = "grid";
}

else {
   x.style.display = "none";
     y.style.display ="grid";
 }
}

function activate1C () {
    var oneCx = document.getElementById("main_container");
    var oneCy = document.getElementById("container1B");
    var oneCz = document.getElementById("container1C");
if (oneCy.style.display === "none") {
    oneCy.style.display = "grid"}
else {
    oneCx.style.display = "none";
    oneCy.style.display = "none";
    oneCz.style.display = "grid";
}
}


function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}














