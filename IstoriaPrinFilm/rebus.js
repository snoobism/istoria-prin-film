var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
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
 $.fn.resizeText14 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText14.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText14.interval)
clearTimeout($.resizeText14.interval)
$.resizeText14.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText14();}, 300);});};
$.resizeText14 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText14.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
var matrice=[ 
[
[0,0,'a',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,'s',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,'a',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,'s',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,'i',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,'n',0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,'a',0,0,0,0,0,0,0,'g',0,0,0,0,0,0],
[0,0,'r',0,0,0,'l',0,'t',0,'e',0,0,'f',0,0,0],
['i','p','e','r','i','t','a',0,'r',0,'r',0,0,'e',0,0,0],
[0,0,'a',0,0,0,'w',0,'a',0,'m',0,0,'r',0,0,0],
[0,0,0,0,0,'f','r','a','n','t','a',0,0,'d',0,0,0],
[0,0,0,0,0,0,'e',0,'s',0,'n',0,0,'i',0,0,0],
['t','r','i','a','n','o','n',0,'e',0,'i',0,0,'n',0,0,0],
[0,0,0,0,0,0,'c',0,'e',0,'a','n','t','a','n','t','a'],
[0,0,'i','u','l','i','e',0,0,0,0,0,0,'n',0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,'d',0,0,0]
],
[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,'s','t','a','l','i','n','g','r','a','d'],
[0,0,0,0,0,0,0,0,0,0,'n',0,0,0,'c',0,0,0,0,0,0,0,0,0],
['h','o','l','o','c','a','u','s','t',0,'e',0,0,0,'h','i','r','o','s','h','i','m','a',0],
[0,0,0,0,0,0,0,0,'r',0,'a',0,0,0,'i',0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,'i',0,'g',0,'p',0,'n',0,'l',0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,'n','o','r','m','a','n','d',
'i','a',0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,'i',0,'e',0,'t',0,'l',0,'g',0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,'t',0,'s',0,'t',0,'e',0,'a',0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,'y',0,'i',0,'o',0,'r',0,'r',0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,'u',0,'n',0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,'s','t','a','l','i','n',0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,'e',0,0,0,0,0,0,0,0,0,0,0,0,0]
],
[
[0,0,0,0,0,0,0,0,0,'n',0,0,0,0,0],
[0,0,0,0,0,0,0,'n',0,'o','t','o','m','a','n'],
[0,'g',0,0,0,0,0,'i',0,'i',0,0,0,0,0],
[0,'a','l','b','a',0,0,'c',0,'e',0,0,0,0,0],
[0,'n',0,'o',0,0,0,'o',0,'m',0,0,'v',0,0],
[0,'d',0,'l',0,0,0,'l',0,'b',0,0,'l',0,0],
[0,'h',0,'s','a','t','y','a','g','r','a','h','a',0,0],
[0,'i',0,'e',0,0,0,'e',0,'i',0,0,'d',0,0],
[0,0,0,'v',0,0,0,0,0,'e',0,0,'i',0,0],
['l','e','n','i','n',0,0,0,0,0,0,0,'m',0,0],
[0,0,0,'c',0,0,0,0,0,0,0,0,'i',0,0],
[0,0,0,'a','r','a','b','a',0,0,0,0,'r',0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,'e',0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,'s',0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,'c',0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,'u',0,0]
],
[
[0,0,'c',0,0,0,0,0,0,0,0,0],
[0,0,'o',0,0,0,0,0,0,0,0,0],
[0,0,'m',0,0,0,0,0,0,0,0,0],
[0,0,'u',0,0,0,0,0,0,0,0,0],
[0,0,'n',0,'d','e','c','e','b','a','l',0],
[0,0,'i',0,0,0,'u',0,0,0,0,0],
[0,0,'s',0,'v',0,'z',0,0,0,0,0],
['p',0,'t','r','a','i','a','n',0,0,0,0],
['a',0,0,0,'s',0,0,0,'m',0,0,0],
['c','a','r','o','l',0,'u','n','i','r','e','a'],
['e',0,0,0,'u',0,0,0,'h',0,0,0],
[0,0,0,'m','i','r','c','e','a',0,0,0],
[0,0,0,0,0,0,0,0,'i',0,0,0]
]
];


