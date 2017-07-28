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
	document.getElementById("imagini").style.height=1*y0+"px";
	document.getElementById("standard").style.height=1*y0+"px";
}
function schimba1(){
	document.getElementById("dictionar").style.opacity=0;
	setTimeout(function()
		{
		document.getElementById("dictionar").style.display="none";
		document.getElementById("dictionaristoric").style.display='block';
		}
		,1100);
	setTimeout(function(){
		document.getElementById("dictionaristoric").style.opacity=1;
	},1300);
}
function schimba2(){
	document.getElementById("stiati").style.opacity=0;
	setTimeout(function()
		{
		document.getElementById("stiati").style.display="none";
		document.getElementById("stiatica").style.display='block';
		}
		,1100);
	setTimeout(function(){
		document.getElementById("stiatica").style.opacity=1;
	},1300);
}