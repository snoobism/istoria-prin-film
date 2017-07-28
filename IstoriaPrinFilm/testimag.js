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
		f[i].style.width=0.7*x0+"px";
		f[i].style.height=0.06*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText1");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.18*x0+"px";
		f[i].style.height=0.1*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText2");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.18*x0+"px";
		f[i].style.height=0.1*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText3");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.18*x0+"px";
		f[i].style.height=0.1*y0+"px";
	}
	var f=document.getElementsByClassName("resizeText4");
	for(var i=0;i<=f.length-1;i++)
	{
		f[i].style.width=0.18*x0+"px";
		f[i].style.height=0.1*y0+"px";
	}
	$(".resizeText0").resizeText0();
	$(".resizeText1").resizeText1();
	$(".resizeText2").resizeText2();
	$(".resizeText3").resizeText3();
	$(".resizeText4").resizeText4();
	document.getElementById('contmare').style.width=0.9*x0+"px";
	document.getElementById('contmare').style.fontSize=0.05*y0+'px';
	document.getElementById('contmare').style.marginTop=0.1*y0+"px";
	document.getElementById("cont1").style.width=0.9*x0+"px";
	document.getElementById("cont1").style.height=0.6*y0+"px";
	document.getElementById("imaginetest").style.marginTop=0.14*y0+"px";
	document.getElementById("imaginetest").style.width=0.45*x0+"px";
	document.getElementById("imaginetest").style.height=0.35*y0+"px";
	document.getElementById("c0").style.marginTop=0.02*y0+"px"
	document.getElementById("bara").style.marginTop=0.06*y0+"px";
	document.getElementById("cont2").style.marginTop=0.08*y0+"px";
	document.getElementById("cont3").style.marginTop=0.09*y0+"px";
	document.getElementById("c1").style.left=0.01*x0+"px";
	document.getElementById("c2").style.right=0.01*x0+"px";
	document.getElementById("c3").style.left=0.01*x0+"px";
	document.getElementById("c4").style.right=0.01*x0+"px";
	document.getElementById("cont2").style.height=0.1*y0+"px";
	document.getElementById("cont3").style.height=0.1*y0+"px";
	document.getElementById("STARTBUTTON").style.width=0.15*x0+"px";
	document.getElementById("STARTBUTTON").style.height=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.lineHeight=0.075*y0+"px";
	document.getElementById("STARTBUTTON").style.marginTop=0.0*y0+"px";
	document.getElementById("filmrolls").style.marginTop=0.59*y0+"px";
	document.getElementById("filmrolls").style.height=0.25*y0+"px";
	document.getElementById("filmrolls").style.width=0.6*x0+"px";
	descrieretitlu=document.createElement("div");
	descrieretitlu.id='descrieretitlu';
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
	descrieretitlu.style.opacity=0;
	descrieretitlu.style.background="linear-gradient(to bottom, #470001, #190a05)";
	descrieretitlu.style.paddingTop=0.01*y0+"px";
	descrieretitlu.style.textShadow="0px 0px 5px grey";
	descrieretitlu.style.boxShadow="0px 0px 15px black";
	descrieretitlu.style.padding="20px 10px 10px 10px";
	document.body.appendChild(descrieretitlu);
	
	descriere=document.createElement("div");
	descriere.id='descriere';
	descriere.style.opacity=0;
	descriere.style.display="block";
	descriere.style.position="relative";
	descriere.style.marginLeft="auto";
	descriere.style.marginRight="auto";
	descriere.style.textAlign="center";
	descriere.style.width=0.5*x0+"px";
	descriere.innerHTML="<p>● Acest test este creat în scopul verificării cunoştinţelor acumulate de-a lungul navigării site-ului prin utilizarea imaginilor din galeria istorică a fiecărui film.</p><p>● Testul cuprinde aproximativ 80 de întrebări, dintre care 10 sunt selectate aleatoriu de fiecare dată când începeţi testul!</p><p>● Viteza testului poate fi schimbată fie din acest buton, fie de cel din colţul sus al aplicaţiei. Cu cât mai multe butoane roşii, cu atât mai dificil</p><div id='viteza' onclick='viteza()' style='background:url(imagini/paper.png);padding:1%;border-radius:25px;box-shadow:0 0 15px black;text-shadow:0 0 10px #65000B;'><span>VITEZA </span><img class='buton' id='b1s' src='imagini/buttonon.png'/><img class='buton' id='b2s' src='imagini/buttonon.png'/><img class='buton' id='b3s' src='imagini/buttonoff.png'/></div>";
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
	
	document.getElementById('puncte').style.width=0.9*0.3*x0+"px";
	document.getElementById('intrebare').style.width=0.9*0.3*x0+"px";
	document.getElementById('viteza').style.width=0.9*0.3*x0+"px";
	document.getElementById('puncte').style.marginLeft=0.9*0.03*x0+"px";
	document.getElementById('intrebare').style.marginLeft=0.9*0.03*x0+"px";
	document.getElementById('viteza').style.marginLeft=0.9*0.03*x0+"px"
	
	
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
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
			}
		}
	}
}
function corectTimeout11(){
	document.getElementById("c1").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout2,1000)
}
function corectTimeout12(){
	document.getElementById("c1").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout11(){
	document.getElementById("c1").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout12,1000)
}
function gresitTimeout12(){
	document.getElementById("c1").style.background="#222 url(imagini/stripeincorect.png) repeat";
}