var numere=[
[
	[0,2,1,'Pretextul Primului Război Mondial a fost . . . arhiducelui Austro-Ungariei'],
	[6,10,2,'Principalul membru al Puterilor Centrale pe lângă Austro-Ungaria'],
	[7,6,3,'Numele de familie al unui ofițer britanic remarcat în Revolta arabă'],
	[7,8,4,'Primul Război Mondial a fost un război de poziție, numit și război de . . .'],
	[7,13,5,'Numele arhiducelui Austro-Ungariei era Franz . . .'],
	[8,0,6,'Armă chimică folosită în război, numită și gaz muștar'],
	[10,5,7,'Membru important din Tripa Alianță ce nu este Imperiul Britanic sau Imperiul Țarist'],
	[12,0,8,'Tratatul prin care România primea Transilvania'],
	[13,10,9,'Altă denumire pentru Tripla Înțelegere'],
	[14,2,10,'Luna în care a început Primul Război Mondial']
	
	
],
[
	[0,14,1,'Oskar . . . , industriaș german ce a salvat circa 1200 de evrei'],
	[1,10,2,'Pactul Ribbentrop-Molotov era un tratat de . . .'],
	[2,8,3,'Numele primei bombe atomice create'],
	[4,12,4,'George Smith . . . , general al armatei SUA'],
	[4,16,5,'Centru major de detenție, răspândit în Germania Nazistă'],
	[0,14,1,'Bătălia de la . . . , cea mai sângeroasă bătălie din Al Doilea Război Mondial'],
	[2,0,6,'Termen utilizat pentru a descrie uciderea în masă a aproximativ 6 milioane de evrei'],
	[2,14,7,'Primul oraș pe care s-a folosit o bombă atomică'],
	[5,8,8,'Locul unde au debarcat aliații pe data de 6 iunie 1944'],
	[10,5,9,'Om politic soviet ajuns conducător']
],
[
	[0,9,1,'Luna în care a avut loc Revoluția din Octombrie'],
	[1,7,2,'Numele țarului ce a abdicat în urma Revoluției Ruse din 1917'],
	[2,1,3,'Inițiatorul mișcărilor de revoltă nonviolente'],
	[3,3,4,'Revoluția . . . , prin care a fost înlăturat guvernul lui Karenski'],
	[4,12,5,'Tudor . . . , conducătorul Revoluției de 1821'],
	[1,9,6,'Imperiul față de care au câștigat independență arabii'],
	[3,1,7,'Armata . . . , ce se opunea bolșevicilor'],
	[6,3,8,'Mișcare de rezistență nonviolentă apărută în India'],
	[9,0,9,'Liderul Revoluției din Octombrie'],
	[11,3,10,'Revolta . . . , inițiată de Hussein bin Ali']
],
[
	[0,2,1,'Regimul României după Al Doilea Război Mondial'],
	[4,6,2,'Numele de familie al primului domnitor al Principatelor Unite'],
	[6,4,3,'Bătălia de la . . . , cea mai strălucită victorie a unei armate românești medievale împotriva otomanilor'],
	[7,0,4,'Rezultatul Primului Război Daco-Roman'],
	[8,8,5,'Voievodul Țării Românești din timpul Bătăliei de la Călugăreni'],
	[4,4,6,'Regele Daciei între anii 85-106'],
	[7,2,7,'Împăratul roman din timpul celui de-al Doilea Război Daco-Roman'],
	[9,0,8,'Regele cu cea mai lungă domnie din istoria statelor românești'],
	[9,6,9,'La 27 mai 1600 s-a realizat . . .'],
	[11,3,10,'Voievodul care a obținut cea mai mare întindere teritorială a Țării Românești']
]
];


var cascont=[];

