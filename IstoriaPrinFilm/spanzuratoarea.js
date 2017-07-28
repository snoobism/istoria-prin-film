var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var gresit = new Audio('audio/gresit.mp3');
var corect = new Audio('audio/corect.mp3');
var win = new Audio('audio/win.mp3');
$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText0.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText0.interval)
            clearTimeout($.resizeText0.interval)

        $.resizeText0.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText0();
	    }, 300);
    });
}

$.resizeText0 = {
    increaseSize: function (increment, start, newElem, width, height) {
        var fontSize = start;
        
        while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
            fontSize += increment;
            newElem.css("font-size", fontSize + "em");
        }
        
        if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
            fontSize -= increment;
            newElem.css("font-size", fontSize + "em");
            if (increment > 0.1) {
                $.resizeText0.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText1 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText1.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText1.interval)
clearTimeout($.resizeText1.interval)
$.resizeText1.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText1();}, 300);});};
$.resizeText1 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText1.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText2 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText2.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText2.interval)
clearTimeout($.resizeText2.interval)
$.resizeText2.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText2();}, 300);});};
$.resizeText2 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText2.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText3 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText3.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText3.interval)
clearTimeout($.resizeText3.interval)
$.resizeText3.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText3();}, 300);});};
$.resizeText3 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText3.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};

var litere=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ș','z','x','c','v','b','n','m','ț','ă','â']



var nume_buton=['','Instrucțiuni','Start','descoperă'];

var x;

