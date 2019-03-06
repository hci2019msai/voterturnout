
function dropdown_change()
{
  var el = document.getElementById("state_dropdown");
  state = el.options[el.selectedIndex].value;
  if (state === "AZ")
  {
    document.getElementById("loc_button").innerHTML = '<a class="btn btn-full" href="arizona_info.html">Submit</a>';
  }
  else if (state === "IL")
  {
    document.getElementById("loc_button").innerHTML = '<a class="btn btn-full" href="illinois_info.html">Submit</a>';
  }
  else if (state === "PA")
  {
    document.getElementById("loc_button").innerHTML = '<a class="btn btn-full" href="penn_info.html">Submit</a>';
  }
}
