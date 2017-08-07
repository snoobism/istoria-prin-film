var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var corect = new Audio('audio/corect.mp3');
var gresit = new Audio('audio/gresit.mp3');
var clock = new Audio('audio/clock.mp3');

$.fn.resizeText0 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
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
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText1.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText1.interval)
            clearTimeout($.resizeText1.interval)

        $.resizeText1.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText1();
	    }, 300);
    });
}
$(document).ready(function () {
    $(".resizeText1").resizeText1();
});
$.resizeText1 = {
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
                $.resizeText1.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText2 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText2.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText2.interval)
            clearTimeout($.resizeText2.interval)

        $.resizeText2.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText2();
	    }, 300);
    });
}

$.resizeText2 = {
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
                $.resizeText2.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText3 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText3.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText3.interval)
            clearTimeout($.resizeText3.interval)

        $.resizeText3.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText3();
	    }, 300);
    });
}

$.resizeText3 = {
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
                $.resizeText3.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText4 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:0;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText4.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText4.interval)
            clearTimeout($.resizeText4.interval)

        $.resizeText4.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText4();
	    }, 300);
    });
}

$.resizeText4 = {
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
                $.resizeText4.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
window.onload = function(){
	
	setTimeout(function(){
		document.getElementById('contmare').style.opacity=1;
		document.getElementById('cont1').style.opacity=1;
		document.getElementById('STARTBUTTON').style.opacity=1;
		document.getElementById("descriere").style.opacity=1;
		document.getElementById('descrieretitlu').style.opacity=1;
		document.getElementById('filmrolls').style.opacity=1;
		
	},500);
	
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
	var f=document.getElementsByClassName("resizeText0");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText1");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText2");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText3");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText4");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.25*x0+"px";
		f[i].style.height=0.08*y0+"px";
	}
	$(".resizeText0").resizeText0();
	$(".resizeText1").resizeText1();
	$(".resizeText2").resizeText2();
	$(".resizeText3").resizeText3();
	$(".resizeText4").resizeText4();
	document.getElementById('contmare').style.width=0.7*x0+"px";
	document.getElementById('contmare').style.fontSize=0.05*y0+'px';
	document.getElementById('contmare').style.marginTop=0.1*y0+"px";
	document.getElementById("cont1").style.width=0.7*x0+"px";
	document.getElementById("cont1").style.height=0.5*y0+"px";
	document.getElementById("c0").style.marginTop=0.03*y0+"px";
	document.getElementById("c0").style.width=0.5*x0+"px";
	document.getElementById("c0").style.height=0.09*y0+"px";
	
	document.getElementById("bara").style.marginTop=0.015*y0+"px";
	document.getElementById("cont2").style.marginTop=0.04*y0+"px";
	document.getElementById("cont3").style.marginTop=0.03*y0+"px";
	document.getElementById("c1").style.left=0.05*x0+"px";
	document.getElementById("c2").style.right=0.05*x0+"px";
	document.getElementById("c3").style.left=0.05*x0+"px";
	document.getElementById("c4").style.right=0.05*x0+"px";
	document.getElementById("cont2").style.height=0.1*y0+"px";
	document.getElementById("cont3").style.height=0.1*y0+"px";
	document.getElementById("STARTBUTTON").style.width=0.15*x0+"px";
	document.getElementById("STARTBUTTON").style.height=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.lineHeight=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.marginTop=0.0*y0+"px";
	document.getElementById("filmrolls").style.marginTop=0.5*y0+"px";
	document.getElementById("filmrolls").style.height=0.25*y0+"px";
	document.getElementById("filmrolls").style.width=0.6*x0+"px";
	descrieretitlu=document.createElement("div");
	descrieretitlu.id='descrieretitlu';
	descrieretitlu.style.opacity=0;
	descrieretitlu.style.transition='1s ease-in-out';
	descrieretitlu.style.display="block";
	descrieretitlu.style.position="relative";
	descrieretitlu.style.marginTop=0.05*y0+"px";
	descrieretitlu.style.marginLeft="auto";
	descrieretitlu.style.marginRight="auto";
	descrieretitlu.style.textAlign="center";
	descrieretitlu.style.width=0.5*x0+"px";
	descrieretitlu.innerHTML="DESCRIERE";
	descrieretitlu.style.fontFamily="bebasregular";
	descrieretitlu.style.color="white";
	descrieretitlu.style.fontSize=0.05*y0+"px";
	descrieretitlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	descrieretitlu.style.paddingTop=0.01*y0+"px";
	descrieretitlu.style.textShadow="0px 0px 5px grey";
	descrieretitlu.style.boxShadow="0px 0px 15px black";
	descrieretitlu.style.padding="20px 10px 10px 10px";
	document.body.appendChild(descrieretitlu);
	
	descriere=document.createElement("div");
	descriere.id='descriere';
	descriere.style.opacity=0;
	descriere.style.transition='1s ease-in-out';
	descriere.style.display="block";
	descriere.style.position="relative";
	descriere.style.marginLeft="auto";
	descriere.style.marginRight="auto";
	descriere.style.textAlign="center";
	descriere.style.width=0.5*x0+"px";
	descriere.innerHTML="<p>● Acest test este creat în scopul verificării cunoştinţelor acumulate de-a lungul navigării site-ului din diferite surse ( dicţionarul istoric, descrieri sau chiar rubrica de 'ştiaţi că').</p><p>● Testul cuprinde aproximativ 75 de întrebări, dintre care 10 sunt selectate aleatoriu de fiecare dată când începeţi testul!</p><p>● Viteza testului poate fi schimbată fie din acest buton, fie de cel din colţul sus al aplicaţiei. Cu cât mai multe butoane roşii, cu atât mai dificil</p><div id='viteza' onclick='viteza()' style='background:url(http://imgur.com/tkI3vHC.png);padding:1%;border-radius:25px;box-shadow:0 0 15px black;text-shadow:0 0 10px #65000B;'><span>VITEZA </span><img class='buton' id='b1s' src='http://imgur.com/ZuYcl7Q.png'/><img class='buton' id='b2s' src='http://imgur.com/ZuYcl7Q.png'/><img class='buton' id='b3s' src='http://imgur.com/gwtPyyc.png'/></div>";
	descriere.style.fontFamily="sourcesans";
	descriere.style.color="white";
	descriere.style.fontSize=0.02*y0+"px";
	descriere.style.marginTop="0";
	descriere.style.lineHeight=200+"%";
	descriere.style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
	descriere.style.paddingTop=0.02*y0+"px";
	descriere.style.textShadow="0px 0px 5px grey";
	descriere.style.boxShadow="0px 0px 15px black";
	descriere.style.padding="10px";
	document.body.appendChild(descriere);
	
	var f=document.getElementsByClassName("buton");
	for(var i=0;i<=f.length-1;i++)
	{
		
		f[i].style.verticalAlign="middle";
		f[i].style.width=0.02*x0+"px";
		
	}
	
	document.getElementById('puncte').style.width=0.7*0.3*x0+"px";
	document.getElementById('intrebare').style.width=0.7*0.3*x0+"px";
	document.getElementById('viteza').style.width=0.7*0.3*x0+"px";
	document.getElementById('puncte').style.marginLeft=0.7*0.03*x0+"px";
	document.getElementById('intrebare').style.marginLeft=0.7*0.03*x0+"px";
	document.getElementById('viteza').style.marginLeft=0.7*0.03*x0+"px"
	
	
}
function incepe()
{	schimbaSTART();
	
	function schimbaSTART()
	{
		
		setTimeout(STARTtext2,500);
		setTimeout(STARTtext3,1500);
		setTimeout(STARTtext4,2500);
		setTimeout(STARTtext5,3500);
		setTimeout(test,4000);
	}
	
	
	function STARTtext1(){
		document.getElementById("STARTBUTTON").innerHTML="START";
	}
	function STARTtext2(){
		document.getElementById("STARTBUTTON").innerHTML="3";
	}
	function STARTtext3(){
		document.getElementById("STARTBUTTON").innerHTML="2";
	}
	function STARTtext4(){
		document.getElementById("STARTBUTTON").innerHTML="1";
	}
	function STARTtext5(){
		document.getElementById("STARTBUTTON").innerHTML="START";
	}	
	
}


