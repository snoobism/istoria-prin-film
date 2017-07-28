var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var k=0;
function sel(s){
	z=s;
	window.localStorage.setItem("aia",z);
}

window.onload = function(){


	document.getElementById("strip").style.height=0.04*y0+"px";
	var b=document.getElementsByClassName("banner");
	var c=document.getElementsByClassName("txt");
	var d=document.getElementById("lista").children;
	var e=document.getElementsByClassName('txt2');
	var f=document.getElementsByClassName('hover');
	for(var i=0;i<=b.length-1;i++)
	{
		b[i].style.width=x0+"px";
		b[i].style.height=0.18*y0-5+"px";
	
	}
	
	for(var i=0;i<=c.length-1;i++)
	{
		c[i].style.marginTop=0.2*(0.25*y0-5)+"px";
		c[i].style.fontSize=0.05*y0+'px';
		c[i].id='c'+i;
		e[i].style.fontSize=0.05*y0+'px';
	}
	for(var i=0;i<=d.length-1;i++)
	{
		d[i].style.fontSize=0.05*y0+"px";
	}
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].id='f'+i;
	}
	$('#f0').hover(function(){c[0].style.fontSize=0.06*y0+'px';e[0].style.fontSize=0.06*y0+'px';},function(){c[0].style.fontSize=0.05*y0+'px';e[0].style.fontSize=0.05*y0+'px';});
	$('#f1').hover(function(){c[1].style.fontSize=0.06*y0+'px';e[1].style.fontSize=0.06*y0+'px';},function(){c[1].style.fontSize=0.05*y0+'px';e[1].style.fontSize=0.05*y0+'px';});
	$('#f2').hover(function(){c[2].style.fontSize=0.06*y0+'px';e[2].style.fontSize=0.06*y0+'px';},function(){c[2].style.fontSize=0.05*y0+'px';e[2].style.fontSize=0.05*y0+'px';});
	$('#f3').hover(function(){c[3].style.fontSize=0.06*y0+'px';e[3].style.fontSize=0.06*y0+'px';},function(){c[3].style.fontSize=0.05*y0+'px';e[3].style.fontSize=0.05*y0+'px';});

	
}

var lung=0,t,ok=0,z=0;
function clic(){
	if(ok==0&&k==0)
	{bara();
	document.getElementById("ex").src="imagini/up.png";}
	else if(ok==1&&k==0){bara2();
	document.getElementById("ex").src="imagini/down.png";
	}
}

function bara(){
	k=1;
	lung=lung+0.01*(0.02*y0)*30;
	document.getElementById("expand").style.height=lung+"px";
	cronometru();
	if(document.getElementById("expand").style.height==(0.02*y0)*30+"px")
	{
		stopbara();
		
	}
	
}
function cronometru(){
	 t=setTimeout(bara,1);
	
	
}

function stopbara(){
	 clearTimeout(t);
	 ok=1;
	 k=0;
}
function bara2()
{	k=1;
	lung=0;
	document.getElementById("expand").style.height=lung+"px";
	cronometru2();
	if(document.getElementById("expand").style.height==0+"px")
	{
		stopbara2();
		
	}
}
function cronometru2(){
	 t=setTimeout(bara2,1);
	
}
function stopbara2(){
	 clearTimeout(t);
	 ok=0;
	 k=0;

}