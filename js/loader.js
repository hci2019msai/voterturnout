window.onload=function()  //executes when the page finishes loading
{
	setTimeout(func1, 5000);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
	
};
function func1()
{
    document.getElementById("loader").style.display="none";
    document.getElementById("bodyContainer").style.display="none"; document.getElementById("body2Container").style.display="block";
}