var lung=0;
var t,ok;
var b;
function bara(){
	var elem=document.getElementById("progres");
	lung=lung+speed;
	elem.style.width=lung+"%";
	cronometru();
	if(elem.style.width==100+"%")
	{
		stopbara();
		ok=1;
		
	}
	
}
function cronometru(){
	 t=setTimeout(bara,10);
	
	
}

function stopbara(){
	 clearTimeout(t);
	 var elem=document.getElementById("progres");
	 elem.style.width=0+"%";
	 lung=0;
	 ok=1;
	for(var j=1;j<=4;j++)
	{
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
				
			}
		}
	}
}
function corectTimeout11(){
	document.getElementById("c1").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(corectTimeout2,1000)
}
function corectTimeout12(){
	document.getElementById("c1").style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
	
}
function gresitTimeout11(){
	document.getElementById("c1").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(gresitTimeout12,1000)
}
function gresitTimeout12(){
	document.getElementById("c1").style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
}

function corectTimeout21(){
	document.getElementById("c2").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(corectTimeout22,1000)
}
function corectTimeout22(){
	document.getElementById("c2").style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
	
}
function gresitTimeout21(){
	document.getElementById("c2").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(gresitTimeout22,1000)
}
function gresitTimeout22(){
	document.getElementById("c2").style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
}