var matrice=[
['________ _______','cavaleri teutoni','url(imaginitest/alexandrist2.jpg)'],
['_______ __ __ ______',"bătălia de pe gheață",'url(imaginitest/alexandrist3.jpg)'],
['_______ __ __ __________',"bătălia de la gettysburg",'url(imaginitest/birthist3.jpg)'],
['______ _______','circus maximus','url(imaginitest/benhurist3.jpg)'],
['__ ____ ____','ku klux klan','url(imaginitest/birthist4.jpg)'],
['____________ ________','crucișătorul potemkin','url(imaginitest/crucisatorist1.jpg)'],
['______ __ __ _______','atacul de la smârdan','url(imaginitest/indepist2.jpg)'],
['_____ __ __ ____ ____','podul de pe râul kwai','url(imaginitest/kwaiist1.jpg)'],
['__________ ___ _________','debarcarea din normandia','url(imaginitest/longestist1.jpg)'],
['_______ __ __ __________','bătălia de la călugăreni','url(imaginitest/mihaiist2.jpg)'],
['_______ __ __ ______','bătălia de la rovine','url(imaginitest/mirceaist2.jpg)'],
['_______ __ __ ________','bătălia de la waterloo','url(imaginitest/napoleonist3.jpg)'],
['_____ __ __________','lupte de gladiatori','url(imaginitest/spartacusist2.jpg)'],
['______','trinity','url(imaginitest/tarmist1.jpg)'],
['______ ___','little boy','url(imaginitest/tarmist2.jpg)'],
['_________ _________','cucerirea kazanului','url(imaginitest/ivanist3.jpg)'],
['_______ ______','mahatma gandhi','url(imaginitest/gandhiist1.jpg)']

];
var scor=1000;
window.onload = function(){
	corect.volume=0.15;
	win.volume=0.5;
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
	
	var imaginecont=document.createElement('div');
	imaginecont.style.display='inline-block';
	imaginecont.id='imaginecont';
	imaginecont.style.margin=0.1*y0+'px 1%'; 
	imaginecont.style.verticalAlign='top';
	imaginecont.style.opacity=0;
	imaginecont.style.transition='0.5s all';
	document.body.appendChild(imaginecont);
	
	var imagine=document.createElement('div');
	imagine.style.display='block';
	imagine.id='imagine';
	imagine.style.width=0.6*x0+'px';
	imagine.style.height=0.6*y0+'px';
	imagine.style.background='black';
	imagine.style.fontSize='0';
	document.getElementById('imaginecont').appendChild(imagine);
	
	for(var i=0;i<=5;i++)
	{	
		for(var j=0;j<=5;j++)
		{
		var blocheaza=document.createElement('div');
		blocheaza.id='blocheaza'+i+'_'+j;
		blocheaza.style.width=0.1*x0+'px';
		blocheaza.style.height=0.1*y0+'px';
		blocheaza.style.background='black';
		blocheaza.style.display='inline-block';
		blocheaza.style.opacity=1;
		blocheaza.style.boxShadow='0px 0px 1px black';
		blocheaza.style.transition='0.3s all';
		document.getElementById('imagine').appendChild(blocheaza);
		}
	}
	
	var z=0;
	for(var i=0;i<=2;i++)
	{
		var rand=document.createElement('div');
		rand.style.textAlign='center';
		rand.id='rand'+i;
		rand.style.display='block';
		rand.style.marginTop=0.03*y0+'px';
		document.getElementById('imaginecont').appendChild(rand);
		for(var j=0;j<=9;j++)
		{	
			
			var casuta=document.createElement('div');
			casuta.id='casuta'+z;
			casuta.style.verticalAlign='middle';
			casuta.style.fontSize=0.06*y0+'px';
			casuta.style.fontFamily='bebasbold';
			casuta.style.width=0.07*y0+'px';
			casuta.style.height=0.07*y0+'px';
			casuta.style.color='black';
			casuta.style.background='white';
			casuta.style.marginLeft=0.02*y0+'px';
			casuta.style.display='inline-block';
			casuta.style.border='3px solid black';
			casuta.innerHTML=litere[z];
			casuta.style.borderRadius='5px';
			casuta.style.boxShadow='0px 0px 10px #400000';
			casuta.style.textShadow='0px 0px 1px black';
			casuta.style.cursor='pointer';
			document.getElementById('rand'+i).appendChild(casuta);
			
			z++;
		}
	}
	
	var bara=document.createElement('div');
	bara.style.width=0.05*x0+'px';
	bara.style.left=0.62*x0+'px';
	bara.style.width=0.03*x0+'px';
	bara.style.background='black';
	bara.style.height=document.documentElement.scrollHeight+'px';
	bara.style.display='inline-block';
	bara.style.verticalAlign='top';
	bara.style.opacity=0;
	bara.id='bara';
	bara.style.transition='0.5s all';
	document.body.appendChild(bara);
	
	var meniucont=document.createElement('div');
	meniucont.style.display='inline-block';
	meniucont.id='meniucont';
	meniucont.style.marginTop=0.2*y0+'px';
	meniucont.style.verticalAlign='top';
	meniucont.style.opacity=0;
	meniucont.style.transition='0.5s all';
	document.body.appendChild(meniucont);
	
	var scordoc=document.createElement('div');
	scordoc.style.color='white';
	scordoc.style.fontFamily='bebasbold';
	scordoc.style.fontSize=0.1*y0+'px';
	scordoc.style.textShadow='0px 0px 10px black';
	scordoc.style.display='block';
	scordoc.innerHTML='scor: '+scor;
	scordoc.id='scordoc';
	scordoc.style.marginLeft=0.25*0.3*x0+'px';
	document.getElementById('meniucont').appendChild(scordoc);
	
	var cuvant=document.createElement('div');

	cuvant.id='cuvant';
	cuvant.style.width=0.2*x0+'px';
	cuvant.style.height=0.15*y0+'px';
	cuvant.style.marginTop=0.1*y0+'px';
	cuvant.style.marginLeft='auto';
	cuvant.style.marginRight='auto';
	cuvant.style.color='white';
	cuvant.style.fontFamily='bebasbook';
	cuvant.style.borderRadius='5px';
	cuvant.style.boxShadow='0px 0px 5px #400000';
	cuvant.className='resizeText0';
	cuvant.style.textShadow='0px 0px 5px black';
	cuvant.innerHTML='________';
	cuvant.style.textAlign='center';
	cuvant.style.display='block';
	cuvant.style.background='black';
	cuvant.style.marginLeft=0.25*0.3*x0+'px';
	document.getElementById('meniucont').appendChild(cuvant);
	$('.resizeText0').resizeText0();
	
	for(var i=1;i<=3;i++)
	{
		var buton=document.createElement('div');
		buton.id='buton'+i;
		buton.className='resizeText'+i;
		buton.style.background='rgba(0,0,0,0.8)';
		buton.style.boxShadow='0px 0px 15px black';
		buton.style.fontFamily='bebasbold';
		buton.style.color='white';
		buton.style.height=0.1*y0+'px';
		buton.style.top=0.1*y0+'px';
		buton.style.borderRadius='5px';
		buton.style.width=0.093*x0+'px';
		buton.style.display='table-cell';
		buton.style.position='relative';
		buton.style.left=0.0125*x0+'px';
		buton.style.verticalAlign='middle';
		buton.style.textAlign='center';
		buton.style.transition='0.5s all';
		buton.style.opacity=1;
		buton.style.textShadow='0px 0px 10px black';
		buton.style.cursor='pointer';
		buton.innerHTML=nume_buton[i];
		document.getElementById('meniucont').appendChild(buton);
		}
		$('.resizeText1').resizeText1();
		$('.resizeText2').resizeText2();
		$('.resizeText3').resizeText3();
		document.getElementById('buton'+1).style.left=0.0125*x0+'px';
		document.getElementById('buton'+2).style.left=0.0250*x0+'px';
		document.getElementById('buton'+3).style.left=0.0375*x0+'px';
		document.getElementById('buton'+2).onclick=function(){start()};
		document.getElementById('buton'+1).onclick=function(){instructiuni()};
		document.getElementById('buton'+3).onclick=function(){descopera_buton()};
		document.getElementById('buton'+3).style.pointerEvents='none';
	
	
	document.getElementById('casuta0').onclick=function(){litera_apas(litere[0])};
	document.getElementById('casuta1').onclick=function(){litera_apas(litere[1])};
	document.getElementById('casuta2').onclick=function(){litera_apas(litere[2])};
	document.getElementById('casuta3').onclick=function(){litera_apas(litere[3])};
	document.getElementById('casuta4').onclick=function(){litera_apas(litere[4])};
	document.getElementById('casuta5').onclick=function(){litera_apas(litere[5])};
	document.getElementById('casuta6').onclick=function(){litera_apas(litere[6])};
	document.getElementById('casuta7').onclick=function(){litera_apas(litere[7])};
	document.getElementById('casuta8').onclick=function(){litera_apas(litere[8])};
	document.getElementById('casuta9').onclick=function(){litera_apas(litere[9])};
	document.getElementById('casuta10').onclick=function(){litera_apas(litere[10])};
	document.getElementById('casuta11').onclick=function(){litera_apas(litere[11])};
	document.getElementById('casuta12').onclick=function(){litera_apas(litere[12])};
	document.getElementById('casuta13').onclick=function(){litera_apas(litere[13])};
	document.getElementById('casuta14').onclick=function(){litera_apas(litere[14])};
	document.getElementById('casuta15').onclick=function(){litera_apas(litere[15])};
	document.getElementById('casuta16').onclick=function(){litera_apas(litere[16])};
	document.getElementById('casuta17').onclick=function(){litera_apas(litere[17])};
	document.getElementById('casuta18').onclick=function(){litera_apas(litere[18])};
	document.getElementById('casuta19').onclick=function(){litera_apas(litere[19])};
	document.getElementById('casuta20').onclick=function(){litera_apas(litere[20])};
	document.getElementById('casuta21').onclick=function(){litera_apas(litere[21])};
	document.getElementById('casuta22').onclick=function(){litera_apas(litere[22])};
	document.getElementById('casuta23').onclick=function(){litera_apas(litere[23])};
	document.getElementById('casuta24').onclick=function(){litera_apas(litere[24])};
	document.getElementById('casuta25').onclick=function(){litera_apas(litere[25])};
	document.getElementById('casuta26').onclick=function(){litera_apas(litere[26])};
	document.getElementById('casuta27').onclick=function(){litera_apas(litere[27])};
	document.getElementById('casuta28').onclick=function(){litera_apas(litere[28])};
	document.getElementById('casuta29').onclick=function(){litera_apas(litere[29])};
	
	setTimeout(function(){
		document.getElementById('imaginecont').style.opacity=1;
	},1000);
	setTimeout(function(){
		document.getElementById('bara').style.opacity=1;
	},1500);
	setTimeout(function(){
		document.getElementById('meniucont').style.opacity=1;
	},2000);
	
}

