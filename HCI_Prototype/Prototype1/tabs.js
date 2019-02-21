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

function openSubSection(evt, sectionName) {
  var i, tabSubcontent, tabSublinks;
  tabSubcontent = document.getElementsByClassName("tabSubcontent");
  for (i = 0; i < tabSubcontent.length; i++) {
    tabSubcontent[i].style.display = "none";
  }
  tabSublinks = document.getElementsByClassName("tabSublinks");
  for (i = 0; i < tabSublinks.length; i++) {
    tabSublinks[i].className = tabSublinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";
}
