window.onload=function()  //executes when the page finishes loading
{
	setTimeout(func1, 2000);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
	
};
function func1()
{
	document.getElementById("hello").style.display="block";
    document.getElementById("loader").style.display="none";
}