var nume_rebus=['Primul Război Mondial','Al Doilea Război Mondial','Revoluții / Revolte','Istoria României'];


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
	
	descrieretitlu=document.createElement("div");
	descrieretitlu.id='descrieretitlu';
	descrieretitlu.style.opacity=0;
	descrieretitlu.style.transition='1s ease-in-out';
	descrieretitlu.style.display="block";
	descrieretitlu.style.position="relative";
	descrieretitlu.style.marginTop=0.12*y0+"px";
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
	descriere.innerHTML="<p>● Acest exercițiu este creat în scopul punerii în aplicare a cunoştinţelor acumulate de-a lungul navigării site-ului din diferite surse ( dicţionarul istoric, descrieri sau chiar rubrica de 'ştiaţi că').</p><p>● Există 4 variante de rebus, fiecare având ca temă o perioadă sau un eveniment istoric. Tema se alege printr-un click pe butonul specific.</p><p>● Odată ce rebusul este completat, puteți apăsa butonul de verificare.</p>";
	descriere.style.fontFamily="museo";
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
	for(var i=0;i<=3;i++)
	{
		var buton=document.createElement('div');
		buton.id='buton'+i;
		buton.className='resizeText'+i;
		buton.style.background='rgba(0,0,0,0.8)';
		buton.style.boxShadow='0px 0px 15px black';
		buton.style.fontFamily='bebasbold';
		buton.style.color='white';
		buton.style.height=0.15*y0+'px';
		buton.style.top=0.1*y0+'px';
		buton.style.borderRadius='5px';
		buton.style.width=0.15*x0+'px';
		buton.style.display='table-cell';
		buton.style.position='relative';
		buton.style.left=0.08*x0+'px';
		buton.style.verticalAlign='middle';
		buton.style.textAlign='center';
		buton.style.transition='0.5s all';
		buton.style.opacity=0;
		buton.style.textShadow='0px 0px 10px black';
		buton.style.cursor='pointer';
		buton.innerHTML=nume_rebus[i];
		document.body.appendChild(buton);
		$('.resizeText1').resizeText1();
		$('.resizeText2').resizeText2();
		$('.resizeText3').resizeText3();
		$('.resizeText0').resizeText0();
		
	}
		document.getElementById('buton'+0).style.left=0.08*x0+'px';
		document.getElementById('buton'+1).style.left=0.16*x0+'px';
		document.getElementById('buton'+2).style.left=0.24*x0+'px';
		document.getElementById('buton'+3).style.left=0.32*x0+'px';
		document.getElementById('buton'+0).onclick=function(){buton0()};
		document.getElementById('buton'+1).onclick=function(){buton1()};
		document.getElementById('buton'+2).onclick=function(){buton2()};
		document.getElementById('buton'+3).onclick=function(){buton3()};
		
	var filler=document.createElement('div');
	filler.style.padding=0.07*y0+'px';
	document.body.appendChild(filler);
	setTimeout(function(){
	document.getElementById('descrieretitlu').style.opacity=1;
	document.getElementById('descriere').style.opacity=1;
	},500);
	setTimeout(function(){
		document.getElementById('buton0').style.opacity=1;
	},1000);
	setTimeout(function(){
		document.getElementById('buton1').style.opacity=1;
	},1500);
	setTimeout(function(){
		document.getElementById('buton2').style.opacity=1;
	},2000);
	setTimeout(function(){
		document.getElementById('buton3').style.opacity=1;
	},2500);
}
	var z;
	function buton0(){
		 z=0;
		  buton(z);
		 document.getElementById('buton0').style.background='rgba(255,215,0,0.8)';
		document.getElementById('buton1').style.background='rgba(0,0,0,0.8)';
		  document.getElementById('buton2').style.background='rgba(0,0,0,0.8)';
		 document.getElementById('buton3').style.background='rgba(0,0,0,0.8)';
		 window.scrollTo(0, 0);
	}
	function buton1(){
		 z=1;
		  buton(z);
		   document.getElementById('buton1').style.background='rgba(255,215,0,0.8)';
		document.getElementById('buton0').style.background='rgba(0,0,0,0.8)';
		  document.getElementById('buton2').style.background='rgba(0,0,0,0.8)';
		 document.getElementById('buton3').style.background='rgba(0,0,0,0.8)';
		  window.scrollTo(0, 0);
	}
	function buton2(){
		 z=2;
		  buton(z);
		   document.getElementById('buton2').style.background='rgba(255,215,0,0.8)';
		 document.getElementById('buton0').style.background='rgba(0,0,0,0.8)';
		  document.getElementById('buton1').style.background='rgba(0,0,0,0.8)';
		 document.getElementById('buton3').style.background='rgba(0,0,0,0.8)';
		  window.scrollTo(0, 0);
	}
	function buton3(){
		 z=3;
		 buton(z);
		  document.getElementById('buton3').style.background='rgba(255,215,0,0.8)';
		 document.getElementById('buton0').style.background='rgba(0,0,0,0.8)';
		document.getElementById('buton1').style.background='rgba(0,0,0,0.8)';
		  document.getElementById('buton2').style.background='rgba(0,0,0,0.8)';
		   window.scrollTo(0, 0);
	}
  function buton(z)
  {
	  if($('#rebus').length)
	  {
		  document.getElementById('rebus').remove();
	  }
	  if($('#vertcont').length)
	  {
		  document.getElementById('vertcont').remove();
	  }
	  if($('#orizcont').length)
	  {
		  document.getElementById('orizcont').remove();
	  }
	  if($('#descriere').length)
	  {
		  document.getElementById('descriere').remove();
	  }
	  if($('#descrieretitlu').length)
	  {
		  document.getElementById('descrieretitlu').remove();
	  }
	  
	  	for(var i=0;i<=3;i++)
	{
		$('#buton'+i).remove();
	}
	if($('#verifica').length)
	  {
		  document.getElementById('verifica').remove();
	  }
	  if($('#filler2').length)
	  {
		  document.getElementById('filler2').remove();
	  }
	  var rebus=document.createElement('div');
	rebus.id='rebus';
	document.body.appendChild(rebus);
	for(var i=0;i<=matrice[z].length-1;i++)
	{
		cascont[i]=document.createElement('div');
		cascont[i].display='block';
		cascont[i].id='cascont'+i;
		cascont[i].style.margin='0 auto';
		cascont[i].style.textAlign='center';
		document.getElementById('rebus').appendChild(cascont[i]);
		for(var j=0;j<=matrice[z][0].length-1;j++)
		{
			var casuta=document.createElement('input');
			casuta.id='casuta'+i+'_'+j;
			casuta.type='text';
			casuta.style.color='black';
			casuta.style.opacity=0;
			casuta.style.width=0.025*x0+'px';
			casuta.style.height=0.025*x0+'px';
			casuta.style.textAlign='center';
			casuta.style.fontFamily='bebasbold';
			casuta.style.fontSize=0.02*x0+'px';
			casuta.style.display='inline-block';
			casuta.style.transition='0.3s all'
			casuta.style.backgroundSize='100% 100%';
			document.getElementById('cascont'+i).appendChild(casuta);
			
		}
		
	}
	var l=0,k=0;
	var interval=setInterval(function(){if(matrice[z][l][k]===0)
			{	
				document.getElementById('casuta'+l+'_'+k).style.opacity=0.1;
				document.getElementById('casuta'+l+'_'+k).style.pointerEvents='none';
				k++;
				if(k==matrice[z][0].length)
				{
					k=0;
					l++;
					if(l==matrice[z].length)
					{
						clearInterval(interval);
					}
				}
			}else {document.getElementById('casuta'+l+'_'+k).style.opacity=1;
			k++;
				if(k==matrice[z][0].length)
				{
					k=0;
					l++;
					if(l==matrice[z].length)
					{
						clearInterval(interval);
					}
				}
			};},7);
	
	
	for(var i=0;i<=9;i++)
	{
		document.getElementById('casuta'+numere[z][i][0]+'_'+numere[z][i][1]).style.backgroundImage='url(numere/'+numere[z][i][2]+'.png)';
	}
	var verifica=document.createElement('span');
	verifica.id='verifica';
	verifica.onclick=function(){verifica2()};
	verifica.style.cursor='pointer';
	verifica.style.display='block';
	verifica.style.margin=0.03*y0+'px auto';
	verifica.style.textAlign='center';
	verifica.style.color='white';
	verifica.style.fontFamily='bebasbold';
	verifica.style.background='black';
	verifica.style.textShadow='0px 0px 1px white';
	verifica.style.boxShadow='0px 0px 5px #400000';
	verifica.innerHTML='verifică';
	verifica.style.width=0.3*x0+'px';
	verifica.style.fontSize=0.1*y0+'px';
	verifica.style.padding=0;
	document.body.appendChild(verifica);
	
	var vertcont=document.createElement('div');
	vertcont.style.display='inline-block';
	vertcont.id='vertcont';
	vertcont.innerHTML='VERTICAL';
	vertcont.style.color='white';
	vertcont.style.fontSize=0.1*y0+'px';
	vertcont.style.textAlign='center';
	vertcont.style.fontFamily='bebasbold';
	vertcont.style.marginLeft=0.1*x0+'px';
	vertcont.style.textShadow='0px 0px 10px black';
	vertcont.style.marginTop=0.03*y0+'px';
	document.body.appendChild(vertcont);
	var orizcont=document.createElement('div');
	orizcont.style.display='inline-block';
	orizcont.id='orizcont';
	orizcont.innerHTML='ORIZONTAL';
	orizcont.style.color='white';
	orizcont.style.fontSize=0.1*y0+'px';
	orizcont.style.textAlign='center';
	orizcont.style.textShadow='0px 0px 10px black';
	orizcont.style.fontFamily='bebasbold';
	orizcont.style.marginLeft=0.1*x0+'px';
	orizcont.style.marginTop=0.03*y0+'px';
	document.body.appendChild(orizcont);
	for(var i=0;i<=4;i++)
	{
		var vertcas=document.createElement('div');
		vertcas.id='vertcas'+i;
		vertcas.className='resizeText'+(4+i);
		vertcas.style.display='block';
		vertcas.style.color='white';
		vertcas.style.fontFamily='museo';
		vertcas.style.width=0.35*x0+'px';
		vertcas.style.height=0.1*y0+'px';
		vertcas.style.backgroundColor='black';
		vertcas.style.boxShadow='0px 0px 10px #400000';
		vertcas.style.textShadow='0px 0px 1px white';
		vertcas.style.marginTop=0.03*y0+'px';
		vertcas.style.textAlign='center';
		vertcas.style.borderRadius='5px';
		vertcas.innerHTML=numere[z][i][2]+'. '+numere[z][i][3];
		document.getElementById('vertcont').appendChild(vertcas);
		
	}
	for(var i=5;i<=9;i++)
	{
		var orizcas=document.createElement('div');
		orizcas.id='orizcas'+i;
		orizcas.className='resizeText'+(4+i);
		orizcas.style.display='block';
		orizcas.style.color='white';
		orizcas.style.fontFamily='museo';
		orizcas.style.width=0.35*x0+'px';
		orizcas.style.height=0.1*y0+'px';
		orizcas.style.backgroundColor='black';
		orizcas.style.boxShadow='0px 0px 10px #400000';
		orizcas.style.textShadow='0px 0px 1px white';
		orizcas.style.marginTop=0.03*y0+'px';
		orizcas.style.textAlign='center';
		orizcas.style.borderRadius='5px';
		orizcas.innerHTML=numere[z][i][2]+'. '+numere[z][i][3];
		document.getElementById('orizcont').appendChild(orizcas);
		
	}
		$('.resizeText4').resizeText4();
		$('.resizeText5').resizeText5();
		$('.resizeText6').resizeText6();
		$('.resizeText7').resizeText7();
		$('.resizeText8').resizeText8();
		$('.resizeText9').resizeText9();
		$('.resizeText10').resizeText10();
		$('.resizeText11').resizeText11();
		$('.resizeText12').resizeText12();
		$('.resizeText13').resizeText13();
		$('.resizeText14').resizeText14();
		for(var i=0;i<=3;i++)
	{
		var buton=document.createElement('div');
		buton.id='buton'+i;
		buton.className='resizeText'+i;
		buton.style.background='rgba(0,0,0,0.8)';
		buton.style.boxShadow='0px 0px 15px black';
		buton.style.fontFamily='bebasbold';
		buton.style.color='white';
		buton.style.height=0.15*y0+'px';
		buton.style.top=0.05*y0+'px';
		buton.style.borderRadius='5px';
		buton.style.width=0.15*x0+'px';
		buton.style.display='table-cell';
		buton.style.position='relative';
		buton.style.left=0.08*x0+'px';
		buton.style.verticalAlign='middle';
		buton.style.textAlign='center';
		buton.style.transition='0.5s all';
		buton.style.textShadow='0px 0px 10px black';
		buton.style.cursor='pointer';
		buton.innerHTML=nume_rebus[i];
		document.body.appendChild(buton);
		$('.resizeText1').resizeText1();
		$('.resizeText2').resizeText2();
		$('.resizeText3').resizeText3();
		$('.resizeText0').resizeText0();
		
	}
		document.getElementById('buton'+0).style.left=0.08*x0+'px';
		document.getElementById('buton'+1).style.left=0.16*x0+'px';
		document.getElementById('buton'+2).style.left=0.24*x0+'px';
		document.getElementById('buton'+3).style.left=0.32*x0+'px';
		document.getElementById('buton'+0).onclick=function(){buton0()};
		document.getElementById('buton'+1).onclick=function(){buton1()};
		document.getElementById('buton'+2).onclick=function(){buton2()};
		document.getElementById('buton'+3).onclick=function(){buton3()};
		
		var filler2=document.createElement('div');
	filler2.style.padding=0.07*y0+'px';
	filler2.id='filler2';
	document.body.appendChild(filler2);
		
  }
  var zk;
 function verifica2 (){
		zk=0;
		for(var i=0;i<=matrice[z].length-1;i++)
		{
			for(var j=0;j<=matrice[z][0].length-1;j++)	
			{	
				if(matrice[z][i][j]!=0)
				{
					
					if(document.getElementById('casuta'+i+'_'+j).value==matrice[z][i][j]||document.getElementById('casuta'+i+'_'+j).value.toLowerCase()==matrice[z][i][j])
					{
						document.getElementById('casuta'+i+'_'+j).style.backgroundColor='lime';
					}else{
						document.getElementById('casuta'+i+'_'+j).style.backgroundColor='red';
						zk=1;
					}
				}
			}
		}
		if(zk==0)
		{
			win.volume=0.5;
			win.play();
		}
}