function start(){
	scor=1000;
	document.getElementById('scordoc').innerHTML='SCOR: '+scor;
	document.getElementById('buton'+3).style.pointerEvents='auto';
	for(var i=0;i<=5;i++)
	{
		for(var j=0;j<=5;j++)
		{
			document.getElementById('blocheaza'+i+'_'+j).style.opacity=1;
		}
	}
	for(var i=0;i<=9;i++)
	{
		descopera();
	}
	x=Math.floor(Math.random() * matrice.length) + 0; 
	document.getElementById('imagine').style.background='#000000 '+matrice[x][2]+' 0 0/100% 100% no-repeat';
	document.getElementById('cuvant').innerHTML=matrice[x][0];
	$('.resizeText0').resizeText0();
}
function descopera(){
	var i1=Math.floor(Math.random() * 6) + 0; 
		var j1=Math.floor(Math.random() * 6) + 0; 
		if(document.getElementById('blocheaza'+i1+'_'+j1).style.opacity!=0)
		{
			document.getElementById('blocheaza'+i1+'_'+j1).style.opacity=0;
			
		}else descopera();
	
}
function instructiuni(){
	var instr=document.createElement('div');
	instr.style.position='fixed';
	instr.style.left='50%';
	instr.style.top='50%';
	instr.style.transform='translate(-50%,-50%)';
	instr.style.background='rgba(0,0,0,0.7)';
	instr.style.width=0.5*x0+'px';
	instr.innerHTML='<p>Acest joc de spânzurătoare este diferit, căci are la baza sa și o imagine suport.</p><p>Imaginea este reprezentativă cuvântului generat pentru jocul de spânzurătoare</p><p>Prin apăsarea butonului de START sunt descoperite 10 căsuțe din imagine</p><p>Prin apăsarea butonului DESCOPERĂ sunt descoperite încă 2 căsuțe, însă sunt scăzute 50 de puncte din scor</p><p>Pentru fiecare literă corectă scorul crește cu 25 și cu fiecare literă greșită scade tot cu 25</p><p>Apăsați pe această fereastră pentru a o face să dispară</p>';
	instr.style.fontFamily='museo';
	instr.style.color='white';
	instr.id='instr';
	instr.style.textAlign='center';
	instr.style.boxShadow='0px 0px 10px #600000';
	instr.style.padding='1%';
	instr.style.cursor='pointer';
	document.body.appendChild(instr);
	
	document.getElementById('instr').onclick=function(){document.getElementById('instr').remove();}
}
function descopera_buton(){
	for(i=0;i<=1;i++)
	{
		descopera();
	}
	scor=scor-50;
	document.getElementById('scordoc').innerHTML='SCOR: '+scor;
	
	
}
function litera_apas(lit)
{	console.log(lit);
	for(i=0;i<=matrice[x][0].length-1;i++)
	{
		if(matrice[x][1][i]==String(lit)||matrice[x][1][i].toUpperCase()==String(lit))
		{	
			matrice[x][0]=matrice[x][0].replaceAt(i, lit);
			document.getElementById('cuvant').innerHTML=matrice[x][0];
			$('.resizeText0').resizeText0();
			scor=scor+50;
			document.getElementById('scordoc').innerHTML='SCOR: '+scor;
			corect.play();
		}
	
	}
	scor=scor-25;
			document.getElementById('scordoc').innerHTML='SCOR: '+scor;
	if(matrice[x][0]==matrice[x][1])
	{	win.play();
		document.getElementById('imagine').style.filter='greyscale(100%)';
		for(var i=0;i<=5;i++)
		{	
			for(var j=0;j<=5;j++)
			{
				document.getElementById('blocheaza'+i+'_'+j).style.opacity=0.1;
			}
		}
	}
	
}
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}






