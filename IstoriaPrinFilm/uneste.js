var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var corect = new Audio('audio/corect.mp3');
var gresit = new Audio('audio/gresit.mp3');

var contc=[],cas=[];
var win = new Audio('audio/win.mp3');
var a=[
		['războiul de secesiune','un conflict politic și militar de patru ani (1861–1865) dintre Statele din Nord ale SUA și Statele din Sud ale SUA','0'],
		['Ku-Klux-Klan','o organizaţie rasistă extremistă','1'],
		['Renaşterea','mișcare culturală care s-a întins pe perioada secolelor XIV-XVII','2'],
		['ateismul','respingerea credinței în existența unor zeități','3'],
		['războiul rece','perioadă de tensiuni care a apărut după sfârșitul celui de-al Doilea Război Mondial și a durat până la revoluțiile din 1989','4'],
		['războiul atomic','conflict militar sau o strategie politică în care sunt folosite arme nucleare','5'],
		['Antichitatea','a II-a epocă a istoriei','6'],
		['Michelangelo','unul dintre cei mai importanţi artişti ai Renașterii Italiene','7'],
		['George Smith Patton','un general al armatei S.U.A.','8'],
		['Revoluţia bolşevică','lovitura de stat prin care bolșevicii au preluat puterea cu forța de la guvernul lui Kerenski','9'],
		['Gandhi','părintele independenței Indiei și inițiatorul mișcărilor de revoltă nonviolente','10'],
		['William Wallace','un cavaler și nobil scoțian devenit unul din principalii lideri în timpul Războaielor Scoțiene de Independență','11'],
		['Oskar Schindler','industriaș german, spion și membru al partidului nazist care a salvat de la Holocaust circa 1200 de evrei','12'],
		['Napoleon Bonaparte','fost lider politic și militar al Franței','13'],
		["Ioana D'Arc",'una din figurile emblematice ale Franței și sfântă a Bisericii Catolice','14'],
		['Revolta arabă','rebeliune inițiată de arabi cu scopul câștigării independenței de sub jugul Imperiului Otoman','15'],
		["Bătălia Atlanticului","cea mai lungă campanie militară din Al Doilea Război Mondial","16"],
		["Revoluţia Rusă de la 1905","prima revoluţie burghezo-democratică din epoca imperialismului","17"],
		["Ivan cel Groaznic","primul ţar rus din 1547","18"],
		["Iosif Stalin","om politic sovietic, fost revoluționar bolșevic devenit după Revoluția din Octombrie conducător","19"],
		["Operaţiunea Barbarossa","numele de cod secret folosit de conducerea Germaniei naziste pentru operația militară de invadare a Uniunii Sovietice","20"],
		["Armata Albă","unele forțe din Rusia care se opuneau bolșevicilor","21"],
		["Andrei Rubliov","călugăr și pictor de icoane rus","22"],
		["Bătălia de la Stalingrad","cea mai sângeroasă bătălie din istorie","23"],
		["Alexandru Ioan Cuza","primul domnitor al Principatelor Unite și al statului național România","24"],
		["Revoluţia de la 1821","unul dintre evenimentele care au marcat începutul procesului de renaştere naţională a României","25"],
		["Tudor Vladimirescu","conducătorul revoluţiei de la 1821","26"],
		["Cornelius Fuscus","general roman ce a luptat în expediţii sub Împăraţii Dinastiei Flavius","27"],
		["Decebal","regele Daciei între 85-106 d.Hr","28"],
		["Mihai Viteazul","domnul Ţării Româneşti începând cu anul 1593","29"]
	];
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
$.fn.resizeText4 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText4.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText4.interval)
clearTimeout($.resizeText4.interval)
$.resizeText4.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText4();}, 300);});};
$.resizeText4 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText4.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText5 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText5.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText5.interval)
clearTimeout($.resizeText5.interval)
$.resizeText5.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText5();}, 300);});};
$.resizeText5 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText5.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText6 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText6.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText6.interval)
clearTimeout($.resizeText6.interval)
$.resizeText6.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText6();}, 300);});};
$.resizeText6 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText6.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText7 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText7.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText7.interval)
clearTimeout($.resizeText7.interval)
$.resizeText7.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText7();}, 300);});};
$.resizeText7 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText7.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText8 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText8.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText8.interval)
clearTimeout($.resizeText8.interval)
$.resizeText8.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText8();}, 300);});};
$.resizeText8 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText8.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText9 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText9.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText9.interval)
clearTimeout($.resizeText9.interval)
$.resizeText9.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText9();}, 300);});};
$.resizeText9 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText9.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText10 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText10.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText10.interval)
clearTimeout($.resizeText10.interval)
$.resizeText10.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText10();}, 300);});};
$.resizeText10 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText10.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText11 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText11.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText11.interval)
clearTimeout($.resizeText11.interval)
$.resizeText11.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText11();}, 300);});};
$.resizeText11 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText11.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText12 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText12.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText12.interval)
clearTimeout($.resizeText12.interval)
$.resizeText12.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText12();}, 300);});};
$.resizeText12 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText12.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
 $.fn.resizeText13 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText13.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText13.interval)
