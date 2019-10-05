var myVar;

function myFunction1() {
  myVar = setTimeout(showPage, 300);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "260px";
  document.getElementById("main").style.marginLeft = "260px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function show(id)
{
	var show = document.getElementById(id);
	var x1 = document.getElementById("ANScript1");
	var x2 = document.getElementById("ANScript2");
	var x3 = document.getElementById("ANScript3");
	var x4 = document.getElementById("ANScript4");
	var x5 = document.getElementById("ANScript5");
	
	x1.style.display = "none";
	x2.style.display = "none";
	x3.style.display = "none";
	x4.style.display = "none";
	x5.style.display = "none";
	if (show.style.display === "none") {
    show.style.display = "block";	
	} 
}

document.oncontextmenu = new Function("return false;");