var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var card=[],grid;
var musicbg = new Audio('audio/musicgrid.mp3');
var flip = new Audio('audio/flip.mp3');
var corect = new Audio('audio/corect.mp3');
var win = new Audio('audio/win.mp3');
window.onload = function(){
	musicbg.play();
	musicbg.volume=0.5;
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
	
	document.getElementById('contjoc').style.marginTop=0.03*y0+"px";
	document.getElementById("contjoc").style.width=0.9*x0+"px";
	document.getElementById("contjoc").style.height=0.7*y0+"px";
	

	document.getElementById("meniu").style.marginLeft=0.01*0.9*x0+'px';
	document.getElementById("meniu").style.marginBottom=0.015*0.9*x0+'px';
	document.getElementById("meniu").style.width=0.3*0.9*x0+"px";
	
	
	document.getElementById("joc").style.marginRight=0.015*0.9*x0+'px';
	document.getElementById("joc").style.marginBottom=0.015*0.9*x0+'px';
	document.getElementById("joc").style.width=0.65*0.9*x0+'px';
	document.getElementById("joc").style.height=0.9*0.7*y0+'px';
	sel(0);
}
var nrcard=[17,31,59]
var widthcard=[0.1*0.6*x0,0.075*0.6*x0,0.05*0.6*x0]
var heightcard=[0.27*0.6*y0,0.175*0.6*y0,0.11*0.7*y0]
var marginleftcard=[0.07*0.6*y0,0.032*0.6*x0,0.02*0.6*x0]
var margintopcard=[0.025*0.6*x0,0.05*0.6*y0,0.055*0.6*y0]
var imaginigrid=['imaginigrid/ceausescu.jpg','imaginigrid/cuza.jpg','imaginigrid/david.jpg','imaginigrid/decebal.jpg','imaginigrid/ecaterina.jpg','imaginigrid/ivanist1.jpg','imaginigrid/elizabeta.jpg','imaginigrid/hitler.jpg','imaginigrid/lawrence.jpg','imaginigrid/laden.jpg','imaginigrid/lenin.jpg','imaginigrid/lincoln.jpg','imaginigrid/mihai.jpg','imaginigrid/mirceaist3.jpg','imaginigrid/napoleonist2.jpg','imaginigrid/patrieist4.jpg','imaginigrid/pattonist1.jpg','imaginigrid/putin.jpg','imaginigrid/redsist3.jpg','imaginigrid/roosevelt.jpg','imaginigrid/samurai.jpg','imaginigrid/seasonsist1.jpg','imaginigrid/seasonsist2.jpg','imaginigrid/stalin.jpg','imaginigrid/stefan.jpg','imaginigrid/traian.jpg','imaginigrid/trump.jpg','imaginigrid/tudorist1.jpg','imaginigrid/tudorist4.jpg',
'imaginigrid/vlad.jpg'];
var imaginialese=[];