clearTimeout($.resizeText13.interval)
$.resizeText13.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText13();}, 300);});};
$.resizeText13 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText13.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
window.onload = function(){
	corect.volume=0.15;
	gresit.volume=0.15;
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
	var titlu=document.createElement('div');
	titlu.id='titlu';
	titlu.innerHTML="unește căsuțele corspunzătoare";
	titlu.style.fontFamily='bebasbold';
	titlu.style.color='white';
	titlu.style.textShadow='0px 0px 10px black';
	titlu.style.fontSize=0.1*y0+'px';
	titlu.style.textAlign='center';
	titlu.style.marginTop=0.1*y0+'px';
	titlu.style.opacity=0;
	titlu.style.transition='0.5s all';
	document.body.appendChild(titlu);
	var k=0;
	for(var i=0;i<=4;i++)
	{
		contc[i]=document.createElement('div');
		contc[i].id='contc'+i;
		contc[i].style.display='block';
		contc[i].style.margin=0.02*y0+'px auto';
		contc[i].style.opacity=0;
		contc[i].style.transition='0.3s all';
		document.body.appendChild(contc[i]);
		for(var j=0;j<=1;j++)
		{k++;
				cas[j]=document.createElement('div');
				cas[j].innerHTML='?';
				cas[j].id='cas'+i+j;
				cas[j].style.boxShadow='0px 0px 15px #400000';
				cas[j].style.display='inline-block';
				cas[j].style.width=0.3*x0+'px';
				cas[j].style.height=0.1*y0+'px';
				cas[j].className='resizeText'+k;
				cas[j].style.background='rgba(0,0,0,0.7)';
				cas[j].style.marginLeft=0.13*x0+'px';
				cas[j].style.color='white';
				cas[j].style.fontFamily='bebasbook';
				cas[j].style.textAlign='center';
				document.getElementById('contc'+i).appendChild(cas[j]);
		}
	}
	var np=0;
	var buton=document.createElement('div');
	buton.id='buton';
	buton.style.position='absolute';
	buton.style.left=0.495*x0+'px';
	buton.style.top=0.75*y0+'px';
	buton.style.transform='translateX(-50%)';
	buton.style.width=0.1*x0+'px';
	buton.style.height=0.1*y0+'px';
	buton.style.display='inline';
	buton.innerHTML='generează căsuțe';
	buton.style.fontFamily='bebasbold';
	buton.style.transition='0.5s all';
	buton.style.color='white';
	buton.style.zIndex='100';
	buton.style.background='rgba(0,0,0,0.7)';
	buton.className='resizeText11';
	buton.style.boxShadow='0px 0px 10px black';
	buton.style.cursor='pointer';
	buton.style.textAlign='center';
	buton.style.borderRadius='3px';
	buton.style.opacity=0;
	buton.onclick=function(){if(np==0){start();np=1;}else {location.reload();	}};
	document.body.appendChild(buton);
	$('.resizeText1').resizeText1();
$('.resizeText2').resizeText2();
$('.resizeText3').resizeText3();
$('.resizeText4').resizeText4();
$('.resizeText5').resizeText5();
$('.resizeText6').resizeText6();
$('.resizeText7').resizeText7();
$('.resizeText8').resizeText8();
$('.resizeText9').resizeText9();
$('.resizeText10').resizeText10();
$('.resizeText11').resizeText11();
$('.resizeText12').resizeText12();
	document.getElementById('cas00').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas01').onclick=function(){if (ok==3){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas10').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas11').onclick=function(){if (ok==3){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas20').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas21').onclick=function(){if (ok==3){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas30').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas31').onclick=function(){if (ok==3){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas40').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas41').onclick=function(){if (ok==3){apasat1(this);}else {apasat2(this);};};
	setTimeout(function(){
		document.getElementById('titlu').style.opacity=1;
	},500);
	setTimeout(function(){
		document.getElementById('contc0').style.opacity=1;
	},1000);
	setTimeout(function(){
		document.getElementById('contc1').style.opacity=1;
	},1500);
	setTimeout(function(){
		document.getElementById('contc2').style.opacity=1;
	},2000);
	setTimeout(function(){
		document.getElementById('contc3').style.opacity=1;
	},2500);
	setTimeout(function(){
		document.getElementById('contc4').style.opacity=1;
	},3000);
	setTimeout(function(){
		document.getElementById('buton').style.opacity=1;
	},3500);
	
}
var xx=0;
function connect(div1, div2, culoare, greutate) {
	xx++;
    var off1 = getOffset(div1);
    var off2 = getOffset(div2);
    
    var x1 = off1.left + off1.width;
    var y1 = off1.top + off1.height/2;
    
    var x2 = off2.left;
    var y2 = off2.top+off2.height/2;
    
    var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    
    var cx = ((x1 + x2) / 2) - (length / 2);
    var cy = ((y1 + y2) / 2) - (greutate / 2);
    
    var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
   
    var htmlLine=document.createElement('div');
	htmlLine.id='linie'+p;
	htmlLine.style.borderRadius='25px';
	htmlLine.style.position='absolute';
	htmlLine.style.padding=0;
	htmlLine.style.margin=0;
	htmlLine.style.left=cx+'px';
	htmlLine.style.top=cy+'px';
	htmlLine.style.width=length+'px';
	htmlLine.style.transform='rotate('+angle+'deg)';
	htmlLine.style.height=greutate+'px';
	htmlLine.style.background=culoare;
	htmlLine.style.boxShadow='0px 0px 15px black';
	document.body.appendChild(htmlLine);
	p++;
}
var p=0;
function connect2(div1, div2, culoare, greutate) {
    var off1 = getOffset2(div1);
    var off2 = getOffset2(div2);
    
    var x1 = off1.left + off1.width;
    var y1 = off1.top + off1.height/2;
    
    var x2 = off2.left;
    var y2 = off2.top+off2.height/2;
    
    var length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    
    var cx = ((x1 + x2) / 2) - (length / 2);
    var cy = ((y1 + y2) / 2) - (greutate / 2);
    
    var angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
   
   
	var htmlLine=document.createElement('div');
	htmlLine.id='linie'+p;
	htmlLine.style.borderRadius='25px';
	htmlLine.style.position='absolute';
	htmlLine.style.padding=0;
	htmlLine.style.margin=0;
	htmlLine.style.left=cx+'px';
	htmlLine.style.top=cy+'px';
	htmlLine.style.width=length+'px';
	htmlLine.style.transform='rotate('+angle+'deg)';
	htmlLine.style.height=greutate+'px';
	htmlLine.style.background=culoare;
	htmlLine.style.boxShadow='0px 0px 15px black';
	document.body.appendChild(htmlLine);

    
	setTimeout(function(){document.getElementById('linie'+p).style.opacity=0;},500);
	setTimeout(function(){ document.getElementById('linie'+p).style.opacity=1;document.getElementById('linie'+p).style.background='rgba(255,0,0,0.5)'; p++;},1000);
	
	
    
	
}
function getOffset( el ) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
    };
}
function getOffset2( el ) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight
    };
}
var z,verif;
var div1,div2,ok=2,nr;
function apasat1(ales){
	ok=1;
	div1=ales;
	verif=div1.id;
	verif=verif[verif.length-1];
	console.log(div1);
	console.log(div2);
	for(var i=0;i<=4;i++)
	{	
		document.getElementById('cas'+i+'1').style.pointerEvents='auto';
	}
}
function apasat2(ales){
	z=ales.id;
	if(z[z.length-1]!=verif){
		ok=2;
		div2=ales;
		nr++;
		console.log(div1.style.zIndex);
		if(div1.style.zIndex==div2.style.zIndex)
		{	corect.play();
			connect(div1,div2,'lime',10);
			console.log('a');
			if(xx==5)
			{
				win.volume=0.5;
				win.play();
				for(var i=0;i<=4;i++)
				{
					for(var j=0;j<=1;j++)
					{
						document.getElementById('cas'+i+j).style.background='rgba(42,42,42,0.7)';
						document.getElementById('cas'+i+j).style.pointerEvents='none';
					}
				}
			}
		}else {
			gresit.play();
			connect2(div1,div2,'red',10);
			
		}
		for(var i=0;i<=4;i++)
	{	
		document.getElementById('cas'+i+'1').style.pointerEvents='none';
	}
	}
	$(document).ready(function(){
	document.getElementById('cas00').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas01').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas10').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas11').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas20').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas21').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas30').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas31').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas40').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	document.getElementById('cas41').onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};};
	
});
}
function start(){
	function shuffle(a) {
    var k, aux, l;
    for (l = a.length; l; l--) {
        k = Math.floor(Math.random() * l);
        aux = a[l - 1];
        a[l - 1] = a[k];
        a[k] = aux;
    }
}
var b=[
		['a0','a1','0'],
		['b0','b1','1'],
		['c0','c1','2'],
		['d0','d1','3'],
		['e0','e1','4']
		];
	shuffle(a);
	for(var i=0;i<=4;i++)
	{
		b[i][1]=a[i][1];
		b[i][2]=a[i][2];
		
	}shuffle(b);
	for(var i=0;i<=4;i++)
	{	
		document.getElementById('cas'+i+'0').style.zIndex=a[i][2];
		document.getElementById('cas'+i+'1').style.zIndex=b[i][2];
		document.getElementById('cas'+i+'0').innerHTML='<span onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};}>'+a[i][0]+'</span>';
		document.getElementById('cas'+i+'1').innerHTML='<span onclick=function(){if (ok==2){apasat1(this);}else {apasat2(this);};}>'+b[i][1]+'</span>';
	}
	$('.resizeText1').resizeText1();
$('.resizeText2').resizeText2();
$('.resizeText3').resizeText3();
$('.resizeText4').resizeText4();
$('.resizeText5').resizeText5();
$('.resizeText6').resizeText6();
$('.resizeText7').resizeText7();
$('.resizeText8').resizeText8();
$('.resizeText9').resizeText9();
$('.resizeText10').resizeText10();
$('.resizeText11').resizeText11();
$('.resizeText12').resizeText12();
	
}