function corectTimeout31(){
	document.getElementById("c3").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(corectTimeout32,1000)
}
function corectTimeout32(){
	document.getElementById("c3").style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
	
}
function gresitTimeout31(){
	document.getElementById("c3").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(gresitTimeout32,1000)
}
function gresitTimeout32(){
	document.getElementById("c3").style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
}
function corectTimeout41(){
	document.getElementById("c4").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(corectTimeout42,1000)
}
function corectTimeout42(){
	document.getElementById("c4").style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
	
}
function gresitTimeout41(){
	document.getElementById("c4").style.background="#222 url(http://imgur.com/j5zuYpt.png) repeat";
		setTimeout(gresitTimeout42,1000)
}
function gresitTimeout42(){
	document.getElementById("c4").style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
}
var x0,x1,x2,x3,x4,x5,raspunsuri;



var a=[
		["Ce a fost războiul de secesiune?","un conflict politic și militar de patru ani (1861–1865) dintre Statele din Nord ale SUA și Statele din Sud ale SUA","un conflict militar între Statele Unite ale Americii şi Marea Britanie","un conflict politic și militar de patru ani (1861–1865) dintre Statele din Vest ale SUA și Statele din Est ale SUA","un conflict politic și militar de şapte ani (1841–1847) dintre Statele din Nord ale SUA și Statele din Sud ale SUA","un conflict politic și militar de patru ani (1861–1865) dintre Statele din Nord ale SUA și Statele din Sud ale SUA",0],
		["Ce este Ku-Klux-Klan-ul?","o mâncare picantă","o organizaţie rasistă extremistă","o firmă de haine","o organizaţie ce se ocupă de drepturile omului","o organizaţie rasistă extremistă",1],
		["Câte apariţii a avut Ku-Klux-Klan-ul?","4","1","2","3","3",2],
		["Ce a fost Renaşterea?","cult religios","mişcare de dans","mișcare culturală care s-a întins pe perioada secolelor XIV-XVII","mişcare culturala care a apărut la începutul secolului XX","mișcare culturală care s-a întins pe perioada secolelor XIV-XVII",3],
		["Ce este ateismul?","respingerea credinței în existența unor zeități","credinţa în mai multe zeități","o dietă strictă","respingerea credinţei în obiecte","respingerea credinței în existența unor zeități",4],
		["Ce a fost războiul rece?","perioadă de tensiuni care a apărut după sfârșitul celui de-al Doilea Război Mondial și a durat până la revoluțiile din 1989","război la temperaturi sub 0 grade","perioadă de tensiuni între Uniunea Sovietică şi Finlanda","perioadă de tensiuni care a apărut după Primul Război Mondial şi a durat 7 ani","perioadă de tensiuni care a apărut după sfârșitul celui de-al Doilea Război Mondial și a durat până la revoluțiile din 1989",5],
		["Ce este războiul atomic?","un război la scară extrem de mică","conflict militar sau strategie politică în care sunt folosite raze X","conflict militar sau o strategie politică în care sunt folosite arme nucleare","război ce a avut loc în 1981 între Micronezia şi Melanezia","conflict militar sau o strategie politică în care sunt folosite arme nucleare",6],
		["Ce este Antichitatea?","loc unde se vând obiecte vechi","a II-a epocă a istoriei","prima epocă a istoriei","perioadă istorică ce a durat 2000 de ani","a II-a epocă a istoriei",7],
		["Când a avut loc răscoala lui Spartacus?","71-73 d.Hr","37-17 î.Hr","73-71 î.Hr","aproximativ 1000 î.Hr","73-71 î.Hr",8],
		["Care era numele operaţiunii ce a inclus debarcarea în Normandia?","Operaţiunea Normandy","Operaţiunea Barbarossa","Operaţiunea Overload","Operaţiunea Marshall","Operaţiunea Overload",9],
		["Când a avut loc debarcarea în Normandia?","6 iulie 1944","2 septembrie 1945","7 decembrie 1941","6 iunie 1944","6 iunie 1944",10],
		["Cine era Michelangelo?","o sculptură în Italia","unul dintre cei mai importanţi artişti ai Renașterii Italiene","filozof roman","unul dintre cei mai importanţi sculptori spanioli","unul dintre cei mai importanţi artişti ai Renașterii Italiene",11],
		["Cine a fost George Smith Patton?","un general al armatei S.U.A.","prim-ministru al Australiei în 1941-1945","un amiral de pe distrugătorul USS Bainbridge","om de afaceri din India","un general al armatei S.U.A.",12],
		["Cum s-a terminat Războiul din Vietnam?","înfrângerea Vietnamului de Sud și unificarea țării sub conducere comunistă","înfrângerea Vietnamului de Nord și unificarea țării sub conducere democrată","armistiţiu","nu s-a terminat","înfrângerea Vietnamului de Sud și unificarea țării sub conducere comunistă",13],
		["Ce a fost Revoluţia bolşevică?","răscoală ce l-a îndepărtat pe Ivan cel Groaznic","revoluţie ce a dus la destrămarea URSS","lovitura de stat prin care bolșevicii au preluat puterea cu forța de la guvernul lui Kerenski","revoluţie în Germania de Est","lovitura de stat prin care bolșevicii au preluat puterea cu forța de la guvernul lui Kerenski",14],
		["În ce lună a avut loc Revoluţia din Octombrie?","Noiembrie","August","Octombrie","Februarie","Noiembrie",15],
		["Cine a fost Gandhi?","părintele independenței Bangladeşului și inițiatorul mișcărilor de revoltă nonviolente","părintele independenței Indiei și inițiatorul mișcărilor de revoltă nonviolente","cel mai mare exportator de sare al Indiei","revoluţionar comunist","părintele independenței Indiei și inițiatorul mișcărilor de revoltă nonviolente",16],
		["Cine a fost William Wallace?","un cavaler și nobil englez devenit unul din principalii lideri în timpul Războaielor Scoțiene de Independență","un cavaler și nobil scoțian devenit unul din principalii lideri în timpul Războaielor Scoțiene de Independență","mare scriitor și umanist englez","mercenar din Spania","un cavaler și nobil scoțian devenit unul din principalii lideri în timpul Războaielor Scoțiene de Independență",17],
		["Cum s-a terminat Primul Război Scoţian de Independenţă?","menţinerea dominaţiei engleze","obţinerea independenţei scoţiene","pauză a conflictului","cucerirea Angliei de către scoţieni","obţinerea independenţei scoţiene",18],
		["Când a început Al Doilea Război Mondial?","2 Septembrie 1945","15 Decembrie 1940","1 Septembrie 1939","11 Noiembrei 1918","1 Septembrie 1939",19],
		["Când s-a terminat Al Doilea Război Mondial?","2 Septembrie 1945","15 Decembrie 1944","1 Septembrie 1939","11 Noiembrei 1918","2 Septembrie 1945",20],
		["Ce a fost Holocaustul?","un termen folosit pentru prima hologramă de natură caustică","termen utilizat pentru a descrie uciderea a aproximativ șase milioane de evrei în Al Doilea Război Mondial","termen utilizat doar pentru uciderea negrilor în Al Doilea Război Mondial","persecuţia evreilor în Primul Război Mondial","termen utilizat pentru a descrie uciderea a aproximativ șase milioane de evrei în Al Doilea Război Mondial",21],
		["Cum se mai numea Holocaustul în Germania Nazistă?","'expulzarea evreilor'","'prima hologramă de natură caustică'","'soluția finală a problemei evreiești'","'cum să îi omorâm pe evrei'","'soluția finală a problemei evreiești'",22],
		["Cine a fost Oskar Schindler?","unul dintre cei mai buni piloţi ai Luftwaffe","politician german ce a fost asasinat pentru opiniile sale pro-evreieşti","politician ce a dat secrete de stat URSS-ului în timpul celui De-al Doilea Război Mondial","industriaș german, spion și membru al partidului nazist care a salvat de la Holocaust circa 1200 de evrei","industriaș german, spion și membru al partidului nazist care a salvat de la Holocaust circa 1200 de evrei",23],
		["Cine a fost Napoleon Bonaparte?","un porc","lider politic și militar al Franței","activist al drepturilor omului","un inventator","lider politic și militar al Franței",24],
		["Cine a fost Ioana D'Arc?","una din figurile emblematice ale Franței și sfântă a Bisericii Catolice","o vrăjitoare ce fura copii","una din figurile emblematice ale Bisericii Protestante","o femeie ce s-a opus Reformei Anglicane în 1531","una din figurile emblematice ale Franței și sfântă a Bisericii Catolice",25],
		["Cât a durat Războiul de 100 de ani?","78 ani","100 ani","10 ani","116 ani","116 ani",26],
		["Între ce ţări a avut loc Războiul de 100 de ani?","Franţa şi Spania","Anglia şi Franţa","Franţa şi Italia","Spania şi Italia","Anglia şi Franţa",27],
		["Care a fost pretextul Primului Război Mondial?","asasinarea arhiducelui Franz Ferdinand","agresiunea poloneză","potolirea unui război civil","obtinerea independentei cehe","asasinarea arhiducelui Franz Ferdinand",28],
		["Când a început Primul Război Mondial?","11 noiembrie 1918","1 septembrie 1914","14 iunie 1914","28 iulie 1914","28 iulie 1914",29],
		["Care erau principalele membre ale Antantei?","Germania, Austro-Ungaria","Franța, Imperiul Britanic, Imperiul Țarist","Suedia, Norvegia, Finlanda","Serbia, România, Bulgaria","Franța, Imperiul Britanic, Imperiul Țarist",30],
		["Când s-a terminat Primul Război Mondial?","11 noiembrie 1918","1 septembrie 1918","14 iunie 1914","28 iulie 1914","11 noiembrie 1918",31],
		["Cum era denumită calea ferată construită de prizonierii de război ai Japoniei?","calea ferată a Imperiului Japonez","calea ferată a comunismului","calea ferată a morţii","calea ferată Express","calea ferată a morţii",32],
		["Care erau principalele membre ale Puterilor Centrale?","Germania, Austro-Ungaria","Franța, Imperiul Britanic, Imperiul Țarist","Suedia, Norvegia, Finlanda","Serbia, România, Bulgaria","Germania, Austro-Ungaria",33],
		["Ce a fost Revolta arabă?","rebeliune inițiată de arabi cu scopul câștigării independenței de sub jugul Imperiului Otoman","rebeliune inițiată de otomani cu scopul câștigării independenței de sub jugul arabior","război civil între diferite grupuri religioase","atac terorist împotriva guvernului arab","rebeliune inițiată de arabi cu scopul câștigării independenței de sub jugul Imperiului Otoman",34],
		["De cine a fost constituită Biserica Anglicană?","Henry al III-lea","William al II-lea","Elizabeta I","Henry al VIII-lea","Henry al VIII-lea",35],
		["De ce a fost ucis Thomas More?","nu a vrut să-l recunoască pe Henry al VIII-lea șef al Bisericii","a trădat monarhia şi i-a ajutat pe francezi","practica magie neagră","a încercat să facă o lovitură de stat","nu a vrut să-l recunoască pe Henry al VIII-lea șef al Bisericii",36],
		["Care a fost rezultatul Războiului Algerian de Independenţă?","Franţa rămâne dominantă","armistiţiu","independenţa Algeriei","anexarea Algeriei","independenţa Algeriei",37],
		["Care a fost cea mai lungă campanie militară din Al Doilea Război Mondial?","Bătălia de la Kursk","Bătălia de la Stalingrad","Bătălia Atlanticului","Bătălia de la Leningrad","Bătălia Atlanticului",38],
		["Ce este un lagăr de concentrare?","loc de odihnă","centru de antrenament militar","centru de detenție destinat oponenților politici, grupurilor sociale sau etnice","groapă de gunoi","centru de detenție destinat oponenților politici, grupurilor sociale sau etnice",39],
		["Ce a fost Revoluţia Rusă de la 1905?","prima revoluţie burghezo-democratică din epoca imperialismului","revoluţie împotriva bolşevicilor","ultima revoluţie împotriva monarhiei","revoluţie eşuată pentru obţinerea unui stat capitalist","prima revoluţie burghezo-democratică din epoca imperialismului",40],
		["Cine a fost Ivan cel Groaznic?","cel mai incompetent lider rus","dictator rus din 1743","primul ţar rus din 1547","ultimul rege rus","primul ţar rus din 1547",41],
		["Cine a fost Iosif Stalin?","cel mai sângeros prim ministru al Rusiei","om politic sovietic, fost revoluționar bolșevic devenit după Revoluția din Octombrie conducător","ministru de externe asasinat în Georgia","conducătorul menşevicilor","om politic sovietic, fost revoluționar bolșevic devenit după Revoluția din Octombrie conducător",42],
		["Ce a fost Operaţiunea Barbarossa?","numele de cod secret pentru invadarea Franţei de către nazişti","numele de cod secret pentru invadarea Finlandei de către URSS","numele de cod secret folosit de conducerea Germaniei naziste pentru operația militară de invadare a Uniunii Sovietice","metodă pentru modificarea gloanţelor","numele de cod secret folosit de conducerea Germaniei naziste pentru operația militară de invadare a Uniunii Sovietice",43],
		["Ce a fost Armata Albă?","armata Finlandei, adaptată pentru camuflaj","militanţi pentru independenţa Indiei","Ku-Klux-Klan-ul ","unele forțe din Rusia care se opuneau bolșevicilor","unele forțe din Rusia care se opuneau bolșevicilor",44],
		["Cine a fost Andrei Rubliov?","unul dintre cei 12 apostoli","călugăr și pictor de icoane rus","menşevic ce a fost asasinat din cauza credinţei sale","făcător de minuni","călugăr și pictor de icoane rus",45],
		["Între cine s-a purtat Războiul civil rus?","Roşii şi ţărănime","Negrii şi Verzii","Albii şi Rosii","ţărănime şi Negrii","Albii şi Rosii",46],
		["Ce este considerată Bătălia de la Stalingrad?","cea mai lungă bătălie din istorie","cea mai scurtă bătălie din istorie","cea mai sângeroasă bătălie din istorie","cea mai distructivă bătălie din istorie","cea mai sângeroasă bătălie din istorie",47],
		["Ce fel de tratat a fost Pactul Ribbentrop-Molotov?","economic","de marfă","de pace","de neagresiune","de neagresiune",48],
		["Între cine a fost Pactul Ribbentrop-Molotov?","URSS şi China","Marea Britanie şi SUA","Germania Nazistă şi Italia","URSS şi Germania Nazistă","URSS şi Germania Nazistă",49],
		["Când a avut loc Războiul de Independenţă al României?","1914-1918","1877-1878","1939-1945","1895-1899","1877-1878",50],
		["Cum mai este numit Războiul de Independenţă al României?","Războiul ruso-român","Războiul româno-ungar","Războiul ruso-turc","Războiul româno-bulgar","Războiul ruso-turc",51],
		["Cine a fost Alexandru Ioan Cuza?","primul rege al României","primul domnitor al Principatelor Unite și al statului național România","prim ministru al României","inventatorul motorului cu reacţie","primul domnitor al Principatelor Unite și al statului național România",52],
		["Când a avut Unirea Principatelor Române?","1 decembrie 1858","24 ianuarie 1859","5 februarie 1989","4 august 1877","24 ianuarie 1859",53],
		["Care a fost cea mai lungă domnie al vreunui conducător al statelor române?","Mircea cel Bătrân","Decebal","Carol I","Nicolae Ceauşescu","Carol I",54],
		["Ce a fost Revoluţia de la 1821?","unul dintre evenimentele care au marcat începutul procesului de renaştere naţională a României","revoluţia ce a dus la căderea ţarului rus","revoluţie ce a marcat căderea regimului comunist român","revoluţie ce a dus la obţinerea independenţei arabe","unul dintre evenimentele care au marcat începutul procesului de renaştere naţională a României",55],
		["Cine a fost Tudor Vladimirescu?","domnitor al României","prim ministru","conducătorul revoluţiei de la 1848","conducătorul revoluţiei de la 1821","conducătorul revoluţiei de la 1821",56],
		["Cine a fost Cornelius Fuscus?","politican român remarcat după Revoluţia de la 1848","împărat roman după împărţirea imperiului","general roman ce a luptat în expediţii sub Împăraţii Dinastiei Flavius","conducătorul revoluţiei de la 1821","general roman ce a luptat în expediţii sub Împăraţii Dinastiei Flavius",57],
		["Cine a fost Decebal?","regele Daciei între 82-44 î.Hr","regele Daciei între 106-85 î.Hr","regele Daciei între 85-106 d.Hr","fondatorul firmei Dacia","regele Daciei între 85-106 d.Hr",58],
		["Când a avut loc Primul Război Daco-Roman?","102-105 d.Hr","101-102 d.Hr","102-101 î.Hr","105-106 d.Hr","101-102 d.Hr",59],
		["Când a avut loc Al Doilea Război Daco-Roman?","102-105 d.Hr","101-102 d.Hr","106-105 î.Hr","105-106 d.Hr","105-106 d.Hr",60],
		["Cine a fost Mihai Viteazul?","cel mai longeviv voievod","domnul Moldovei începând cu anul 1593","domnul Transilvaniei începând cu anul 1593","domnul Ţării Româneşti începând cu anul 1593","domnul Ţării Româneşti începând cu anul 1593",61],
		["Când a avut loc Unirea Ţărilor Române realizată de Mihai Viteazul?","27 mai 1600","24 ianuarie 1848","1 decembrie 1600","5 ianuarie 1600","27 mai 1600",62],
		["Câte domnii a avut Mircea cel Bătrân?","1","3","4","2","2",63],
		["Sub domnia cui a atins Ţara Românească întinderea maximă?","Mihai Vizeazul","Mircea cel Bătrân","Ştefan cel Mare","Vlad Ţepeş","Mircea cel Bătrân",64],
		["Cine a fost Ion C. Brătianu?","om politic român","regizor de film","comunist","domnitor al Moldovei","om politic român",65],
		["Cine a fost Mihail Kogălniceanu?","regizor de film","om politic român","domnitor al Moldovei","comunist","om politic român",66]
		
		
		
		
		
	];
	var vit=2;
