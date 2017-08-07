var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var exer=[],nume=[],elem;
var pozexer=['0%','0%','0%'];
var bgexer=['url(http://imgur.com/UBdpxFJ.jpg)','url(http://imgur.com/MzoHKo2.jpg)','url(http://imgur.com/eSEEtwk.jpg)'];
var bgpoz=['10% 100%','10% 100%','60% 100%'];
var bgsize=['auto 100%','auto 100%','auto 100%'];
var numeexer=['connect 2','rebus','spânzurătoarea'];
var adresa=['uneste.html','rebus.html','spanzuratoarea.html'];
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
	for(var i=0;i<=numeexer.length-1;i++)
	{
		exer[i]=document.createElement('div');
		exer[i].style.position='relative';
		exer[i].style.left=pozexer[i];
		exer[i].style.backgroundPosition=bgpoz[i];
		exer[i].style.backgroundSize=bgsize[i];
		exer[i].style.backgroundImage=bgexer[i];
		exer[i].style.width=0.32*x0+'px';
		exer[i].style.height=y0+'px';
		exer[i].id='exer'+i;
		exer[i].style.transition='0.5s all'
		exer[i].style.display='inline-block';
		exer[i].style.cursor='pointer';
		exer[i].style.float='left';
		document.body.appendChild(exer[i]);
		nume[i]=document.createElement('div');
		nume[i].id='nume'+i;
		nume[i].position='relative';
		nume[i].className='resizeText'+i;
		nume[i].innerHTML=numeexer[i];
		nume[i].style.textShadow='0px 0px 10px black';
		nume[i].style.fontFamily='bebasbold';
		nume[i].style.color='white';
		nume[i].style.textAlign='center';
		nume[i].style.transition='1s all';
		nume[i].style.width=0.3*x0+'px';
		nume[i].style.height=0.15*y0+'px';
		nume[i].style.margin=0.4*y0+'px auto';
		
		document.getElementById('exer'+i).appendChild(nume[i]);
		
	}
	$('#exer0').hover(function(){document.getElementById('exer0').style.backgroundSize='auto 130%';document.getElementById('nume0').style.textShadow='0px 0px 10px red';},function(){document.getElementById('exer0').style.backgroundSize='auto 100%';document.getElementById('nume0').style.textShadow='0px 0px 10px black';});
	
	$('#exer1').hover(function(){document.getElementById('exer1').style.backgroundSize='auto 130%';document.getElementById('nume1').style.textShadow='0px 0px 10px red';},function(){document.getElementById('exer1').style.backgroundSize='auto 100%';document.getElementById('nume1').style.textShadow='0px 0px 10px black';});
	$('#exer2').hover(function(){document.getElementById('exer2').style.backgroundSize='auto 130%';document.getElementById('nume2').style.textShadow='0px 0px 10px red';},function(){document.getElementById('exer2').style.backgroundSize='auto 100%';document.getElementById('nume2').style.textShadow='0px 0px 10px black';});
	$('.resizeText0').resizeText0();
	$('.resizeText1').resizeText1();
	$('.resizeText2').resizeText2();
	
	document.getElementById('exer'+1).style.marginLeft=0.02*x0+'px';
	document.getElementById('exer'+2).style.marginLeft=0.02*x0+'px';
	
	document.getElementById('exer0').onclick=function(){ location.assign("uneste.html");};
	document.getElementById('exer1').onclick=function(){ location.assign("rebus.html");};
	document.getElementById('exer2').onclick=function(){ location.assign("spanzuratoarea.html");};
}