function corectTimeout21(){
	document.getElementById("c2").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout22,1000)
}
function corectTimeout22(){
	document.getElementById("c2").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout21(){
	document.getElementById("c2").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout22,1000)
}
function gresitTimeout22(){
	document.getElementById("c2").style.background="#222 url(imagini/stripeincorect.png) repeat";
}

function corectTimeout31(){
	document.getElementById("c3").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout32,1000)
}
function corectTimeout32(){
	document.getElementById("c3").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout31(){
	document.getElementById("c3").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout32,1000)
}
function gresitTimeout32(){
	document.getElementById("c3").style.background="#222 url(imagini/stripeincorect.png) repeat";
}
function corectTimeout41(){
	document.getElementById("c4").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(corectTimeout42,1000)
}
function corectTimeout42(){
	document.getElementById("c4").style.background="#222 url(imagini/stripecorect.png) repeat";
	
}
function gresitTimeout41(){
	document.getElementById("c4").style.background="#222 url(imagini/stripe2.png) repeat";
		setTimeout(gresitTimeout42,1000)
}
function gresitTimeout42(){
	document.getElementById("c4").style.background="#222 url(imagini/stripeincorect.png) repeat";
}
var x0,x1,x2,x3,x4,x5,x6,raspunsuri;



var a=[
		["Cine este această persoană?","Oskar Schindler","Ţarul Nicolae al II-lea","Alexandru Ioan Cuza","Arhiducele Franz Ferdinand","Ţarul Nicolae al II-lea","imaginitest/admiralist1.jpg"],
		["Uniformele cărei armate din Revoluţia Rusă sunt acestea? ","Armata roşie","Armata albă","Armata neagră","Armata albastră","Armata roşie","imaginitest/admiralist3.jpg"],
		["Uniformele cărei armate din Revoluţia Rusă sunt acestea? ","Armata roşie","Armata albă","Armata neagră","Armata albastră","Armata albă","imaginitest/admiralist2.jpg"],
		["Cine este această persoană?","Sfântul Ioan","Andrei Rubleov","Alexandr Nevsky","Ivan cel Groaznic","Alexandr Nevsky","imaginitest/alexandrist1.jpg"],
		["Din ce ordin fac parte aceşti cavaleri?","Ordinul Cavalerilor Soarelui","Ordinul Cavalerilor mesei rotunde","Ordinul Cavalerilor Mării Negre","Ordinul Cavalerilor Teutonici","Ordinul Cavalerilor Teutonici","imaginitest/alexandrist2.jpg"],
		["Ce bătălie este aceasta?","Marea Bătălie din Siberia","Bătălia de la Rovine","Cucerirea Kazanului","Bătălia de pe gheaţă","Bătălia de pe gheaţă","imaginitest/alexandrist3.jpg"],
		["Unde se petrece mişcarea naţionalistă din imagine?","India","Algeria","SUA","Egipt","Algeria","imaginitest/algeriaist1.jpg"],
		["Cine este această persoană?","Mohamed I","Sultanul Arabiei Saudite","T.E.Lawrence","Şeicul Alabi Bababi","T.E.Lawrence","imaginitest/arabiaist1.jpg"],
		["În timpul cărei revolte se petrece această batălie?","Revolta egipteană","Revolta arabă","Revolta otomană","Revolta algeriană","Revolta arabă","imaginitest/arabiaist3.jpg"],
		["Cine este această persoană?","Ulysses S. Grant","Abraham Lincoln","Robert E. Lee","Richard Nixon","Robert E. Lee","imaginitest/aripiist1.jpg"],
		["Cine este această persoană?","Ulysses S. Grant","Abraham Lincoln","Robert E. Lee","Richard Nixon","Ulysses S. Grant","imaginitest/aripiist2.jpg"],
		["De cine era purtată această uniformă în timpul Războiului de secesiune?","Armata unionistă","Armata confederată","Armata britanică","Armata canadiană","Armata confederată","imaginitest/birthist2.jpg"],
		["Cum se numea acest stadion de curse de care?","Circus Maximus","Rapida Colosus","Stadionum","Cursus Fastus","Circus Maximus","imaginitest/benhurist3.jpg"],
		["Ce bătălie este aceasta?","Bătălia de la Gettysburg","Bătălia de la Waterloo","Bătălia de la Shiloh","Bătălia de la Vicksburg","Bătălia de la Gettysburg","imaginitest/birthist3.jpg"],
		["Cum se numeşte grupul acesta?","Fantomele roşii","Dreapta alternativă","Ku-Klux-Klan","Armata albă","Ku-Klux-Klan","imaginitest/birthist4.jpg"],
		["Cine este această persoană?","Henry al VIII-lea","Andrei Rubleov","William Wallace","Alexandr Nevsky","William Wallace","imaginitest/braveheartist1.jpg"],
		["Cine este această persoană?","Confucius","Burebista","Traian","Decebal","Decebal","imaginitest/columnaist1.jpg"],
		["Cine este această persoană?","Prinţul William","Burebista","Traian","Alexandru cel Mare","Traian","imaginitest/columnaist2.jpg"],
		["Cum se numeşte aceast monument?","Coloana Infinitului","Turnul din Alexandria","Coloana lui Macedon","Columna lui Traian","Columna lui Traian","imaginitest/columnaist3.jpg"],
		["Ce eveniment este ilustrat pe această porţiune de pe Columna lui Traian?","Moartea lui Domiliţian","Capturarea lui Spartacus","Sinuciderea lui Decebal","Moartea lui Cornelius Fuscus","Sinuciderea lui Decebal","imaginitest/columnaist4.jpg"],
		["Cum se numeşte această navă devenită celebra în timpul Revoluţiei Ruse?","Potemkin","Octombrie roşu","USS Ivanoviciov","Anastasia","Potemkin","imaginitest/crucisatorist1.jpg"],
		["Al cui este acest stindar de lupta?","Al goţilor","Al dacilor","Al celţilor","Al bizantinilor","Al dacilor","imaginitest/daciiist1.jpg"],
		["Cine folosea aceste arme?","Romanii","Celţii","Slavii","Dacii","Dacii","imaginitest/daciiist3.jpg"],
		["Cine este această persoană?","Împăratul Traian","Decebal","Împăratul Domiţian","Pitagora","Împăratul Domiţian","imaginitest/daciiist4.jpg"],
		["De unde provine acest tip de submarin?","Germania","America","URSS","Romania","Germania","imaginitest/dasbootist1.jpg"],
		["Unde se găseşte această bază de submarine abandonată?","Germania","URSS","China","Marea Britanie","Germania","imaginitest/dasbootist2.jpg"],
		["Înaintea cărui eveniment este manifestarea ilustrată în imagine?","Cruciada a IV-a","Duminica însângerată","Revoluţia de la 1821","Holocaust","Duminica însângerată","imaginitest/donist1.jpg"],
		["Din ce grup erau aceste persoane?","Familia Rothschild","Poliţia rusă secretă","Luftwaffe","Marina română","Poliţia rusă secretă","imaginitest/donist3.jpg"],
		["Cine este această persoană?","Oskar Schindler","T.E.Lawrence","Franz Ferdinand","Mahatma Gandhi","Mahatma Gandhi","imaginitest/gandhiist1.jpg"],
		["În timpul cărui marş se află Gandhi în această imagine?","Marşul Sării","Marşul Indiei","Marşul Păcii","Marşul Peninsulei","Marşul Sării","imaginitest/gandhiist3.jpg"],
		["Ce redută este cucerită în această imagine?","Griviţa","Smârdan","Vidin","Rovine","Griviţa","imaginitest/indepist1.jpg"],
		["Cum se numeşte atacul din această imagine?","Atacul de la Plevna","Atacul de la Smârdan","Atacul de la Vidin","Atacul de la Călugăreni","Atacul de la Smârdan","imaginitest/indepist2.jpg"],
		["După ce război atinge România această întindere teritorială?","Primul Război Mondial","Al Doilea Război Mondial","Războiul ruso-turc","Războiul de secesiune","Războiul ruso-turc","imaginitest/indepist3.jpg"],
		["Cine este această persoană?","Alexandru Ioan Cuza","Carol I","Ţarul Nicolae al II-lea","Franz Ferdinand","Carol I","imaginitest/indepist4.jpg"],
		["Ce oraş din Antichitate este acesta?","Alexandria","Sarmizegetusa","Babilon","Atena","Babilon","imaginitest/intoleranceist1.jpg"],
		["Ale cărui oraş antic sunt aceste ruine?","Alexandria","Sarmizegetusa","Babilon","Atena","Babilon","imaginitest/intoleranceist2.jpg"],
		["Ce război/războaie sunt ilustrate în această imagine?","Războaiele Daco-Romane","Războiul de 100 de ani","Războaiele religioase franceze","Războiul ruso-turc","Războaiele religioase franceze","imaginitest/intoleranceist3.jpg"],
		["Cine este această persoană?","Alexandru cel Mare","Împăratul Justinian","Cyrus cel Mare","Genghis Khan","Cyrus cel Mare","imaginitest/intoleranceist4.jpg"],
		["Cine este această persoană?","Ţarul Nicolae al II-lea","Ivan cel Groaznic","Iosif Stalin","Genghis Khan","Ivan cel Groaznic","imaginitest/ivanist1.jpg"],
		["Ce este ilustrat în această imagine?","moartea fiului lui Ivan cel Groaznic","asasinarea lui Franz Ferdinand","asasinarea lui John F. Kennedy","moartea lui Nicolae al II-lea","moartea fiului lui Ivan cel Groaznic","imaginitest/ivanist2.jpg"],
		["Ce este ilustrat în această imagine?","Revolta arabă","Revolta otomană","Cucerirea Kazanului","Asaltul de la Plevna","Cucerirea Kazanului","imaginitest/ivanist3.jpg"],
		["În timpul cui a fost construită catedrala din imagine?","Ecaterina a II-a","Ivan cel Groaznic","Nicolae al II-lea","Vladimir Lenin","Ivan cel Groaznic","imaginitest/ivanist4.jpg"],
		["Cine este această persoană?","Maria Teresa","Ioana D'Arc","Marine Le Pen","Regina Elizabeta","Ioana D'Arc","imaginitest/joanist1.jpg"],
		["Cine este această persoană?","Maria Teresa","Ioana D'Arc","Marine Le Pen","Regina Elizabeta","Ioana D'Arc","imaginitest/joanist4.jpg"],
		["Cum era numită calea ferată din imagine?","Calea ferată a Împăratului","Calea ferată naţională a Japoniei","Calea Orientului","Calea ferată a morţii","Calea ferată a morţii","imaginitest/kwaiist1.jpg"],
		["În memoria cui este făcut acest monument?","Moartea a 236 de oameni şi 51 de răniţi în urma prăbuşirii metroului din Japonia","Deraiarea unui tren de mare viteză cu zeci de morţi","Prizonierilor de război ucişi în timpul construcţiei căii ferate a morţii","Prăbuşirea căii ferate Kayuchio într-un râu","Prizonierilor de război ucişi în timpul construcţiei căii ferate a morţii","imaginitest/kwaiist4.jpg"],
		["Cum se numeşte locul din imagine unde au debarcat aliaţii în timpul celui de-al Doilea Război Mondial?","Pas de Calais","Normandia","Stalingrad","Hiroshima","Normandia","imaginitest/longestist1.jpg"],
		["Cine este această persoană?","Leonardo Da Vinci","Socrates","Michelangelo","Vincent Van Gogh","Michelangelo","imaginitest/michelangeloist1.jpg"],
		["Ce sculptură este aceasta?","Gânditorul","Hermes","David","Pieta","David","imaginitest/michelangeloist2.jpg"],
		["Ce sculptură este aceasta?","Gânditorul","Hermes","David","Pieta","Pieta","imaginitest/michelangeloist3.jpg"],
		["Unde se află aceste picturi?","Muzeul Luvre","Capela Sixtină","Catedrala Mântuirii Neamului","Palatul Buckingham","Capela Sixtină","imaginitest/michelangeloist4.jpg"],
		["Cine este această persoană?","Mircea cel Bătrân","Mihai Viteazul","Ştefan cel Mare","Alexandru Ioan Cuza","Mihai Viteazul","imaginitest/mihaiist1.jpg"],
		["Sub domnia cui a avut Ţara Românească acest teritoriu?","Mircea cel Bătrân","Decebal","Mihai Viteazul","Alexandru Ioan Cuza","Mircea cel Bătrân","imaginitest/mirceaist4.jpg"],
		["Ce bătălie este ilustrată în imagine?","Bătălia de la Waterloo","Bătălia de la Vaslui","Asediul Griviţei","Bătălia de la Călugareni","Bătălia de la Călugareni","imaginitest/mihaiist2.jpg"],
		["Sub domnia cui au avut ţările române acest teritoriu?","Mircea cel Bătrân","Decebal","Mihai Viteazul","Alexandru Ioan Cuza","Mihai Viteazul","imaginitest/mihaiist4.jpg"],
		["Cine este această persoană?","Mircea cel Bătrân","Decebal","Mihai Viteazul","Ştefan cel Mare","Mircea cel Bătrân","imaginitest/mirceaist1.jpg"],
		["Ce bătălie este ilustrată în imagine?","Bătălia de la Aqaba","Asaltul Plevnei","Bătălia de la Rovine","Cucerirea Kazanului","Bătălia de la Rovine","imaginitest/mirceaist2.jpg"],
		["Cine a fost această persoană?","Mohamed I","Şeicul Alabi Bababi","Mahatma Gandhi","Baiazid al III-lea","Mohamed I","imaginitest/mirceaist3.jpg"],
		["Cine a fost această persoană?","Napoleon Bonaparte","Alexandru Ioan Cuza","Nicolae al II-lea","Filip al II-lea","Napoleon Bonaparte","imaginitest/napoleonist1.jpg"],
		["Cine a fost această persoană?","Napoleon Bonaparte","Alexandru Ioan Cuza","Nicolae al II-lea","Filip al II-lea","Napoleon Bonaparte","imaginitest/napoleonist2.jpg"],
		["Ce bătălie este ilustrată în imagine?","Bătălia de la Waterloo","Bătălia de la Kursk","Bătălia de la Călugăreni","Bătălia de la Bannockburn","Bătălia de la Waterloo","imaginitest/napoleonist3.jpg"],
		["Cine este această persoană?","Erwin Rommel","Donald Trump","George Smith Patton","Dwight Eisenhower","George Smith Patton","imaginitest/pattonist1.jpg"],
		["De unde provine acest model de tanc?","America","Japonia","Rusia","Germania","America","imaginitest/pattonist2.jpg"],
		["De unde provine acest model de tanc?","America","Japonia","Rusia","Germania","Germania","imaginitest/pattonist3.jpg"],
		["Unde a fost făcută această poză?","Mongolia","Filipine","Vietnam","Rusia","Vietnam","imaginitest/platoonist3.jpg"],
		["Cine a fost această persoană?","Vladimir Lenin","Nicolae Ceauşescu","Iosif Stalin","Fidel Castro","Vladimir Lenin","imaginitest/redsist1.jpg"],
		["Cum se numeşte pictura din imagine?","Cina cea de taină","Sfânta Treime","Mântuitorul în glorie","Botezul lui Iisus","Sfânta Treime","imaginitest/rublevist1.jpg"],
		["Cum se numeşte pictura din imagine?","Cina cea de taină","Sfânta Treime","Mântuitorul în glorie","Botezul lui Iisus","Mântuitorul în glorie","imaginitest/rublevist2.jpg"],
		["Cum se numeşte pictura din imagine?","Cina cea de taină","Sfânta Treime","Mântuitorul în glorie","Botezul lui Iisus","Botezul lui Iisus","imaginitest/rublevist3.jpg"],
		["Cine a fost această persoană?","Henry al VIII-lea","Thomas More","William Wallace","Filip al II-lea al Spaniei","Henry al VIII-lea","imaginitest/seasonsist1.jpg"],
		["Cine a fost această persoană?","Henry al VIII-lea","Thomas More","William Wallace","Filip al II-lea al Spaniei","Thomas More","imaginitest/seasonsist2.jpg"],
		["Cine este această persoană?","David","Spartacus","Socrates","Platon","Spartacus","imaginitest/spartacusist3.jpg"],
		["Ce se află în această imagine","Prima bombă atomică construită","Prima bombă atomică folosită într-un conflict","Prima mină subacvatică","Primul minisubmarin","Prima bombă atomică construită","imaginitest/tarmist1.jpg"],
		["Ce se află în această imagine","Prima bombă atomică construită","Prima bombă atomică folosită într-un conflict","Prima mină subacvatică","Primul minisubmarin","Prima bombă atomică folosită într-un conflict","imaginitest/tarmist2.jpg"],
		["Cine este această persoană?","Mircea cel Bătrân","Tudor Vladimirescu","Ion Brătianu","Ştefan cel Mare","Tudor Vladimirescu","imaginitest/tudorist1.jpg"]
		
		
		
		
		
	];
	var vit=2;
