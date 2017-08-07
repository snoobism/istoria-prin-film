var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
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
$.fn.resizeText15 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText15.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText15.interval)
clearTimeout($.resizeText15.interval)
$.resizeText15.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText15();}, 300);});};
$.resizeText15 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText15.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText16 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText16.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText16.interval)
clearTimeout($.resizeText16.interval)
$.resizeText16.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText16();}, 300);});};
$.resizeText16 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText16.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText17 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText17.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText17.interval)
clearTimeout($.resizeText17.interval)
$.resizeText17.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText17();}, 300);});};
$.resizeText17 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText17.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText18 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText18.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText18.interval)
clearTimeout($.resizeText18.interval)
$.resizeText18.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText18();}, 300);});};
$.resizeText18 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText18.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText19 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText19.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText19.interval)
clearTimeout($.resizeText19.interval)
$.resizeText19.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText19();}, 300);});};
$.resizeText19 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText19.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText20 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText20.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText20.interval)
clearTimeout($.resizeText20.interval)
$.resizeText20.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText20();}, 300);});};
$.resizeText20 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText20.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText21 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText21.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText21.interval)
clearTimeout($.resizeText21.interval)
$.resizeText21.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText21();}, 300);});};
$.resizeText21 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText21.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText22 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText22.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText22.interval)
clearTimeout($.resizeText22.interval)
$.resizeText22.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText22();}, 300);});};
$.resizeText22 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText22.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText23 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText23.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText23.interval)
clearTimeout($.resizeText23.interval)
$.resizeText23.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText23();}, 300);});};
$.resizeText23 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText23.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText24 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText24.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText24.interval)
clearTimeout($.resizeText24.interval)
$.resizeText24.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText24();}, 300);});};
$.resizeText24 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText24.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText25 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText25.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText25.interval)
clearTimeout($.resizeText25.interval)
$.resizeText25.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText25();}, 300);});};
$.resizeText25 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText25.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText26 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText26.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText26.interval)
clearTimeout($.resizeText26.interval)
$.resizeText26.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText26();}, 300);});};
$.resizeText26 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText26.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText27 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText27.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText27.interval)
clearTimeout($.resizeText27.interval)
$.resizeText27.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText27();}, 300);});};
$.resizeText27 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText27.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText28 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText28.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText28.interval)
clearTimeout($.resizeText28.interval)
$.resizeText28.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText28();}, 300);});};
$.resizeText28 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText28.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText29 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText29.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText29.interval)
clearTimeout($.resizeText29.interval)
$.resizeText29.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText29();}, 300);});};
$.resizeText29 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText29.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText30 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText30.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText30.interval)
clearTimeout($.resizeText30.interval)
$.resizeText30.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText30();}, 300);});};
$.resizeText30 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText30.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText31 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText31.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText31.interval)
clearTimeout($.resizeText31.interval)
$.resizeText31.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText31();}, 300);});};
$.resizeText31 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText31.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText32 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText32.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText32.interval)
clearTimeout($.resizeText32.interval)
$.resizeText32.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText32();}, 300);});};
$.resizeText32 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText32.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText33 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText33.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText33.interval)
clearTimeout($.resizeText33.interval)
$.resizeText33.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText33();}, 300);});};
$.resizeText33 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText33.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText34 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText34.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText34.interval)
clearTimeout($.resizeText34.interval)
$.resizeText34.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText34();}, 300);});};
$.resizeText34 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText34.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText35 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText35.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText35.interval)
clearTimeout($.resizeText35.interval)
$.resizeText35.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText35();}, 300);});};
$.resizeText35 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText35.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText36 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText36.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText36.interval)
clearTimeout($.resizeText36.interval)
$.resizeText36.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText36();}, 300);});};
$.resizeText36 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText36.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText37 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText37.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText37.interval)
clearTimeout($.resizeText37.interval)
$.resizeText37.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText37();}, 300);});};
$.resizeText37 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText37.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText38 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText38.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText38.interval)
clearTimeout($.resizeText38.interval)
$.resizeText38.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText38();}, 300);});};
$.resizeText38 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText38.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText39 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText39.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText39.interval)
clearTimeout($.resizeText39.interval)
$.resizeText39.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText39();}, 300);});};
$.resizeText39 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText39.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText40 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText40.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText40.interval)
clearTimeout($.resizeText40.interval)
$.resizeText40.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText40();}, 300);});};
$.resizeText40 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText40.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText41 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText41.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText41.interval)
clearTimeout($.resizeText41.interval)
$.resizeText41.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText41();}, 300);});};
$.resizeText41 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText41.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText42 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText42.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText42.interval)
clearTimeout($.resizeText42.interval)
$.resizeText42.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText42();}, 300);});};
$.resizeText42 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText42.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText43 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText43.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText43.interval)
clearTimeout($.resizeText43.interval)
$.resizeText43.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText43();}, 300);});};
$.resizeText43 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText43.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText44 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText44.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText44.interval)
clearTimeout($.resizeText44.interval)
$.resizeText44.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText44();}, 300);});};
$.resizeText44 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText44.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText45 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText45.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText45.interval)
clearTimeout($.resizeText45.interval)
$.resizeText45.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText45();}, 300);});};
$.resizeText45 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText45.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText46 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText46.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText46.interval)
clearTimeout($.resizeText46.interval)
$.resizeText46.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText46();}, 300);});};
$.resizeText46 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText46.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText47 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText47.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText47.interval)
clearTimeout($.resizeText47.interval)
$.resizeText47.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText47();}, 300);});};
$.resizeText47 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText47.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText48 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText48.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText48.interval)
clearTimeout($.resizeText48.interval)
$.resizeText48.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText48();}, 300);});};
$.resizeText48 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText48.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText49 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText49.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText49.interval)
clearTimeout($.resizeText49.interval)
$.resizeText49.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText49();}, 300);});};
$.resizeText49 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText49.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText50 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText50.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText50.interval)
clearTimeout($.resizeText50.interval)
$.resizeText50.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText50();}, 300);});};
$.resizeText50 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText50.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText51 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText51.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText51.interval)
clearTimeout($.resizeText51.interval)
$.resizeText51.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText51();}, 300);});};
$.resizeText51 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText51.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText52 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText52.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText52.interval)
clearTimeout($.resizeText52.interval)
$.resizeText52.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText52();}, 300);});};
$.resizeText52 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText52.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText53 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText53.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText53.interval)
clearTimeout($.resizeText53.interval)
$.resizeText53.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText53();}, 300);});};
$.resizeText53 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText53.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText54 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText54.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText54.interval)
clearTimeout($.resizeText54.interval)
$.resizeText54.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText54();}, 300);});};
$.resizeText54 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText54.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText55 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText55.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText55.interval)
clearTimeout($.resizeText55.interval)
$.resizeText55.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText55();}, 300);});};
$.resizeText55 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText55.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText56 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText56.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText56.interval)
clearTimeout($.resizeText56.interval)
$.resizeText56.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText56();}, 300);});};
$.resizeText56 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText56.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText57 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText57.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText57.interval)
clearTimeout($.resizeText57.interval)
$.resizeText57.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText57();}, 300);});};
$.resizeText57 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText57.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText58 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText58.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText58.interval)
clearTimeout($.resizeText58.interval)
$.resizeText58.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText58();}, 300);});};
$.resizeText58 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText58.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText59 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText59.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText59.interval)
clearTimeout($.resizeText59.interval)
$.resizeText59.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText59();}, 300);});};
$.resizeText59 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText59.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
$.fn.resizeText60 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText60.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText60.interval)
clearTimeout($.resizeText60.interval)
$.resizeText60.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText60();}, 300);});};
$.resizeText60 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText60.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};
 
 
 $.fn.resizeText61 = function () {
var width = $(this).innerWidth();
var height = $(this).innerHeight();
var newElem = $('<div>', {
 html: $(this).html(),
style: 'display: inline-block;overflow:hidden;font-size:0.1em;padding:1%;margin:0;border:0;outline:0'
 });
$(this).html(newElem);
$.resizeText61.increaseSize(10, 0.1, newElem, width, height);
$(window).resize(function () {
if ($.resizeText61.interval)
clearTimeout($.resizeText61.interval)
$.resizeText61.interval = setTimeout(function () {elem.html(elem.find('div.createdResizeObject').first().html());elem.resizeText61();}, 300);});};
$.resizeText61 = {
increaseSize: function (increment, start, newElem, width, height) {
var fontSize = start;
while (newElem.outerWidth() <= width && newElem.outerHeight() <= height) {
fontSize += increment;
newElem.css('font-size', fontSize + 'em');}
if (newElem.outerWidth() > width || newElem.outerHeight() > height) {
fontSize -= increment;
newElem.css('font-size', fontSize + 'em');
 if (increment > 0.1) {
 $.resizeText61.increaseSize(increment / 10, fontSize, newElem, width, height);}}}};

