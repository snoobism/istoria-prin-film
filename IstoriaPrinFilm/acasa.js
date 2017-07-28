var y0=window.screen.availHeight;
var x0=window.screen.availWidth;

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
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
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
$.fn.resizeText3 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:0;margin:0;border:0;outline:0"
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
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:2%;margin:0;border:0;outline:0"
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

$.fn.resizeText5 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText5.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText5.interval)
            clearTimeout($.resizeText5.interval)

        $.resizeText5.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText5();
	    }, 300);
    });
}

$.resizeText5 = {
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
                $.resizeText5.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};

$.fn.resizeText6 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText6.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText6.interval)
            clearTimeout($.resizeText6.interval)

        $.resizeText6.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText6();
	    }, 300);
    });
}

$.resizeText6 = {
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
                $.resizeText6.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText7 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding-top:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText7.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText7.interval)
            clearTimeout($.resizeText7.interval)

        $.resizeText7.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText7();
	    }, 300);
    });
}

$.resizeText7 = {
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
                $.resizeText7.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
$.fn.resizeText8 = function () {
    var width = $(this).innerWidth();
    var height = $(this).innerHeight();
    var newElem = $("<div>", {
        html: $(this).html(),
        style: "display: inline-block;overflow:hidden;font-size:0.1em;padding:2%;margin:0;border:0;outline:0"
    });
    
    $(this).html(newElem);
    $.resizeText8.increaseSize(10, 0.1, newElem, width, height);
    
    $(window).resize(function () {
        if ($.resizeText8.interval)
            clearTimeout($.resizeText8.interval)

        $.resizeText8.interval = setTimeout(function () {
			elem.html(elem.find("div.createdResizeObject").first().html());
		    elem.resizeText8();
	    }, 300);
    });
}

$.resizeText8 = {
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
                $.resizeText8.increaseSize(increment / 10, fontSize, newElem, width, height);
            }
        }
    }
};
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
	var audio = new Audio('audio/audiostart.mp3');
	
	
	document.getElementById('film').style.width=x0+'px';
	document.getElementById('film').style.height=0.4*y0+'px';
	
	document.getElementById('vidacasa').width=x0;
	
	
	document.getElementById('textfilm').style.width=0.35*x0+'px';
	document.getElementById('textfilm').style.height=0.7*0.4*y0+'px';
	document.getElementById('textfilm').style.marginLeft=0.05*x0+'px';
	document.getElementById('textfilm').style.marginTop=0.15*0.4*y0+'px';
	document.getElementById('titlufilm').style.width=0.4*x0+'px';
	document.getElementById('titlufilm').style.height=0.8*0.45*0.4*y0+'px';
	document.getElementById('titlufilm').style.marginLeft=0.55*x0+'px';
	document.getElementById('titlufilm').style.marginTop=0.28*0.4*y0+0.1*0.8*0.45*0.4*y0+'px';
	$(".resizeText1").resizeText1();
	
	var f=document.getElementsByClassName("resizeText0");
	
	$(".resizeText0").resizeText0();
	
	document.getElementById('film2').style.width=x0+'px';
	document.getElementById('film2').style.height=0.4*y0+'px';
	
	document.getElementById('textfilm2').style.width=0.35*x0+'px';
	document.getElementById('textfilm2').style.height=0.7*0.4*y0+'px';
	document.getElementById('textfilm2').style.marginLeft=0.55*x0+'px';
	document.getElementById('textfilm2').style.marginTop=0.15*0.4*y0+'px';
	document.getElementById('titlufilm2').style.width=0.4*x0+'px';
	document.getElementById('titlufilm2').style.height=0.8*0.45*0.4*y0+'px';
	document.getElementById('titlufilm2').style.marginLeft=0.05*x0+'px';
	document.getElementById('titlufilm2').style.marginTop=0.35*0.4*y0+0.1*0.8*0.45*0.4*y0+'px';
	$(".resizeText3").resizeText3();
	
	var f=document.getElementsByClassName("resizeText4");
	
	$(".resizeText4").resizeText4();
	
	
	document.getElementById("titlu").style.marginTop=0.14*y0+"px";
	
	document.getElementById("span1").style.fontSize=0.05*y0+"px";
	document.getElementById("span2").style.fontSize=0.05*y0+"px";
	document.getElementById("span3").style.fontSize=0.05*y0+"px";
	
	document.getElementById("camerastart").style.width=0.3*x0+"px";
	document.getElementById("camerastart").style.transition="2s all";
	document.getElementById("camerastart").style.marginLeft=-0.15*x0+"px";
	document.getElementById("camerastart").style.left="50%";
	document.getElementById("camerastart").style.marginTop=-0.15*x0*0.78+"px";
	document.getElementById("camerastart").style.top="50%";
	
	document.getElementById("roll").style.height=0.8*y0+"px";	
	document.getElementById("roll").style.left="100%";
	document.getElementById("roll").style.marginTop=-0.4*y0+"px";
	document.getElementById("roll").style.top="50%";
	
	document.getElementById("vintage").style.width=0.5*x0+"px";
	
	document.getElementById('aplic').style.height=0.4*y0+'px';

	document.getElementById('titluaplic').style.width=0.8*x0+'px';
	document.getElementById('titluaplic').style.height=0.1*y0+'px';
	document.getElementById('titluaplic').style.marginLeft=0.1*x0+'px';

	
	document.getElementById("aplic_elem1").style.width=0.5*x0+'px';
	document.getElementById("aplic_elem1").style.height=0.1*y0+'px';
	document.getElementById("aplic_elem1").style.marginLeft=0.25*x0+'px';
		
	document.getElementById("aplic_elem2").style.width=0.5*x0+'px';
	document.getElementById("aplic_elem2").style.height=0.1*y0+'px';
	document.getElementById("aplic_elem2").style.marginLeft=0.25*x0+'px';
		
	document.getElementById("aplic_elem3").style.width=0.5*x0+'px';
	document.getElementById("aplic_elem3").style.height=0.1*y0+'px';
	document.getElementById("aplic_elem3").style.marginLeft=0.25*x0+'px';
		
	document.getElementById('realiz').style.width=x0+'px';
	document.getElementById('realiz').style.height=0.4*y0+'px';
	
	document.getElementById('recomanda').style.fontSize=0.1*y0+'px';
	
	
	for(var i=1;i<=3;i++)
	{
		document.getElementById('p'+i).style.fontSize=0.05*y0+'px';
		document.getElementById('p'+i).style.paddingTop=0.0625*y0+'px';
		document.getElementById('p'+i).style.display='block';
		document.getElementById('p'+i).style.textAlign='center';
	}
	
	$(".resizeText5").resizeText5();
	$(".resizeText6").resizeText6();
	$(".resizeText7").resizeText7();
	$(".resizeText8").resizeText8();
	
	setTimeout(function(){
		document.getElementById("camerastart").style.left="50%";
		document.getElementById("camerastart").style.opacity="1";
		audio.volume=0.3;
		audio.play();
	},1000)
	setTimeout(function(){
		document.body.style.transition="2s all";
		document.body.style.background="#190003";
		document.getElementById("camerastart").style.left="-50%";
		myAudio = new Audio('audio/background.mp3'); 
		myAudio.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);
		myAudio.play();
	},4000)
	var viteza=1.5;
	var dist=15.46*0.8*y0;
	setTimeout(function(){
		
		document.getElementById("roll").style.transition="13s all ease-in-out";
		document.getElementById("roll").style.left=-dist+"px";
	
	},6000)

	setTimeout(function(){
		document.getElementById("lista").style.transition="3s all";
		document.getElementById("lista").style.opacity=1;
		var vid = document.getElementById("vidacasa");
		vid.autoplay = true;
		vid.load();
		vid.loop = true;
		vid.style.opacity=1;
	},20000)
	setTimeout(function(){
		document.getElementById("span1").style.opacity=1;
		document.getElementById("span1").style.fontSize=0.11*y0+"px";
	},22000);
	setTimeout(function(){
		
		document.getElementById("span2").style.opacity=1;
		document.getElementById("span2").style.fontSize=0.11*y0+"px";
	
	},23000);
	setTimeout(function(){
	
		document.getElementById("span3").style.opacity=1;
		document.getElementById("span3").style.fontSize=0.11*y0+"px";
	},24000);
	setTimeout(function(){
		document.getElementById("vintage").style.width=0.6*x0+"px";
		document.getElementById("vintage").style.opacity=1;
		document.getElementById('recomanda').style.opacity=1;
	
	},25000);
	setTimeout(function(){
		$(window).scroll( function(){
    
       
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
	},25000);
}