function viteza(){
	if(vit==3)
	{
		vit=1;
		document.getElementById("b3").src='http://imgur.com/gwtPyyc.png';
		document.getElementById("b2").src='http://imgur.com/gwtPyyc.png';
		document.getElementById("b3s").src='http://imgur.com/gwtPyyc.png';
		document.getElementById("b2s").src='http://imgur.com/gwtPyyc.png';
		speed=0.08;
	}else if(vit==2){
		vit=vit+1;
		document.getElementById("b3").src='http://imgur.com/ZuYcl7Q.png';
		document.getElementById("b3s").src='http://imgur.com/ZuYcl7Q.png';
		speed=0.2;
	}else if(vit==1){
		vit=vit+1;
		document.getElementById("b2").src='http://imgur.com/ZuYcl7Q.png';
		document.getElementById("b2s").src='http://imgur.com/ZuYcl7Q.png';
		speed=0.125;
	}
	
	
	
	
}
var speed=0.125;
function test(){
	
	document.getElementById("c1").style.pointerEvents = "auto";
	document.getElementById("c2").style.pointerEvents = "auto";
	document.getElementById("c3").style.pointerEvents = "auto";
	document.getElementById("c4").style.pointerEvents = "auto";
	
	
	
	raspunsuri=0;
	var t,i=0;
	function shuffle(a) {
    var k, aux, l;
    for (l = a.length; l; l--) {
        k = Math.floor(Math.random() * l);
        aux = a[l - 1];
        a[l - 1] = a[k];
        a[k] = aux;
    }
}
	shuffle(a);
	raspunsuri=0;
	
	verificaNrIntrebari(i);
	
	function verificaNrIntrebari(i)
	{
	document.getElementById("puncte").innerHTML="PUNCTE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+raspunsuri+"/10";
	document.getElementById("intrebare").innerHTML="intrebarea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(i+1);
	
		if(i==10)
				{	document.getElementById("c0").innerHTML="?";
					document.getElementById("c1").innerHTML="?";
					document.getElementById("c2").innerHTML="?";
					document.getElementById("c3").innerHTML="?";
					document.getElementById("c4").innerHTML="?";
					document.getElementById("STARTBUTTON").innerHTML="INCEPE TESTUL";
					document.getElementById("intrebare").innerHTML="intrebare";
					
					document.getElementById("c1").style.pointerEvents = "none";
					document.getElementById("c2").style.pointerEvents = "none";
					document.getElementById("c3").style.pointerEvents = "none";
					document.getElementById("c4").style.pointerEvents = "none";
					
				}
		if(i<=9)
		{	
			clock.play();
			
			
			ok=0;
			x0=a[i][0];
			x1=a[i][1];
			x2=a[i][2];
			x3=a[i][3];
			x4=a[i][4];
			x5=a[i][5];
			for(var j=1;j<=4;j++)
				{	
					if(a[i][j]==x5)
					{	
						b=j;
					}
				}
			document.getElementById("c0").innerHTML=x0;
			document.getElementById("c1").innerHTML=x1;
			document.getElementById("c2").innerHTML=x2;
			document.getElementById("c3").innerHTML=x3;
			document.getElementById("c4").innerHTML=x4;
			$(".resizeText0").resizeText0();
			$(".resizeText1").resizeText1();
			$(".resizeText2").resizeText2();
			$(".resizeText3").resizeText3();
			$(".resizeText4").resizeText4();
			bara();
			wait();
		}
	}
	function wait(){
		if (ok==0){
	setTimeout(wait, 100);
		} else 
		{	clock.pause();
			clock.currentTime = 0;
			i=i+1;
			setTimeout(function(){verificaNrIntrebari(i);
			document.getElementById("c1").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c2").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c3").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";
			document.getElementById("c4").style.background="radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)";},3500);
			
		}
	}
	
	

}
function apasat1(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c1");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x1===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
		setTimeout(corectTimeout11,250);
		setTimeout(corectTimeout12,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
		setTimeout(gresitTimeout11,250);
		setTimeout(gresitTimeout12,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
				
				
			}
		}
	}
		
}

function apasat2(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c2");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x2===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
		setTimeout(corectTimeout21,250);
		setTimeout(corectTimeout22,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
		setTimeout(gresitTimeout21,250);
		setTimeout(gresitTimeout22,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
				
				
			}
		}
	}
		
}

function apasat3(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c3");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x3===x5)
	{	corect.play();
		corect.volume=0.2;
		cont.style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
		setTimeout(corectTimeout31,250);
		setTimeout(corectTimeout32,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
		setTimeout(gresitTimeout31,250);
		setTimeout(gresitTimeout32,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
				
				
			}
		}
	}
		
}

function apasat4(){
	var bara=document.getElementById("progres");
	var cont=document.getElementById("c4");
	stopbara();
	ok=1;
	clock.pause();
	clock.currentTime = 0;
	if(x4===x5)
	{	corect.volume=0.2;
		corect.play();
		cont.style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
		setTimeout(corectTimeout41,250);
		setTimeout(corectTimeout42,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(http://imgur.com/D7csTdO.png) repeat";
		setTimeout(gresitTimeout41,250);
		setTimeout(gresitTimeout42,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(http://imgur.com/47bh9O0.png) repeat";
				
				
			}
		}
	}
		
}



