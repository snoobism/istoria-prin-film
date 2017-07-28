var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
window.onload = function(){
	
	var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName("textc");
	document.getElementById("strip").style.height=0.04*y0+"px";
	for(var i=0;i<=e.length-1;i++)
	{	
		e[i].innerHTML=tex[i][x];
	}
	
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
	}
	document.getElementById("imagini").style.height=0.45*y0+"px";
	document.getElementById("imagini").style.marginTop=0.025*y0+'px';
	document.getElementById("standard").style.height=0.45*y0+"px";
}