function shuffle(a) {
    var k, aux, l;
    for (l = a.length; l; l--) {
        k = Math.floor(Math.random() * l);
        aux = a[l - 1];
        a[l - 1] = a[k];
        a[k] = aux;
    }
}
var div=[]
function sel(x){
	clearInterval(crono);
	document.getElementById("time").innerHTML='00:00';
	document.getElementById("mutari").innerHTML='mutari : 0';
	document.getElementById("start").innerHTML='start';
	verifstart=0;
	
	k=0;
	m=0;
	imaginialese=[];
	shuffle(imaginigrid);
	var j=0;
	for(i=0;i<=nrcard[x];i++)
	{
		if(i<=nrcard[x]/2)
		{
			imaginialese[i]=imaginigrid[i];
		}else {
			imaginialese[i]=imaginigrid[j];
			j++;
		}
	}
	document.getElementById('grid0').style.background='none';
	document.getElementById('grid1').style.background='none';
	document.getElementById('grid2').style.background='none';
	document.getElementById('grid'+x).style.background='#470001';
	
	for(var i=0;i<=59;i++)
	{
		$('#div'+i).remove();
		$('#card'+i).remove();
	}
	grid=x;
	shuffle(imaginialese);
	for(var i=0;i<=nrcard[x];i++)
	{	div[i]=document.createElement('div');
		div[i].id="div"+i;
		card[i]=document.createElement("img");

		card[i].id="card"+i;
		div[i].style.width=Math.round(widthcard[x])+'px';
		div[i].style.height=heightcard[x]+'px';
		div[i].style.marginLeft=Math.round(marginleftcard[x])+'px';
		div[i].style.marginTop=margintopcard[x]+'px';
		card[i].style.width=widthcard[x]+'px';
		card[i].style.height=heightcard[x]+'px';
		div[i].style.display="inline-block";
		div[i].style.position="relative";
		div[i].style.verticalAlign="middle";
		div[i].style.border="3px solid black";
		div[i].style.borderRadius="5px";
		div[i].style.transition="0.5s all";
		card[i].style.transition="0.5s all";
		div[i].style.cursor="pointer";
		card[i].style.objectFit='contain';
		div[i].style.background='radial-gradient(ellipse at center, #333333 0%,#010101 100%)';
		card[i].src=imaginialese[i];
		div[i].style.boxShadow='0px 0px 25px black';
		
		document.getElementById("joc").appendChild(div[i]);
		document.getElementById("div"+i).appendChild(card[i]);document.getElementById('card'+i).style.opacity=0;
	}
	
}
var verifstart=0,crono;
function start(){
	document.getElementById("time").innerHTML='00:00';
	document.getElementById("mutari").innerHTML='mutari : 0';
	sel(grid);
	verifstart=1;
	flip.play();
	for(i=0;i<=nrcard[grid];i++)
	{	
		div[i].style.background='radial-gradient(ellipse at center, rgba(71,0,1,1) 0%,rgba(25,0,3,1) 100%)';
	}
	var minute=0,secunde=0,centisecunde=0,a,b;
	
	document.getElementById('start').innerHTML='stop';
	crono=setInterval(function(){
		secunde++;
		
			if(secunde==60)
			{
				minute++;
				secunde=0;
			}
		
		if(secunde<10){a='0'+secunde;}
		else a=secunde;
		
			
		document.getElementById("time").innerHTML=minute+':'+a;
		if(k==(nrcard[grid]+1)/2)
		{	verifstart=0;
			win.play();
			clearInterval(crono);
			document.getElementById('start').innerHTML='start';
			setTimeout(function(){
				document.getElementById('mutari').style.fontWeight='900';
				document.getElementById('time').style.fontWeight='900';
				document.getElementById('mutari').style.color='red';
				document.getElementById('time').style.color='red'},250);
			setTimeout(function(){
				document.getElementById('mutari').style.color='white';
				document.getElementById('time').style.color='white'},500);
			setTimeout(function(){
				document.getElementById('mutari').style.color='red';
				document.getElementById('time').style.color='red'},750);
			setTimeout(function(){
				document.getElementById('mutari').style.color='white';
				document.getElementById('time').style.color='white'},1000);
			for(i=0;i<=nrcard[grid];i++)
				{
					div[i].style.background='radial-gradient(ellipse at center, #333333 0%,#010101 100%)';
				}
		}
		},1000);
	
	document.getElementById('card0').onclick=function(){document.getElementById('card0').style.opacity=1; elem=document.getElementById('card0'); efect(elem);};
	document.getElementById('card1').onclick=function(){document.getElementById('card1').style.opacity=1; elem=document.getElementById('card1'); efect(elem);};
	document.getElementById('card2').onclick=function(){document.getElementById('card2').style.opacity=1; elem=document.getElementById('card2'); efect(elem);};
	document.getElementById('card3').onclick=function(){document.getElementById('card3').style.opacity=1; elem=document.getElementById('card3'); efect(elem);};
	document.getElementById('card4').onclick=function(){document.getElementById('card4').style.opacity=1; elem=document.getElementById('card4'); efect(elem);};
	document.getElementById('card5').onclick=function(){document.getElementById('card5').style.opacity=1; elem=document.getElementById('card5'); efect(elem);};
	document.getElementById('card6').onclick=function(){document.getElementById('card6').style.opacity=1; elem=document.getElementById('card6'); efect(elem);};
	document.getElementById('card7').onclick=function(){document.getElementById('card7').style.opacity=1; elem=document.getElementById('card7'); efect(elem);};
	document.getElementById('card8').onclick=function(){document.getElementById('card8').style.opacity=1; elem=document.getElementById('card8'); efect(elem);};
	document.getElementById('card9').onclick=function(){document.getElementById('card9').style.opacity=1; elem=document.getElementById('card9'); efect(elem);};
	document.getElementById('card10').onclick=function(){document.getElementById('card10').style.opacity=1; elem=document.getElementById('card10'); efect(elem);};
	document.getElementById('card11').onclick=function(){document.getElementById('card11').style.opacity=1; elem=document.getElementById('card11'); efect(elem);};
	document.getElementById('card12').onclick=function(){document.getElementById('card12').style.opacity=1; elem=document.getElementById('card12'); efect(elem);};
	document.getElementById('card13').onclick=function(){document.getElementById('card13').style.opacity=1; elem=document.getElementById('card13'); efect(elem);};
	document.getElementById('card14').onclick=function(){document.getElementById('card14').style.opacity=1; elem=document.getElementById('card14'); efect(elem);};
	document.getElementById('card15').onclick=function(){document.getElementById('card15').style.opacity=1; elem=document.getElementById('card15'); efect(elem);};
	document.getElementById('card16').onclick=function(){document.getElementById('card16').style.opacity=1; elem=document.getElementById('card16'); efect(elem);};
	document.getElementById('card17').onclick=function(){document.getElementById('card17').style.opacity=1; elem=document.getElementById('card17'); efect(elem);};
	document.getElementById('card18').onclick=function(){document.getElementById('card18').style.opacity=1; elem=document.getElementById('card18'); efect(elem);};
	document.getElementById('card19').onclick=function(){document.getElementById('card19').style.opacity=1; elem=document.getElementById('card19'); efect(elem);};
	document.getElementById('card20').onclick=function(){document.getElementById('card20').style.opacity=1; elem=document.getElementById('card20'); efect(elem);};
	document.getElementById('card21').onclick=function(){document.getElementById('card21').style.opacity=1; elem=document.getElementById('card21'); efect(elem);};
	document.getElementById('card22').onclick=function(){document.getElementById('card22').style.opacity=1; elem=document.getElementById('card22'); efect(elem);};
	document.getElementById('card23').onclick=function(){document.getElementById('card23').style.opacity=1; elem=document.getElementById('card23'); efect(elem);};
	document.getElementById('card24').onclick=function(){document.getElementById('card24').style.opacity=1; elem=document.getElementById('card24'); efect(elem);};
	document.getElementById('card25').onclick=function(){document.getElementById('card25').style.opacity=1; elem=document.getElementById('card25'); efect(elem);};
	document.getElementById('card26').onclick=function(){document.getElementById('card26').style.opacity=1; elem=document.getElementById('card26'); efect(elem);};
	document.getElementById('card27').onclick=function(){document.getElementById('card27').style.opacity=1; elem=document.getElementById('card27'); efect(elem);};
	document.getElementById('card28').onclick=function(){document.getElementById('card28').style.opacity=1; elem=document.getElementById('card28'); efect(elem);};
	document.getElementById('card29').onclick=function(){document.getElementById('card29').style.opacity=1; elem=document.getElementById('card29'); efect(elem);};
	document.getElementById('card30').onclick=function(){document.getElementById('card30').style.opacity=1; elem=document.getElementById('card30'); efect(elem);};
	document.getElementById('card31').onclick=function(){document.getElementById('card31').style.opacity=1; elem=document.getElementById('card31'); efect(elem);};
	document.getElementById('card32').onclick=function(){document.getElementById('card32').style.opacity=1; elem=document.getElementById('card32'); efect(elem);};
	document.getElementById('card33').onclick=function(){document.getElementById('card33').style.opacity=1; elem=document.getElementById('card33'); efect(elem);};
	document.getElementById('card34').onclick=function(){document.getElementById('card34').style.opacity=1; elem=document.getElementById('card34'); efect(elem);};
	document.getElementById('card35').onclick=function(){document.getElementById('card35').style.opacity=1; elem=document.getElementById('card35'); efect(elem);};
	document.getElementById('card36').onclick=function(){document.getElementById('card36').style.opacity=1; elem=document.getElementById('card36'); efect(elem);};
	document.getElementById('card37').onclick=function(){document.getElementById('card37').style.opacity=1; elem=document.getElementById('card37'); efect(elem);};
	document.getElementById('card38').onclick=function(){document.getElementById('card38').style.opacity=1; elem=document.getElementById('card38'); efect(elem);};
	document.getElementById('card39').onclick=function(){document.getElementById('card39').style.opacity=1; elem=document.getElementById('card39'); efect(elem);};
	document.getElementById('card40').onclick=function(){document.getElementById('card40').style.opacity=1; elem=document.getElementById('card40'); efect(elem);};
	document.getElementById('card41').onclick=function(){document.getElementById('card41').style.opacity=1; elem=document.getElementById('card41'); efect(elem);};
	document.getElementById('card42').onclick=function(){document.getElementById('card42').style.opacity=1; elem=document.getElementById('card42'); efect(elem);};
	document.getElementById('card43').onclick=function(){document.getElementById('card43').style.opacity=1; elem=document.getElementById('card43'); efect(elem);};
	document.getElementById('card44').onclick=function(){document.getElementById('card44').style.opacity=1; elem=document.getElementById('card44'); efect(elem);};
	document.getElementById('card45').onclick=function(){document.getElementById('card45').style.opacity=1; elem=document.getElementById('card45'); efect(elem);};
	document.getElementById('card46').onclick=function(){document.getElementById('card46').style.opacity=1; elem=document.getElementById('card46'); efect(elem);};
	document.getElementById('card47').onclick=function(){document.getElementById('card47').style.opacity=1; elem=document.getElementById('card47'); efect(elem);};
	document.getElementById('card48').onclick=function(){document.getElementById('card48').style.opacity=1; elem=document.getElementById('card48'); efect(elem);};
	document.getElementById('card49').onclick=function(){document.getElementById('card49').style.opacity=1; elem=document.getElementById('card49'); efect(elem);};
	document.getElementById('card50').onclick=function(){document.getElementById('card50').style.opacity=1; elem=document.getElementById('card50'); efect(elem);};
	document.getElementById('card51').onclick=function(){document.getElementById('card51').style.opacity=1; elem=document.getElementById('card51'); efect(elem);};
	document.getElementById('card52').onclick=function(){document.getElementById('card52').style.opacity=1; elem=document.getElementById('card52'); efect(elem);};
	document.getElementById('card53').onclick=function(){document.getElementById('card53').style.opacity=1; elem=document.getElementById('card53'); efect(elem);};
	document.getElementById('card54').onclick=function(){document.getElementById('card54').style.opacity=1; elem=document.getElementById('card54'); efect(elem);};
	document.getElementById('card55').onclick=function(){document.getElementById('card55').style.opacity=1; elem=document.getElementById('card55'); efect(elem);};
	document.getElementById('card56').onclick=function(){document.getElementById('card56').style.opacity=1; elem=document.getElementById('card56'); efect(elem);};
	document.getElementById('card57').onclick=function(){document.getElementById('card57').style.opacity=1; elem=document.getElementById('card57'); efect(elem);};
	document.getElementById('card58').onclick=function(){document.getElementById('card58').style.opacity=1; elem=document.getElementById('card58'); efect(elem);};
	document.getElementById('card59').onclick=function(){document.getElementById('card59').style.opacity=1; elem=document.getElementById('card59'); efect(elem);}
	shuffle(imaginigrid);
	
	
	
}
function stop(){
	verifstart=0;
	for(i=0;i<=nrcard[grid];i++)
				{
					div[i].style.background='radial-gradient(ellipse at center, #333333 0%,#010101 100%)';
				}
	document.getElementById('start').innerHTML='start';
	k=0;
	m=0;
	document.getElementById("time").innerHTML='00:00';
	document.getElementById("mutari").innerHTML='mutari : 0';
	clearInterval(crono);
	
}
var ok=0,sursa1,sursa2,ales1,ales2,tranp1,transp2,k=0,m=0;
function efect(clicked){
	flip.pause();
	flip.currentTime=0;
	flip.play();
	if (ok==0)
	{	
		ok=1;
		sursa1=clicked.src;
		ales1=clicked;
		clicked.style.pointerEvents='none';
		
	}else if(clicked!=ales1){{
		ales1.style.pointerEvents='auto';
		sursa2=clicked.src;
		ales2=clicked;
		ok=0;
		if(sursa1==sursa2){
			corect.play();
			ales1.style.filter='grayscale(200%) contrast(200%)';
			ales2.style.filter='grayscale(200%) contrast(200%)';
			ales1.style.pointerEvents='none';
			ales2.style.pointerEvents='none';
			k++;
			m++;
			document.getElementById("mutari").innerHTML="mutari :"+m;
		}else{
			
			ales1.style.transition='0.5s all';
			ales2.style.transition='0.5s all';
			ales2.style.opacity=1;
			transp1=ales1;
			transp2=ales2;
			clicked.style.pointerEvents='none';
			var l=setTimeout(function(){transp1.style.opacity=0;
			transp2.style.opacity=0;
			clicked.style.pointerEvents='auto';},500);
			m++;
			document.getElementById("mutari").innerHTML="mutari :"+m;
			
			
			
			}
	}
	}
}
var verifsonor=1;
function sonoron(){
	verifsonor=1;
	flip.volume=1;
	corect.volume=1;
	musicbg.volume=0.5;
	document.getElementById('sound').src='http://imgur.com/8vzxG6y.png';
}
function sonoroff(){
	verifsonor=0;
	flip.volume=0;
	corect.volume=0;
	musicbg.volume=0;
	document.getElementById('sound').src='http://imgur.com/Z6sugR3.png';
	
	
	
}