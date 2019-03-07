function toggletest () {
  var x = document.getElementById("main_container");
    var y = document.getElementById("container1B");
 if (x.style.display === "none") {
   x.style.display = "grid";
}
    
else {
   x.style.display = "none";
     y.style.display ="grid";
 }
}