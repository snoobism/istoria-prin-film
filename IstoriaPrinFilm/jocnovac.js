var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var poz=[
	//ocupat,left,bottom
	[0,75,5],
	[0,90,5],
	[0,70,15],
	[0,85,15],
	[0,75,25],
	[0,90,25]

];
var scor=0;
var horsekill=new Audio ('audio/horsedmg.mp3')
var damageinf=new Audio('audio/dmg.mp3')
var dmgcar=new Audio ('audio/damage.mp3');
var chargeaudio = new Audio('audio/charge.mp3');
var musicbg = new Audio('audio/novacmusic.mp3');
var glontaudio = new Audio('audio/fire.mp3');
var horse = new Audio('audio/horse.mp3');
var death= new Audio('audio/death.mp3');

window.onload = function(){
	musicbg.volume=1;
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
	
	document.getElementById('caracter').style.bottom='5%';
	document.getElementById("caracter").style.width=0.3*0.7*y0+'px';
	document.getElementById("caracter").style.height=0.3*0.7*y0+'px';
	
	document.getElementById('info').style.marginTop=0.9*y0+'px';
	document.getElementById('info').style.width=0.9*x0+'px';
	document.getElementById('info').style.height=document.getElementById('instructiuni').offsetHeight;
	
	document.getElementById('pic').style.height=0.3*y0+'px';
	
	document.getElementById('text').style.fontSize=0.063*0.3*y0+'px';
	
	var butonstart=document.createElement("div");
	butonstart.style.width=0.2*0.9*x0+'px';
	butonstart.style.height=0.15*0.7*y0+'px';
	butonstart.innerHTML='START';
	butonstart.style.background='#333333';
	butonstart.style.color='white';
	butonstart.style.fontFamily='bebasregular';
	butonstart.style.textAlign='center';
	butonstart.style.verticalAlign='middle';
	butonstart.style.fontSize=0.05*0.9*x0+'px';
	butonstart.style.position='absolute';
	butonstart.style.left='50%';
	butonstart.style.top='50%';
	butonstart.style.lineHeight=0.15*0.7*y0+'px';
	butonstart.style.transform='translate(-50%,-50%)';
	butonstart.style.cursor='pointer';
	butonstart.id='butonstart';
	butonstart.style.transition='1s all';
	butonstart.style.paddingTop='1%';
	butonstart.onclick=function(){document.getElementById('contjoc').style.backgroundImage='url(jocnovac/novacbg.png)';
	
	
	
	
	start()};
	
	
	
	
	
	$(document).ready(function(){
	$('#butonstart').hover(function(){butonstart.style.backgroundColor='#470001';
	butonstart.style.fontSize=0.06*0.9*x0+'px';},function(){butonstart.style.backgroundColor='#333333';
	butonstart.style.fontSize=0.05*0.9*x0+'px';});
	});
	document.getElementById("contjoc").appendChild(butonstart);
	
	
	
	var hparata=document.createElement('img');
	hparata.style.height=0.05*0.7*y0+'px';
	hparata.id='hpbar';
	hparata.style.display='inline';
	hparata.style.position='absolute';
	hparata.style.left=0.05*0.7*y0+'px';
	hparata.style.top=0.05*0.7*y0+'px';
	document.getElementById("contjoc").appendChild(hparata);
	
	var scorarata=document.createElement('div');
	scorarata.id='scorid';
	scorarata.style.display='inline';
	scorarata.style.position='absolute';
	scorarata.style.right=0.05*0.7*y0+'px';
	scorarata.style.top=0.05*0.7*y0+'px';
	scorarata.innerHTML='SCOR 0';
	scorarata.style.fontFamily='bebasregular';
	scorarata.style.color='white';
	scorarata.style.fontSize='350%';
	scorarata.style.opacity=0;
	document.getElementById('contjoc').appendChild(scorarata);
}
var a=5,switchver=1;
$(document).keydown(function(e) {
	if(switchver==1)
	{
    switch(e.which) {


        case 38: // up
		if(a!=25){
			document.getElementById('caracter').style.transition='0.3s all';
			document.getElementById('caracter').style.bottom=a+10+'%';
			a=a+10;
		}
        break;



        case 40: // down
		if(a!=5){
			document.getElementById('caracter').style.transition='0.3s all';
			document.getElementById('caracter').style.bottom=a-10+'%';
			a=a-10;
		}
        break;
		
		case 88:
		if(cooldown==1)
		{glont();
		}
		break;
		
        default: return; 
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	}
});

var carrun;

function animrun(){
	var l=1;
 carrun=setInterval(function(){
document.getElementById("caracter").src='jocnovac/calanim'+l+'1.png';
l++;

if(l==4)
	l=1;
},150)

}
animrun();
var hp=[];
var cooldown=1,glontfire;
function glont(){
	glontaudio.pause();
	glontaudio.currentTime=0;
	glontaudio.volume=0.35;
	glontaudio.play();
	cooldown=0;var ll=1;
	clearInterval(carrun);
	glontfire=setInterval(function(){
	document.getElementById("caracter").src='jocnovac/calshoot'+ll+'.png';
	ll++;
	if(ll==4){
			
		animrun();	
		clearInterval(glontfire);
	}
	},150)
	if($('#0').length > 0 && document.getElementById('caracter').style.bottom==document.getElementById('0').style.bottom){
		hp[0]=hp[0]-1;
		
	}
	if($('#1').length > 0 && document.getElementById('caracter').style.bottom==document.getElementById('1').style.bottom)
		{
			hp[1]=hp[1]-1;
			
		}
	if($('#2').length > 0 && document.getElementById('caracter').style.bottom==document.getElementById('2').style.bottom){
		hp[2]=hp[2]-1;
	}
	if($('#3').length > 0 && document.getElementById('caracter').style.bottom==document.getElementById('3').style.bottom)
		{
			hp[3]=hp[3]-1;
			
		}
	if($('#4').length > 0 && document.getElementById('caracter').style.bottom==document.getElementById('4').style.bottom){
		hp[4]=hp[4]-1;
	
	}
	if($('#5').length > 0 && document.getElementById('caracter').style.bottom==document.getElementById('5').style.bottom)
		{
			hp[5]=hp[5]-1;
			
		}
	setTimeout(function(){cooldown=1;},500)
	
	console.log(hp[0]+'  '+hp[1]+'  '+hp[2]+'  '+hp[3]+'  '+hp[4]+'  '+hp[5]+'  ')
	
	
}

var bot=[];



function start(){
	musicbg.play();
	musicbg.volume=0.15;
	horse.play();
	document.getElementById('scorid').style.opacity=1;
	var rip2=setInterval(function(){
		
		document.getElementById('hpbar').src='jocnovac/hp'+hpcar+'.png';
		
		if(hpcar<=0)
		{	
			var endx=document.createElement('div');
			endx.id='endid';
			endx.style.borderRadius='15px';
			endx.style.opacity=0;
			endx.style.width=0.5*0.9*x0+'px';
			endx.style.height=0.5*0.7*y0+'px';
			endx.style.left='50%';
			endx.style.top='50%';
			endx.style.display='block';
			endx.style.transform='translate(-50%,-50%)';
			endx.style.position='relative';
			endx.style.backgroundColor='#333333';
			
			endx.style.transition='1s all';
			document.getElementById('contjoc').appendChild(endx);
			var endtxt=document.createElement('div');
			endtxt.style.textAlign='center';
			endtxt.style.color='white';
			endtxt.style.fontFamily='bebasregular';
			endtxt.style.fontSize='350%';
			endtxt.style.display='block';
			endtxt.style.position='relative';
			endtxt.innerHTML='SCOR FINAL: '+scor;
			endtxt.style.borderRadius='15px';
			endtxt.style.paddingTop=0.3*0.5*0.7*y0+'px';
			endtxt.style.paddingBottom=0.2*0.5*0.7*y0+'px';
			endtxt.style.backgroundColor='#333333';
			document.getElementById('endid').appendChild(endtxt);
			
			
			var endbuton=document.createElement('div');
			endbuton.style.textAlign='center';
			endbuton.style.color='white';
			endbuton.style.fontFamily='bebasregular';
			endbuton.style.fontSize='350%';
			endbuton.style.display='block';
			endbuton.style.position='relative';
			endbuton.innerHTML='JOACA&nbsp;&nbsp; IAR';
			endbuton.id='endbuton';
			endbuton.style.borderRadius='15px';
			endbuton.style.paddingTop=0.1*0.5*0.7*y0+'px';
			endbuton.style.paddingBottom=0.1*0.5*0.7*y0+'px';
			endbuton.style.backgroundColor='#252525';
			endbuton.style.transition='1s all';
			endbuton.style.cursor='pointer';
			endbuton.onclick=function(){window.location.reload()};
			document.getElementById('endid').appendChild(endbuton);
			
			
			$(document).ready(function(){
	$('#endbuton').hover(function(){endbuton.style.backgroundColor='#470001';
	;},function(){endbuton.style.backgroundColor='#252525';
	});
	});
			document.getElementById('scorid').style.opacity=0;
			musicbg.pause();
			musicbg.currentTime=0;
			horse.pause();
			horse.currentTime=0;
			clearInterval(glontfire);
			clearInterval(carrun);
			switchver=0;
			clearInterval(inam);
			document.getElementById('caracter').style.filter='grayscale(100%)';
			setTimeout(function(){document.getElementById('contjoc').style.backgroundImage='url(jocnovac/death.png)';},500);
			setTimeout(function(){var xx=1;
			var rip=setInterval(function(){
				
				document.getElementById('caracter').src='jocnovac/poof'+xx+'.png';
				xx++;
				if(xx==10)
				{
					document.getElementById('caracter').src='jocnovac/poof'+1+'.png';
					clearInterval(rip);
					death.play();
					}},100);},1000);
			setTimeout(function(){
				document.getElementById('endid').style.opacity=1;
			},1500);
			$('#hpbar').remove();
			for(i=0;i<=5;i++)
			{
				$('#'+i).remove();
			}
			clearInterval(rip2);
			
			
		}
	},100)
	bara6();
	var inam;
	document.getElementById('caracter').style.left=10+'%';
	$('#butonstart').remove();
	setTimeout(function(){inam=setInterval(function(){if(p<5){creare_inamic()}},1500);},1500);
}





function creare_inamic (){
	var k=Math.round(Math.random() * (9 - 0) + 0);
	if(k>4){
		charge();
	}
	if(k<=4 && k>0)
	{
		wave();
	}
	if(k==0)
	{
		trap();
	}
}

var lung6=0,speed6=0.5;
function bara6(){

	
	lung6=lung6+speed6;
	document.getElementById("contjoc").style.backgroundPosition=lung6+"%"+'0%';
	
	if(lung6==100)
	{
		
		lung6=0;
		
		
	}
	cronometru6();
}
function cronometru6(){
	 q=setTimeout(bara6,10);
	
	
}

function stopbara6(){
	 clearTimeout(q);

	
	 
}

var o=0;
var hpcar=5,p=0;
function charge(){
	var j,lll=1;
	if(p<5){p++;}
	var cautarepoz=1;
	while(cautarepoz!=0)
	{
		j=Math.round(Math.random() * (5 - 0) + 0);
		if(poz[j][0]==0)
		{
			poz[j][0]=1;
			cautarepoz=0;
		}
	}
	var charge=document.createElement('img');
	hp[j]=2;
	charge.style.position='absolute';
	charge.style.height=0.3*0.7*y0+'px';
	charge.style.width=0.3*0.7*y0+'px';
	charge.style.bottom=poz[j][2]+'%';
	charge.id=j;
	bot[j]=poz[j][2];
	bara();
	setInterval(function(){
		charge.src='jocnovac/charge'+lll+'1.png';
		lll++;

		if(lll==4)
			lll=1;
		},75)
	var lung2=poz[j][1];
	
	var lung1=100;
document.getElementById("contjoc").appendChild(charge);
var t,ok;
var b,speed=1;
function bara(){
	
	if(hp[j]==0 || hp[j]<-1)
	{		
		glontaudio.pause();
		glontaudio.currentTime=0;
		 horsekill.pause();
		 horsekill.currentTime=0;
		 horsekill.play();
		 poz[j][0]=0;
		 if(p>0)
		 {
			p--; 
		 }
		 scor=scor+100;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
		 hp[j]=-1;
		 $('#'+j).remove();
		 
		 if(p<5){
		 cautarepoz=1;}
		 return;
	}
	lung1=lung1-speed;
	charge.style.left=lung1+"%";
	
	if(lung1==lung2)
	{	
		stopbara();
		setTimeout(function(){bara2()},2000);
		var verifstare=setInterval(function(){if(hp[j]==0  || hp[j]<-1)
	{	
		
		scor=scor+100;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
		 poz[j][0]=0;
		 if(p>0)
		 {
			p--; 
		 } 
		 hp[j]=-1;
		 $('#'+j).remove();
		 if(p<5){
		 cautarepoz=1;}
		
		 return;
		 
		}o++;
		if(o==250){clearInterval(verifstare)}},10);
	
	}else {cronometru();}
	
	
}
function cronometru(){
	 t=setTimeout(bara,10);
	
	
}

function stopbara(){
	 clearTimeout(t);
	 

	 
}

function bara2(){
	chargeaudio.play();
	o=0;
	lung2=lung2-speed;
	charge.style.left=lung2+"%";
	if(hp[j]==0 || hp[j]<-1)
	{	
		
		scor=scor+100;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
		 poz[j][0]=0;
		
		 if(p>0)
		 {
			p--; 
		 }hp[j]=-1;
		 $('#'+j).remove();
		 if(p<5){
			 
			 cautarepoz=1;}
			 
			 
		return;
	}
	if(charge.style.left==-10+"%")
	{
		stopbara2();
		
		
	}else {cronometru2();}
	if(document.getElementById('caracter').style.bottom==charge.style.bottom && charge.style.left==20+'%' && (hp[j]!=0 && hp[j]!=-1))
		{
			document.getElementById('caracter').style.filter='grayscale(100%)';
			setTimeout(function(){document.getElementById('caracter').style.filter='grayscale(0%)';},500);
			hpcar=hpcar-1;
			dmgcar.pause();
			dmgcar.currentTime=0;
			dmgcar.play();
		}
	
}
function cronometru2(){
	u=setTimeout(bara2,10);
	
	
}

function stopbara2(){
	 clearTimeout(u);
	  if(p<5){cautarepoz=1;hp[j]=-1;}
	 poz[j][0]=0;
	 charge.remove();
	 if(p>0)
		 {
			p--; 
		 }
	scor=scor+25;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
}

}
function trap(){
	var j;
	if(p<5)
	{p++;}
	var cautarepoz=1;
	while(cautarepoz!=0)
	{
		j=Math.round(Math.random() * (5 - 0) + 0);
		if(poz[j][0]==0)
		{
			poz[j][0]=1;
			cautarepoz=0;
		}
	}
	var trap=document.createElement('img');
	
	hp[j]=10;
	trap.style.position='absolute';
	trap.src='jocnovac/trap.png';
	trap.style.height=0.3*0.7*y0+'px';
	trap.style.width=0.3*0.7*y0+'px';
	trap.style.bottom=poz[j][2]+'%';
	trap.id=j;
	bot[j]=poz[j][2];
	bara4();
	var lung4=100;
	document.getElementById("contjoc").appendChild(trap);
	var b,speed=0.1;
function bara4(){

	if(hp[j]==0  || hp[j]<-1)
	{	
		
		 poz[j][0]=0;
		 if(p>0)
		 {
			p--; 
		 } hp[j]=-1;$('#'+j).remove();
		 if(p<5){
		 cautarepoz=1;}
		 
		
		 return;
	}
	lung4=lung4-speed;
	trap.style.left=lung4+"%";
	
	if(trap.style.left==-10+"%")
	{
		stopbara4();
		
		
	}else {cronometru4();}
	if(document.getElementById('caracter').style.bottom==trap.style.bottom && trap.style.left==20+'%' && (hp[j]!=0 && hp[j]!=-1))
		{
			document.getElementById('caracter').style.filter='grayscale(100%)';
			setTimeout(function(){document.getElementById('caracter').style.filter='grayscale(0%)';},500);
			hpcar=hpcar-1;
			dmgcar.pause();
			dmgcar.currentTime=0;
			dmgcar.play();
		}
}
function cronometru4(){
	 b=setTimeout(bara4,10);
	
	
}

function stopbara4(){
	 clearTimeout(b);
	 trap.remove();
	 poz[j][0]=0;
	if(p>0)
		 {
			p--; 
		 }
	 if(p<5){ cautarepoz=1;}
	 scor=scor+25;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
}
}

function wave(){
	var j,u,llll=1;
	if(p<5)
	{p++;}
	var cautarepoz=1;
	while(cautarepoz!=0)
	{
		j=Math.round(Math.random() * (5 - 0) + 0);
		if(poz[j][0]==0)
		{
			poz[j][0]=1;
			cautarepoz=0;
		}
	}
	var wave=document.createElement('img');
	var r=poz[j][2];
	hp[j]=1;
	wave.style.position='absolute';
	wave.style.height=0.3*0.7*y0+'px';
	wave.style.width=0.3*0.7*y0+'px';
	wave.style.bottom=poz[j][2]+'%';
	
	wave.id=j;
	bot[j]=poz[j][2];
	bara5();
	setInterval(function(){
		wave.src='jocnovac/wave'+llll+'.png';
		llll++;

		if(llll==4)
			llll=1;
},150)
	var lung5=100;
	document.getElementById("contjoc").appendChild(wave);
	var b,speed=0.5;
function bara5(){

	if(hp[j]==0  || hp[j]<-1)
	{	scor=scor+100;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
		glontaudio.pause();
		glontaudio.currentTime=0;
		damageinf.pause();
		damageinf.currentTime=0;
		damageinf.play();
		 poz[j][0]=0;
		 if(p>0)
		 {
			p--; 
		 } hp[j]=-1;$('#'+j).remove();
		 if(p<5){
		 cautarepoz=1;}
		 
		
		 return;
	}
	
	if(lung5==80)
	{	
		if(r==25)
		{
			wave.style.bottom=15+'%';
			r=15;
			bot[j]=15;
		}else if(r==15){
			wave.style.bottom=5+'%';
			r=5;
			bot[j]=5;
		}else if(r==5){
			wave.style.bottom=15+'%';
			r=15;
			bot[j]=15;
		}
	}else {
	
	if(lung5==40)
	{
		if(r==25)
		{
			wave.style.bottom=15+'%';
			r=15;
			bot[j]=15;
		}else if(r==15){
			wave.style.bottom=25+'%';
			r=25;
			bot[j]=25;
		}else if(r==5){
			wave.style.bottom=15+'%';
			r=15;
			bot[j]=15;
		}
	}
	}
	lung5=lung5-speed;
	wave.style.left=lung5+"%";
	
	if(wave.style.left==-10+"%")
	{
		stopbara5();
		
		
	}else {cronometru5();}
	if(document.getElementById('caracter').style.bottom==wave.style.bottom && wave.style.left==20+'%' && (hp[j]!=0 && hp[j]!=-1))
		{
			document.getElementById('caracter').style.filter='grayscale(100%)';
			setTimeout(function(){document.getElementById('caracter').style.filter='grayscale(0%)';},500);
			hpcar=hpcar-1;
			dmgcar.pause();
			dmgcar.currentTime=0;
			dmgcar.play();
		}
}
function cronometru5(){
	 u=setTimeout(bara5,10);
	
	
}

function stopbara5(){
	 clearTimeout(u);
	 wave.remove();
	 poz[j][0]=0;
	if(p>0)
		 {
			p--; 
		 }
	 if(p<5){ cautarepoz=1;}
	 scor=scor+25;
		document.getElementById('scorid').innerHTML='SCOR '+scor;
}
}