function viteza(){
	if(vit==3)
	{
		vit=1;
		document.getElementById("b3").src='imagini/buttonoff.png';
		document.getElementById("b2").src='imagini/buttonoff.png';
		document.getElementById("b3s").src='imagini/buttonoff.png';
		document.getElementById("b2s").src='imagini/buttonoff.png';
		speed=0.08;
	}else if(vit==2){
		vit=vit+1;
		document.getElementById("b3").src='imagini/buttonon.png';
		document.getElementById("b3s").src='imagini/buttonon.png';
		speed=0.2;
	}else if(vit==1){
		vit=vit+1;
		document.getElementById("b2").src='imagini/buttonon.png';
		document.getElementById("b2s").src='imagini/buttonon.png';
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
	
	raspunsuri=0;
	shuffle(a);
	verificaNrIntrebari(i);
	
	function verificaNrIntrebari(i)
	{
	document.getElementById("puncte").innerHTML="PUNCTE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+raspunsuri+"/10";
	document.getElementById("intrebare").innerHTML="intrebarea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(i+1);
	
		if(i==10)
				{	document.getElementById("imaginetest").src="imagini/pixel.png";
					document.getElementById("c0").innerHTML="?";
					document.getElementById("c1").innerHTML="?";
					document.getElementById("c2").innerHTML="?";
					document.getElementById("c3").innerHTML="?";
					document.getElementById("c4").innerHTML="?";
					document.getElementById("STARTBUTTON").innerHTML="INCEPE TESTUL";
					document.getElementById("intrebare").innerHTML="intrebare";
					$(".resizeText0").resizeText0();
					$(".resizeText1").resizeText1();
					$(".resizeText2").resizeText2();
					$(".resizeText3").resizeText3();
					$(".resizeText4").resizeText4();
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
			x6=a[i][6];
			for(var j=1;j<=4;j++)
				{	
					if(a[i][j]==x5)
					{	
						b=j;
					}
				}
			document.getElementById("imaginetest").src=x6;
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
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout11,250);
		setTimeout(corectTimeout12,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout11,250);
		setTimeout(gresitTimeout12,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
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
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout21,250);
		setTimeout(corectTimeout22,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout21,250);
		setTimeout(gresitTimeout22,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
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
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout31,250);
		setTimeout(corectTimeout32,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout31,250);
		setTimeout(gresitTimeout32,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
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
		cont.style.background="#222 url(imagini/stripecorect.png) repeat";
		setTimeout(corectTimeout41,250);
		setTimeout(corectTimeout42,500);
		raspunsuri=raspunsuri+1;
	}
	else{gresit.volume=0.2;
		gresit.play();
		cont.style.background="#222 url(imagini/stripeincorect.png) repeat";
		setTimeout(gresitTimeout41,250);
		setTimeout(gresitTimeout42,500);
		for(var j=1;j<=4;j++)
		{if(b==j)
			{
				document.getElementById("c"+j).style.background="#222 url(imagini/stripecorect.png) repeat";
				
				
			}
		}
	}
		
}