function alegere11(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont11').style.background='#212121';document.getElementById('raspcont12').style.background='#212121';document.getElementById('raspcont13').style.background='#212121';document.getElementById('raspcont11').style.pointerEvents='none';document.getElementById('raspcont12').style.pointerEvents='none';document.getElementById('raspcont13').style.pointerEvents='none';document.getElementById('raspcont11').style.background='gold';if(raspuns[1][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere12(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont11').style.background='#212121';document.getElementById('raspcont12').style.background='#212121';document.getElementById('raspcont13').style.background='#212121';document.getElementById('raspcont11').style.pointerEvents='none';document.getElementById('raspcont12').style.pointerEvents='none';document.getElementById('raspcont13').style.pointerEvents='none';document.getElementById('raspcont12').style.background='gold';if(raspuns[1][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere13(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont11').style.background='#212121';document.getElementById('raspcont12').style.background='#212121';document.getElementById('raspcont13').style.background='#212121';document.getElementById('raspcont11').style.pointerEvents='none';document.getElementById('raspcont12').style.pointerEvents='none';document.getElementById('raspcont13').style.pointerEvents='none';document.getElementById('raspcont13').style.background='gold';if(raspuns[1][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere21(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont21').style.background='#212121';document.getElementById('raspcont22').style.background='#212121';document.getElementById('raspcont23').style.background='#212121';document.getElementById('raspcont21').style.pointerEvents='none';document.getElementById('raspcont22').style.pointerEvents='none';document.getElementById('raspcont23').style.pointerEvents='none';document.getElementById('raspcont21').style.background='gold';if(raspuns[2][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere22(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont21').style.background='#212121';document.getElementById('raspcont22').style.background='#212121';document.getElementById('raspcont23').style.background='#212121';document.getElementById('raspcont21').style.pointerEvents='none';document.getElementById('raspcont22').style.pointerEvents='none';document.getElementById('raspcont23').style.pointerEvents='none';document.getElementById('raspcont22').style.background='gold';if(raspuns[2][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere23(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont21').style.background='#212121';document.getElementById('raspcont22').style.background='#212121';document.getElementById('raspcont23').style.background='#212121';document.getElementById('raspcont21').style.pointerEvents='none';document.getElementById('raspcont22').style.pointerEvents='none';document.getElementById('raspcont23').style.pointerEvents='none';document.getElementById('raspcont23').style.background='gold';if(raspuns[2][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere31(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont31').style.background='#212121';document.getElementById('raspcont32').style.background='#212121';document.getElementById('raspcont33').style.background='#212121';document.getElementById('raspcont31').style.pointerEvents='none';document.getElementById('raspcont32').style.pointerEvents='none';document.getElementById('raspcont33').style.pointerEvents='none';document.getElementById('raspcont31').style.background='gold';if(raspuns[3][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere32(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont31').style.background='#212121';document.getElementById('raspcont32').style.background='#212121';document.getElementById('raspcont33').style.background='#212121';document.getElementById('raspcont31').style.pointerEvents='none';document.getElementById('raspcont32').style.pointerEvents='none';document.getElementById('raspcont33').style.pointerEvents='none';document.getElementById('raspcont32').style.background='gold';if(raspuns[3][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere33(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont31').style.background='#212121';document.getElementById('raspcont32').style.background='#212121';document.getElementById('raspcont33').style.background='#212121';document.getElementById('raspcont31').style.pointerEvents='none';document.getElementById('raspcont32').style.pointerEvents='none';document.getElementById('raspcont33').style.pointerEvents='none';document.getElementById('raspcont33').style.background='gold';if(raspuns[3][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere41(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont41').style.background='#212121';document.getElementById('raspcont42').style.background='#212121';document.getElementById('raspcont43').style.background='#212121';document.getElementById('raspcont41').style.pointerEvents='none';document.getElementById('raspcont42').style.pointerEvents='none';document.getElementById('raspcont43').style.pointerEvents='none';document.getElementById('raspcont41').style.background='gold';if(raspuns[4][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere42(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont41').style.background='#212121';document.getElementById('raspcont42').style.background='#212121';document.getElementById('raspcont43').style.background='#212121';document.getElementById('raspcont41').style.pointerEvents='none';document.getElementById('raspcont42').style.pointerEvents='none';document.getElementById('raspcont43').style.pointerEvents='none';document.getElementById('raspcont42').style.background='gold';if(raspuns[4][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere43(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont41').style.background='#212121';document.getElementById('raspcont42').style.background='#212121';document.getElementById('raspcont43').style.background='#212121';document.getElementById('raspcont41').style.pointerEvents='none';document.getElementById('raspcont42').style.pointerEvents='none';document.getElementById('raspcont43').style.pointerEvents='none';document.getElementById('raspcont43').style.background='gold';if(raspuns[4][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere51(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont51').style.background='#212121';document.getElementById('raspcont52').style.background='#212121';document.getElementById('raspcont53').style.background='#212121';document.getElementById('raspcont51').style.pointerEvents='none';document.getElementById('raspcont52').style.pointerEvents='none';document.getElementById('raspcont53').style.pointerEvents='none';document.getElementById('raspcont51').style.background='gold';if(raspuns[5][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere52(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont51').style.background='#212121';document.getElementById('raspcont52').style.background='#212121';document.getElementById('raspcont53').style.background='#212121';document.getElementById('raspcont51').style.pointerEvents='none';document.getElementById('raspcont52').style.pointerEvents='none';document.getElementById('raspcont53').style.pointerEvents='none';document.getElementById('raspcont52').style.background='gold';if(raspuns[5][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere53(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont51').style.background='#212121';document.getElementById('raspcont52').style.background='#212121';document.getElementById('raspcont53').style.background='#212121';document.getElementById('raspcont51').style.pointerEvents='none';document.getElementById('raspcont52').style.pointerEvents='none';document.getElementById('raspcont53').style.pointerEvents='none';document.getElementById('raspcont53').style.background='gold';if(raspuns[5][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere61(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont61').style.background='#212121';document.getElementById('raspcont62').style.background='#212121';document.getElementById('raspcont63').style.background='#212121';document.getElementById('raspcont61').style.pointerEvents='none';document.getElementById('raspcont62').style.pointerEvents='none';document.getElementById('raspcont63').style.pointerEvents='none';document.getElementById('raspcont61').style.background='gold';if(raspuns[6][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere62(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont61').style.background='#212121';document.getElementById('raspcont62').style.background='#212121';document.getElementById('raspcont63').style.background='#212121';document.getElementById('raspcont61').style.pointerEvents='none';document.getElementById('raspcont62').style.pointerEvents='none';document.getElementById('raspcont63').style.pointerEvents='none';document.getElementById('raspcont62').style.background='gold';if(raspuns[6][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere63(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont61').style.background='#212121';document.getElementById('raspcont62').style.background='#212121';document.getElementById('raspcont63').style.background='#212121';document.getElementById('raspcont61').style.pointerEvents='none';document.getElementById('raspcont62').style.pointerEvents='none';document.getElementById('raspcont63').style.pointerEvents='none';document.getElementById('raspcont63').style.background='gold';if(raspuns[6][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere71(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont71').style.background='#212121';document.getElementById('raspcont72').style.background='#212121';document.getElementById('raspcont73').style.background='#212121';document.getElementById('raspcont71').style.pointerEvents='none';document.getElementById('raspcont72').style.pointerEvents='none';document.getElementById('raspcont73').style.pointerEvents='none';document.getElementById('raspcont71').style.background='gold';if(raspuns[7][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere72(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont71').style.background='#212121';document.getElementById('raspcont72').style.background='#212121';document.getElementById('raspcont73').style.background='#212121';document.getElementById('raspcont71').style.pointerEvents='none';document.getElementById('raspcont72').style.pointerEvents='none';document.getElementById('raspcont73').style.pointerEvents='none';document.getElementById('raspcont72').style.background='gold';if(raspuns[7][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere73(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont71').style.background='#212121';document.getElementById('raspcont72').style.background='#212121';document.getElementById('raspcont73').style.background='#212121';document.getElementById('raspcont71').style.pointerEvents='none';document.getElementById('raspcont72').style.pointerEvents='none';document.getElementById('raspcont73').style.pointerEvents='none';document.getElementById('raspcont73').style.background='gold';if(raspuns[7][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere81(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont81').style.background='#212121';document.getElementById('raspcont82').style.background='#212121';document.getElementById('raspcont83').style.background='#212121';document.getElementById('raspcont81').style.pointerEvents='none';document.getElementById('raspcont82').style.pointerEvents='none';document.getElementById('raspcont83').style.pointerEvents='none';document.getElementById('raspcont81').style.background='gold';if(raspuns[8][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere82(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont81').style.background='#212121';document.getElementById('raspcont82').style.background='#212121';document.getElementById('raspcont83').style.background='#212121';document.getElementById('raspcont81').style.pointerEvents='none';document.getElementById('raspcont82').style.pointerEvents='none';document.getElementById('raspcont83').style.pointerEvents='none';document.getElementById('raspcont82').style.background='gold';if(raspuns[8][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere83(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont81').style.background='#212121';document.getElementById('raspcont82').style.background='#212121';document.getElementById('raspcont83').style.background='#212121';document.getElementById('raspcont81').style.pointerEvents='none';document.getElementById('raspcont82').style.pointerEvents='none';document.getElementById('raspcont83').style.pointerEvents='none';document.getElementById('raspcont83').style.background='gold';if(raspuns[8][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere91(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont91').style.background='#212121';document.getElementById('raspcont92').style.background='#212121';document.getElementById('raspcont93').style.background='#212121';document.getElementById('raspcont91').style.pointerEvents='none';document.getElementById('raspcont92').style.pointerEvents='none';document.getElementById('raspcont93').style.pointerEvents='none';document.getElementById('raspcont91').style.background='gold';if(raspuns[9][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere92(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont91').style.background='#212121';document.getElementById('raspcont92').style.background='#212121';document.getElementById('raspcont93').style.background='#212121';document.getElementById('raspcont91').style.pointerEvents='none';document.getElementById('raspcont92').style.pointerEvents='none';document.getElementById('raspcont93').style.pointerEvents='none';document.getElementById('raspcont92').style.background='gold';if(raspuns[9][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere93(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont91').style.background='#212121';document.getElementById('raspcont92').style.background='#212121';document.getElementById('raspcont93').style.background='#212121';document.getElementById('raspcont91').style.pointerEvents='none';document.getElementById('raspcont92').style.pointerEvents='none';document.getElementById('raspcont93').style.pointerEvents='none';document.getElementById('raspcont93').style.background='gold';if(raspuns[9][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere101(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont101').style.background='#212121';document.getElementById('raspcont102').style.background='#212121';document.getElementById('raspcont103').style.background='#212121';document.getElementById('raspcont101').style.pointerEvents='none';document.getElementById('raspcont102').style.pointerEvents='none';document.getElementById('raspcont103').style.pointerEvents='none';document.getElementById('raspcont101').style.background='gold';if(raspuns[10][1]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere102(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont101').style.background='#212121';document.getElementById('raspcont102').style.background='#212121';document.getElementById('raspcont103').style.background='#212121';document.getElementById('raspcont101').style.pointerEvents='none';document.getElementById('raspcont102').style.pointerEvents='none';document.getElementById('raspcont103').style.pointerEvents='none';document.getElementById('raspcont102').style.background='gold';if(raspuns[10][2]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}}
function alegere103(){for(var l=0;l<=variante.length-1;l++){document.getElementById('raspcont101').style.background='#212121';document.getElementById('raspcont102').style.background='#212121';document.getElementById('raspcont103').style.background='#212121';document.getElementById('raspcont101').style.pointerEvents='none';document.getElementById('raspcont102').style.pointerEvents='none';document.getElementById('raspcont103').style.pointerEvents='none';document.getElementById('raspcont103').style.background='gold';if(raspuns[10][3]==variante[l]){var_variante[l]++;console.log(var_variante[l])}}};
var aUS=[
["Nasterea&nbsp;&nbsp; unei&nbsp;&nbsp; natiuni"," Intoleranta","Pe &nbsp;&nbsp;aripile&nbsp;&nbsp; vantului ","Ben&nbsp;&nbsp; Hur","Ultimul &nbsp;&nbsp;tarm","Spartacus","Ziua&nbsp;&nbsp; cea&nbsp; &nbsp;mai&nbsp;&nbsp; lunga","Agonie&nbsp;&nbsp; si&nbsp;&nbsp; extaz","Patton","Apocalipsa &nbsp;&nbsp;acum ","Rosii","Gandhi","Plutonul","Inima&nbsp;&nbsp; neinfricata","Salvati&nbsp;&nbsp; soldatul&nbsp;&nbsp; Ryan ","Pianistul","Lista&nbsp;&nbsp; lui&nbsp;&nbsp; Schindler "],
["Napoleon","Patimile&nbsp;&nbsp; Ioanei &nbsp;&nbsp;d Arc","Nimic &nbsp;&nbsp;nou &nbsp;&nbsp;pe &nbsp;&nbsp;frontul&nbsp;&nbsp; de&nbsp;&nbsp; vest","Podul&nbsp;&nbsp; de&nbsp;&nbsp; pe &nbsp;&nbsp;raul&nbsp;&nbsp; Kwai","Lawrence&nbsp;&nbsp; al&nbsp;&nbsp; Arabiei","Un &nbsp;&nbsp;om &nbsp;&nbsp;pentru&nbsp;&nbsp; eternitate","Batalia&nbsp;&nbsp;&nbsp;&nbsp; pentru&nbsp;&nbsp;Algeria","Submarinul","Viata&nbsp;&nbsp; e &nbsp;&nbsp; frumoasa"],
["Crucisatorul&nbsp;&nbsp; Potemkin","Ivan &nbsp;&nbsp;cel &nbsp;&nbsp;Groaznic","Zboara &nbsp;&nbsp;cocorii ","Donul&nbsp;&nbsp; linistit","Destinul&nbsp;&nbsp; unui &nbsp;&nbsp; om","Andrei&nbsp;&nbsp; Rubleov","Amiralul","Stalingrad","Alexandr&nbsp;&nbsp; Nevsky"],
["Independenta&nbsp;&nbsp; Romaniei","Tudor","Dacii","Columna","Mihai &nbsp;&nbsp;Viteazul","Mircea","Pentru&nbsp;&nbsp; patrie","Padurea&nbsp;&nbsp; spanzuratilor","Stefan&nbsp;&nbsp; cel&nbsp;&nbsp; Mare"]
];
var a2=[
["url(http://imgur.com/vDJaoMF.jpg),url(http://imgur.com/bMRESgj.jpg)","url(http://imgur.com/SyFa73a.jpeg),url(http://imgur.com/gtP8Ksx.jpeg)","url(http://imgur.com/jkBAfQE.jpg),url(http://imgur.com/I0Xwj1x.jpg)","url(http://imgur.com/QXmLrwE.jpg),url(http://imgur.com/E0wuL6E.jpg)","url(http://imgur.com/Fr4Rwvt.jpg),url(http://imgur.com/Ii9zOTF.jpg)","url(http://imgur.com/Da6Gykx.jpg),url(http://imgur.com/nZBURmS.jpg)","url(http://imgur.com/yxq5Qj4.jpg),url(http://imgur.com/CbnWJ7w.jpg)","url(http://imgur.com/FGz54we.jpg),url(http://imgur.com/gBuQP85.jpg)","url(http://imgur.com/AAWWxbG.jpg),url(http://imgur.com/vyciqSx.jpg)","url(http://imgur.com/FGSt5gf.jpg),url(http://imgur.com/YuWpJ4u.jpg)","url(http://imgur.com/q5T8T3V.jpg),url(http://imgur.com/YGY9N5r.jpg)","url(http://imgur.com/rzDBviy.jpg),url(http://imgur.com/peP8EkK.jpg)","url(http://imgur.com/I3yikZJ.jpg),url(http://imgur.com/FQhGK5O.jpg)","url(http://imgur.com/fXIbzR8.jpg),url(http://imgur.com/GpwdIM2.jpg)","url(http://imgur.com/Y20AAYk.jpg),url(http://imgur.com/Z4xzzUY.jpg)","url(http://imgur.com/4O5iLco.jpg),url(http://imgur.com/wtYPAPa.jpg)","url(http://imgur.com/xoKopBE.jpg),url(http://imgur.com/l6XQfIq.jpg)"],//"url(imagini/redsimg.jpg),url(imagini/reds.jpg)",
["url(http://imgur.com/3CUPZHW.jpg),url(http://imgur.com/SAZhy1a.jpg)","url(http://imgur.com/icnFbLZ.jpg),url(http://imgur.com/jt9OJn2.jpg)","url(http://imgur.com/rYOBqWf.jpg),url(http://imgur.com/dMxzIgF.jpg)","url(http://imgur.com/tc0CIoB.jpg),url(http://imgur.com/l8KXGPO.jpg)","url(http://imgur.com/qETlSJS.jpg),url(http://imgur.com/9WS9RCT.jpg)","url(http://imgur.com/yfr4lLv.jpg),url(http://imgur.com/HDARwD3.jpg)","url(http://imgur.com/VEeCNgQ.jpg),url(http://imgur.com/uoIvDQ7.jpg)","url(http://imgur.com/Z54boiH.jpg),url(http://imgur.com/vcWcZof.jpg)","url(http://imgur.com/GiHka5D.jpg),url(http://imgur.com/JzWAHmZ.jpg)"],
["url(http://imgur.com/uctOV9j.jpg),url(http://imgur.com/WkA08Mc.jpg)","url(http://imgur.com/GvonZG5.jpg),url(http://imgur.com/IwET2Tx.jpg)","url(http://imgur.com/yDqDfu4.jpg),url(http://imgur.com/qdjvRUr.jpg)","url(http://imgur.com/ox8Q8Ec.jpg),url(http://imgur.com/DwdSG5W.jpg)","url(http://imgur.com/2NSTFAr.jpg),url(http://imgur.com/u6ZsSOd.jpg)","url(http://imgur.com/3El3yww.jpg),url(http://imgur.com/PHqBNYA.jpg)","url(http://imgur.com/JfPjjOU.jpg),url(http://imgur.com/YaI7f4D.jpg)","url(http://imgur.com/Yq5ru5C.jpg),url(http://imgur.com/lz9k8m4.jpg)","url(http://imgur.com/fVGSVDh.jpg),url(http://imgur.com/iiuQzFE.jpg)"],
["url(http://imgur.com/ffbHt47.jpg),url(http://imgur.com/rdNymny.jpg)","url(http://imgur.com/CmDTIIZ.jpg),url(http://imgur.com/FH0zbUd.jpg)","url(http://imgur.com/a4Fb6Bw.jpg),url(http://imgur.com/pvERQIZ.jpg)","url(http://imgur.com/4mBCOW0.jpg),url(http://imgur.com/1NVClXw.jpg)","url(http://imgur.com/pzcWTLe.jpg),url(http://imgur.com/pafdt7e.jpg)","url(http://imgur.com/El9zO7a.jpg),url(http://imgur.com/prVtDPr.jpg)","url(http://imgur.com/1tnYWC5.jpg),url(http://imgur.com/Wqn4AQd.jpg)","url(http://imgur.com/dfTItG1.jpg),url(http://imgur.com/MUuzXAk.jpg)","url(http://imgur.com/pPkFt9x.jpg),url(http://imgur.com/rPTfNPF.jpg)"]
]
var a3=[
["5%, 0 20%","5%, 0 50%","5%, 0 35%","5%, 0 70%","5%, 0 30%","5%, 0 60%","5%, 0 55%","5%, 0 40%","5%, 0 40%","5%, 0 45%","5%, 0 25%","5%, 0 25%","5%, 0 25%","5%, 0 25%","5%, 0 60%","5%, 0 50%","5%, 0 45%"],
["5%, 0 20%","5%, 0 30%","5%, 0 10%","5%, 0 40%","5%, 0 40%","5%, 0 30%","5%, 0 20%","5%, 0 25%","5%, 0 45%"],
["5%, 0 35%","5%, 0 40%","5%, 0 50%","5%, 0 25%","5%, 0 30%","5%, 0 20%","5%, 0 25%","5%, 0 40%","5%, 0 10%"],
["5%, 0 20%","5%, 0 45%","5%, 0 30%","5%, 0 30%","5%, 0 30%","5%, 0 30%","5%, 0 25%","5%, 0 40%","5%, 0 20%"]
];
var a4=[
["no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat"],
["no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat"],
["no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat"],
["no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat","no-repeat,no-repeat"]
];
var a5=[
['5.7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%'],
['7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%'],
['7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%'],
['7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%','7%,100%']
];

 
 
var roman=["","I","II","III","IV","V","VI","VII","VIII","IX","X"];
var intrebari=[
[],
["Ce te face cel mai fericit din aceste opţiuni?","să ai o carieră de succes","să călătoreşti","să ajuţi lumea"],
["Pentru tine, care este cel mai important membru al unei echipe?","cel ce vine cu idei","cel practic","cel ce menţine moralul"],
["Dacă te afli într-un conflict cu o altă persoană, cum consideri că este cel mai bine să acţionezi?","să baţi cealaltă persoană","să pleci","să încerci să rezolvi conflictul într-un mod paşnic"],
["După părerea ta, dintre următoarele meserii, care este cea mai importantă?","soldatul","inginerul","doctorul"],
["Dacă 2 dintre următoarele opţiuni ar trebui să moară, care opţiune consideri că trebuie să rămână în viaţă?","un criminal de război, ce are leacul pentru cancer","savantul care ştie cum să elimine efectele radiaţiilor","un bebeluş şi un căţeluş"],
["Câţiva copii au construit o plută de o persoană. Cum crezi că ar trebui să fie repartizat timpul pe ea?","toată lumea să stea la fel de mult","cei care au venit cu ideea să stea mai mult decât ceilalţi","să stea pe ea doar cei ce au lucrat la ea"],
["Dacă primeşti o sumă de bani, cum consideri că ar fi cel mai bine să îi foloseşti?","să îţi cumperi un animal","să mergi la un concert cu ei","să cumperi lucruri folositoare pentru locul de muncă"],
["De ce citeşti cărţi?","pentru a urmări o poveste intersantă","pentru a te informa","pentru mesajul acestora"],
["Consideri proverbul 'Ochi pentru ochi şi dinte pentru dinte' valabil?","da","nu","doar când este în favoarea mea"],
["Dacă ai fi un salvamar, iar un val răstoarnă două bărci, una cu 4 persoane necunoscute şi cealaltă, aflată la o distanţă mai mare, cu 2 persoane iubite. Ce vei face dacă ai la dispoziţie o barcă cu 2 locuri?","salvezi persoanele din barca cu 4 locuri","salvezi persoanele din barca cu 2 locuri","te duci după o barcă rapidă cu 6 locuri, cu posibilitatea de a salva pe toată lumea sau a pierde pe toată lumea"]

];
var k=0;
var intreb=[],intrebare=[],intrebare2=[],rasp=[],elem,raspcont=[];
var raspuns=[
[],
["","munca","nepasare","iubire"],
["","logic","munca","nepasare"],
["","razb","nepasare","pace"],
["","razb","logic","iubire"],
["","razb","pace","iubire"],
["","pace","logic","munca"],
["","iubire","nepasare","munca"],
["","iubire","logic","munca"],
["","razb","pace","nepasare"],
["","logic","iubire","munca"]
]
var rezfilm=[
["http://imgur.com/Y20AAYk.jpg","Salvați soldatul Ryan (1998) prezintă un episod din timpul debarcării în Normandia. Regizor este Steven Spielberg, iar rolul principal este interpretat de Tom Hanks. La mai multe decenii după terminarea celui de-al Doilea Război Mondial, filmul nu mai tratează ideea eroismului în război, punând în evidență aspecte naturaliste ale războiului."],
["http://imgur.com/q5T8T3V.jpg","Roșii (1981), în regia lui Warren Beatty, este evocarea biografiei ziaristului american John Reed, autorul faimoasei cărți 10 zile care au schimbat lumea și în care prezintă Revoluția bolșevică la care a fost martor. Revenit în Statele Unite, John Reed încearcă să înființeze un partid comunist. Filmul se bucură de participarea unor actori de mare calitate precum Warren Beatty, Diane Keaton, Jack Nicholson."],
["http://imgur.com/tc0CIoB.jpg","Podul de pe râul Kwai (1957) este în regia lui David Lean. Un film a cărui acţiune este desfăşurată pe fundalul celui de-al Doilea Război Mondial pe frontul din Birmania, unde armata britanică luptă împotriva japonezilor. În schimbul unei situaţii mai bune a prizonierilor britanici, colonelul britanic Nicholson (interpretat de Alec Guiness) va face un pod cu importanţă strategică pe râul Kwai. În final podul este distrus de un comando britanic condus de ofiţerul american evadat Shears, distruge podul."],
["http://imgur.com/jkBAfQE.jpg","Pe aripile vântului (1939) este ecranizarea romanului cu acelaşi nume scris de Margaret Mitchell. Filmul are ca subiect un destin individual (al răsfăţatei sudiste Scarlett O’Hara) în timpul Războiului de secesiune. Pelicula a fost regizat de Victor Fleming şi a intrat în istoria celei de-a şaptea arte prin interpretarea fabuloasă a lui Vivien Leigh (în rolul lui Scarlett O’Hara) şi a lui Clark Gable (Rhett Butler). Din punct de vedere istoric, filmul redă o fidelă reconstituire a costumelor, mediului şi mentalităţii Sudului în timpul războiului civil din America. Este antologică secvenţa incendiului din Atlanta(1864), un fapt real din timpul războiului."],
["http://imgur.com/rYOBqWf.jpg","Nimic nou pe frontul de vest (1930), a fost realizat de regizorul Lewis Milestone după romanul faimos al scriitorului german Erich Maria Remarque. Este, aşadar, o condamnare a Primului Război Mondial şi, evident, un film antirăzboinic şi, din acest motiv, a fost interzis, ca şi cartea după care a fost turnat filmul, în Germania nazistă. Filmul abundă de secvenţe semnificative în ceea ce priveşte mesajul, de exemplu, soarta tragică a personajului principal din finalul filmului."],
["http://imgur.com/rzDBviy.jpg","Gandhi (1982), în regia lui Richard Attenborough, este o prezentare a activității marii personalități care a fost Gandhi, eliberatorul Indiei. Ceea ce este extraordinar, este faptul că India a devenit o țară liberă în urma unei mișcări nonviolente. Arma sa a fost rezistenţa prin necooperare civilă cu asupritorii britanici. Pentru a câştiga lupta împotriva răului fără violenţă, el a ales să facă vizibilă nedreptatea. Perseverenţa tipic orientală a fost o altă armă imbatabilă, insuflând naţiunii indiene din propria sa putere de a răbda suferinţele. Albert Einstein spunea despre Mahatma Gandhi că „generaţiile viitoare se vor întreba dacă un astfel de om chiar a existat pe Pământ”. În rolul principal este Ben Kingsley."],
["http://imgur.com/I3yikZJ.jpg","Plutonul (1986). La 15 ani de la terminarea războiului din Vietnam, societatea americană era încă traumatizată de acest eveniment tragic. În această atmosferă a fost turnat filmul Plutonul, în regia lui Oliver Stone. Filmul narează ororile războiului din Vietnam prin ochii soldaţilor unui pluton american în timp ce patrulează, luptă şi mor în junglele Vietnamului. Creații remarcabile au actorii Tom Berenger, Johnny Depp, Charlie Sheen."],
["http://imgur.com/GiHka5D.jpg","Viaţa e frumoasă este o capodoperă a cineastului italian Roberto Benigni, realizată în 1997. Este o operă de artă uimitoare, deoarece prezintă momentul atât de tragic al Holocaustului într-un mod absolut neaşteptat sub formă comică. Pentru a salva inocenţa băiatului său, Giosue, Guido (evreu italian internat într-un lagăr de concentrare) îi prezintă acestuia prizonieratul ca pe un joc. Acelaşi Roberto Benigni  joacă rolul lui Guido. Acest film magnific a primit 3 premii Oscar. "]

]
var variante=["munca","nepasare","iubire","logic","razb","pace"];
var munca=0,nepasare=0,iubire=0,logic=0,razb=0,pace=0;
var var_variante=[munca,nepasare,iubire,logic,razb,pace];
var filme;
var locatie=[
[0,14],
[0,10],
[1,3],
[0,2],
[1,2],
[0,11],
[0,12],
[1,8]
];
function selectare()
{	
	window.localStorage.setItem("categorie",locatie[filme][0]);
	window.localStorage.setItem("film",locatie[filme][1]);
	window.localStorage.setItem("titlu",aUS[locatie[filme][0]][locatie[filme][1]]);
	window.localStorage.setItem("bgimg",a2[locatie[filme][0]][locatie[filme][1]]);
	window.localStorage.setItem("bgpos",a3[locatie[filme][0]][locatie[filme][1]]);
	window.localStorage.setItem("bgrep",a4[locatie[filme][0]][locatie[filme][1]]);
	window.localStorage.setItem("bgsize",a5[locatie[filme][0]][locatie[filme][1]]);
	pa();
}
function pa()
{
	window.location="film.html";
}
function vezifilm(i){
	k++;
	filme=i;
	blurr=document.createElement('div');
	blurr.id='blur';
	blurr.style.transition='0.5s all';
	blurr.style.zIndex='5';
	blurr.style.position='fixed';
	blurr.style.top=0;
	blurr.style.width='100%';
	blurr.style.height='100%';
	blurr.style.backgroundColor='black';
	blurr.style.opacity=0;
	document.body.appendChild(blurr);
	
	poster=document.createElement('img');
	poster.src=rezfilm[i][0];
	poster.id='poster';
	poster.style.position='fixed';
	poster.style.top='50%';
	poster.style.left='85%';
	poster.style.transform='translate(-85%,-50%)';
	poster.style.border='15px solid black';
	poster.style.transition='0.5s all';
	poster.style.height=0.8*y0+'px';
	poster.style.zIndex='6';
	poster.style.opacity=0;
	poster.style.boxShadow='0px 0px 15px gold';
	document.body.appendChild(poster);
	
	desc=document.createElement('div');
	desc.id='desc';
	desc.style.transition='0.5s all';
	desc.style.position='fixed';
	desc.style.left='5%';
	desc.style.transform='translate(-5%,0%)';
	desc.style.height=0.3*y0+'px';
	desc.style.width=0.4*x0+'px';
	desc.style.top=0.1*y0+'px';
	desc.style.color='white';
	desc.style.fontFamily='museo';
	desc.className="resizeText"+k;
	desc.innerHTML=rezfilm[i][1];
	desc.style.background='rgba(0,0,0,1)';
	desc.style.border='15px solid black';
	desc.style.textAlign='center';
	desc.style.zIndex='7';
	desc.style.opacity=0;
	desc.style.boxShadow='0px 0px 15px gold';
	document.body.appendChild(desc);
	
	document.getElementById('nextfilm').style.top=0.55*y0+'px';
	document.getElementById('nextfilm').style.fontSize=0.1*y0+'px';
	document.getElementById('imggo').style.height=0.1*y0+'px';
	document.getElementById('nextfilm').style.zIndex='7';
	document.getElementById('nextfilm').onclick=function(){ selectare();}
	
	setTimeout(function(){
		document.getElementById('blur').style.opacity=0.5;
	},500);
	setTimeout(function(){
		document.getElementById('poster').style.opacity=1;
	},1500);
	setTimeout(function(){
		document.getElementById('desc').style.opacity=1;
	},2000);
	setTimeout(function(){
		document.getElementById('nextfilm').style.opacity=1;
	},2500);
	
	$('.resizeText41').resizeText41();
	
	
}


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
	document.getElementById('cetest').style.fontSize=0.1*y0+'px';
	document.getElementById('cetest').style.marginTop=0.12*y0+'px';
	document.getElementById('pang').style.height=0.3*y0+'px';
	document.getElementById('pang').style.marginTop=-0.15*y0+'px';
	document.getElementById('pang').style.width=1.2*x0+'px';
	document.getElementById('expl').style.height=0.3*y0+'px';
	document.getElementById('intro').style.height=0.8*0.3*y0+'px';
	
	
	$(".resizeText0").resizeText0();
	setTimeout(function(){document.getElementById('cetest').style.opacity=1;},1000);
	setTimeout(function(){document.getElementById('pang').style.opacity=1;
	document.getElementById('expl').style.opacity=1;
	},2000);
	
	for(var i=1;i<=10;i++)
	{	
		intreb[i]=document.createElement('div');
		intreb[i].id='intreb'+i;
		intreb[i].style.marginLeft=Math.pow(-1,i)*x0+'px';
		intreb[i].style.marginRight='auto';
		intreb[i].style.display='block';
		intreb[i].style.width=0.6*x0+'px';
		intreb[i].style.height=0.4*y0+'px';
		intreb[i].style.marginTop=0.15*y0+'px';
		intreb[i].style.borderRadius='25px';
		intreb[i].style.padding='3%';
		intreb[1].style.marginTop=0.3*y0+'px';
		intreb[i].style.position='relative';
		intreb[i].className='hideme';
		intreb[i].style.background="rgba(40,0,0,0.6)";
		intreb[i].style.boxShadow='0px 0px 35px #600000';
		document.body.appendChild(intreb[i]);
		intrebare[i]=document.createElement('div');
		intrebare[i].id='intrebare'+i;
		intrebare[i].innerHTML='intrebarea '+roman[i];
		intrebare[i].style.color='white';
		intrebare[i].style.fontFamily='bebasbold';
		intrebare[i].style.position='relative';
		intrebare[i].style.display='block';
		intrebare[i].style.width=0.3*x0+'px';
		intrebare[i].style.fontSize=0.05*y0+'px';
		intrebare[i].style.left='50%';
		intrebare[i].style.transform='translate(-50%,0%)';
		intrebare[i].style.boxShadow='0px 0px 25px #212121';

		intrebare[i].style.background="rgba(0,0,0,0.8)";
		intrebare[i].style.borderRadius='25px';
		document.getElementById('intreb'+i).appendChild(intrebare[i]);
		intrebare2[i]=document.createElement('div');
		k++;
		intrebare2[i].id='intrebare2'+i;
		intrebare2[i].className="resizeText"+k;
		
		intrebare2[i].innerHTML=intrebari[i][0];
		intrebare2[i].style.color='white';
		intrebare2[i].style.fontFamily='bebasbook';
		intrebare2[i].style.position='relative';
		intrebare2[i].style.display='table-cell';
		intrebare2[i].style.width=0.9*0.6*x0+'px';
		intrebare2[i].style.height=0.15*y0+'px';
		intrebare2[i].style.fontSize=0.05*y0+'px';
		intrebare2[i].style.left=0.05*0.6*x0+'px';
		intrebare2[i].style.top=0.025*y0+'px';
		intrebare2[i].style.borderRadius='25px';
		intrebare2[i].style.background="rgba(40,0,0,0.8)";
		intrebare2[i].style.verticalAlign='middle';
		intrebare2[i].style.textShadow='0px 0px 5px #212121';
		intrebare2[i].style.boxShadow='0px 0px 15px #212121';
		
		document.getElementById('intreb'+i).appendChild(intrebare2[i]);
		for(var j=1;j<=3;j++)
		{	k++;
			raspcont[k]=document.createElement('div');
			raspcont[k].id='raspcont'+i+""+j;
			raspcont[k].style.marginLeft=0.07*0.3*x0+'px';
			raspcont[k].style.width=0.2*0.6*x0+'px';
			raspcont[k].style.height=0.1*y0+'px';
			raspcont[k].style.display='inline-table';
			raspcont[k].style.marginTop=0.05*y0+'px';
			raspcont[k].style.background='#131D3F';
			raspcont[k].style.borderRadius='25px';
			raspcont[k].style.padding='1%';
			raspcont[k].style.verticalAlign='middle';
			raspcont[k].style.transition='0.3s all';
			raspcont[k].style.cursor='pointer';
			raspcont[k].style.boxShadow='0px 0px 25px #000000';
			document.getElementById('intreb'+i).appendChild(raspcont[k]);
			
			rasp[k]=document.createElement('div');
			rasp[k].id='rasp'+""+i+""+j;
			var nume=rasp[k].id;
			var num1 = parseInt(nume[nume.length-2]);
			var num2 = parseInt(nume[nume.length-1]);
			rasp[k].className="resizeText"+k;
			rasp[k].innerHTML=intrebari[i][j];
			rasp[k].style.textShadow='0px 0px 5px black';
			rasp[k].style.width=0.3*0.6*x0+'px';
			rasp[k].style.height=0.1*y0+'px';
			rasp[k].style.display='table-cell';
			rasp[k].style.fontFamily='bebasbold';
			rasp[k].style.color='white';
			
			rasp[k].style.verticalAlign='middle';
			
			document.getElementById('raspcont'+i+""+j).appendChild(rasp[k]);
		}
		
		
		
		
	}
	gata=document.createElement('div');
	gata.style.display='inline-block';
	gata.style.position='relative';
	gata.style.textAlign='center';
	gata.style.borderRadius='25px';
	gata.style.boxShadow='0px 0px 5px #600000';
		gata.id='gata';
		gata.className='opac';
		gata.style.opacity=0;
		gata.innerHTML='AFLĂ REZULTATUL';
		gata.style.fontSize=0.1*y0+'px';
		gata.style.background='linear-gradient(to bottom, #470001, #190a05)';
		gata.style.marginTop=0.1*y0+'px';
		gata.style.padding='1%';
		gata.style.color='white';
		gata.style.textShadow='0px 0px 5px black';
		gata.style.fontFamily='bebasbold';
		gata.onclick=function(){vezirez()};
		gata.style.cursor='pointer';
		document.body.appendChild(gata);
		
	filler=document.createElement('div');
	filler.style.display='block';
	filler.style.marginTop=0.1*y0+'px';
	document.body.appendChild(filler);
	
	function vezirez(){
		document.getElementById('nextfilm').style.cursor='pointer';
		if(var_variante[4]>=var_variante[5])
		{
			if(var_variante[0]>var_variante[1])
			{
				if(var_variante[3]>=var_variante[2])
				{
					vezifilm(0);
				}else{vezifilm(1);}
			}else{
				if(var_variante[3]>=var_variante[2])
				{
					vezifilm(2);
				}else{vezifilm(3);}}
		}else{
			if(var_variante[0]>var_variante[1])
			{
				if(var_variante[3]>=var_variante[2])
				{
					vezifilm(4);
				}else{vezifilm(5);}
			}else{
				if(var_variante[3]>=var_variante[2])
				{
					vezifilm(6);
				}else{vezifilm(7);}}
		}
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
$('.resizeText13').resizeText13();
$('.resizeText14').resizeText14();
$('.resizeText15').resizeText15();
$('.resizeText16').resizeText16();
$('.resizeText17').resizeText17();
$('.resizeText18').resizeText18();
$('.resizeText19').resizeText19();
$('.resizeText20').resizeText20();
$('.resizeText21').resizeText21();
$('.resizeText22').resizeText22();
$('.resizeText23').resizeText23();
$('.resizeText24').resizeText24();
$('.resizeText25').resizeText25();
$('.resizeText26').resizeText26();
$('.resizeText27').resizeText27();
$('.resizeText28').resizeText28();
$('.resizeText29').resizeText29();
$('.resizeText30').resizeText30();
$('.resizeText31').resizeText31();
$('.resizeText32').resizeText32();
$('.resizeText33').resizeText33();
$('.resizeText34').resizeText34();
$('.resizeText35').resizeText35();
$('.resizeText36').resizeText36();
$('.resizeText37').resizeText37();
$('.resizeText38').resizeText38();
$('.resizeText39').resizeText39();
$('.resizeText40').resizeText40();
$('.resizeText41').resizeText41();
$('.resizeText42').resizeText42();
$('.resizeText43').resizeText43();
$('.resizeText44').resizeText44();
$('.resizeText45').resizeText45();
$('.resizeText46').resizeText46();
$('.resizeText47').resizeText47();
$('.resizeText48').resizeText48();
$('.resizeText49').resizeText49();
$('.resizeText50').resizeText50();
$('.resizeText51').resizeText51();
$('.resizeText52').resizeText52();
$('.resizeText53').resizeText53();
$('.resizeText54').resizeText54();
$('.resizeText55').resizeText55();
$('.resizeText56').resizeText56();
$('.resizeText57').resizeText57();
$('.resizeText58').resizeText58();
$('.resizeText59').resizeText59();
$('.resizeText60').resizeText60();
$('.resizeText61').resizeText61();


	document.getElementById('rasp11').onclick=function(){alegere11()};
document.getElementById('rasp12').onclick=function(){alegere12()};
document.getElementById('rasp13').onclick=function(){alegere13()};
document.getElementById('rasp21').onclick=function(){alegere21()};
document.getElementById('rasp22').onclick=function(){alegere22()};
document.getElementById('rasp23').onclick=function(){alegere23()};
document.getElementById('rasp31').onclick=function(){alegere31()};
document.getElementById('rasp32').onclick=function(){alegere32()};
document.getElementById('rasp33').onclick=function(){alegere33()};
document.getElementById('rasp41').onclick=function(){alegere41()};
document.getElementById('rasp42').onclick=function(){alegere42()};
document.getElementById('rasp43').onclick=function(){alegere43()};
document.getElementById('rasp51').onclick=function(){alegere51()};
document.getElementById('rasp52').onclick=function(){alegere52()};
document.getElementById('rasp53').onclick=function(){alegere53()};
document.getElementById('rasp61').onclick=function(){alegere61()};
document.getElementById('rasp62').onclick=function(){alegere62()};
document.getElementById('rasp63').onclick=function(){alegere63()};
document.getElementById('rasp71').onclick=function(){alegere71()};
document.getElementById('rasp72').onclick=function(){alegere72()};
document.getElementById('rasp73').onclick=function(){alegere73()};
document.getElementById('rasp81').onclick=function(){alegere81()};
document.getElementById('rasp82').onclick=function(){alegere82()};
document.getElementById('rasp83').onclick=function(){alegere83()};
document.getElementById('rasp91').onclick=function(){alegere91()};
document.getElementById('rasp92').onclick=function(){alegere92()};
document.getElementById('rasp93').onclick=function(){alegere93()};
document.getElementById('rasp101').onclick=function(){alegere101()};
document.getElementById('rasp102').onclick=function(){alegere102()};
document.getElementById('rasp103').onclick=function(){alegere103()};
	setTimeout(function(){
		$(window).scroll( function(){
    
       
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'margin-left':0.18*x0+'px'},500);
                    
            }
            
        }); 
    
    });
	},1000);
	
	setTimeout(function(){
		$(window).scroll( function(){
    
       
        $('.opac').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
	},1000);
}