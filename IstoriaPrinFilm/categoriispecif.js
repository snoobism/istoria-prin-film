
var y0=window.screen.availHeight;
var x0=window.screen.availWidth;
var a0=["url('imagini/americanflag.jpg')","url('imagini/europeanflag.jpg')","url('imagini/russianflag.jpg')","url('imagini/romanianflag.jpg')"];
var a1=["17","9","9","9"];
var tex=[
	["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
	["<strong>&#8608;</strong> Filmul cu tematica istorica a reprezentat o parte importanta a cinematografiei americane, inca de la inceputurile acestuia. Filmul istoric american a cunoscut o mare inflorire dupa cel de-al Doilea Razboi Mondial.","<strong>&#8608;</strong> Scolile nationale de film europene sunt de o mare diversitate, dar se pot observa anumite trasaturi comune în majoritatea filmelor europene","<strong>&#8608;</strong> Serghei Eisenstein scria, creionând trăsăturile celei de a şaptea arte din Uniunea Sovietică:„Problema nu era, pur şi simplu, să faci filme bune. Şi aici, în acest domeniu al culturii, era necesar să dai o lovitură burgheziei, să i te opui pe calea culturii şi artei, s-o constrângi să asculte şi să respecte ce vine din Ţara Sovietelor, atât de enigmatică şi necunoscută pe atunci. Soluţia mi se impunea cu rigoare aproape matematică. Era necesară o intrigă mai palpitantă decât a americanilor? Şi dacă am  respinge cu totul intriga! Ne trebuiau staruri care să le umbrească pe cele consacrate? Şi dacă am face cel mai neobişnuit dintre lucruri: film fără staruri! Ne trebuiau personalităţi mai puternice decât cele ale eroilor la modă! Să renunţăm la individualităţi, să construim filmul pe cu totul altceva, să facem totul de-a-ndoaselea! Să renunţăm la intrigă, la vedete şi să propunem în centrul dramei, în calitate de personaj fundamental, acea mulţime care servise până atunci, numai ca fundal pentru evoluţia eroului individual.”","<strong>&#8608;</strong> Primul film istoric românesc a fost filmat în 1913 și a fost dedicat evocării Războiului de Independență (1877-1878)."],
	["<strong>&#8608;</strong> O astfel de forma de arta reflecta maretia si puterea SUA dupa terminarea marii conflagratii. Au fost facute superproductii cu bugete uriase (Cleopatra, Ben-Hur, Spartacus etc) care demonstrau forta Statelor Unite, avand in vedere ca americanii erau singurii care putea sa investeasca astfel de resurse uriase in superproductii cu caracter istoric.","<strong>&#8608;</strong> Filmul istoric reliefeaza o componenta a identitatii nationale sau a unei identităţi comune europene, prin intermediul unor evenimente sau personaje.","<strong>&#8608;</strong> Cinematografia sovietică a reprezentat o modalitate prin care regimul totalitar comunist a prezentat, în scop de propagandă, istoria Rusiei și a Uniunii Sovietice. Marii cineaști sovietici au izbutit însă performanța de a îmbina această cerință ideologică cu valoarea estetică deosebit de înaltă a creației lor.","<strong>&#8608;</strong> După ce România a devenit un stat comunist, filmul cu tematică istorică a ocupat un loc important în activitatea cinematografică. Filmul istoric avea o funcție bine stabilită, de a oglindi trecutul de luptă al poporului pentru independență. Acest fapt corespundea cu politica oficială a Partidului Comunist Român, care inițiase o politică de independență față de URSS, la sfârșitul guvernării lui Gheorghe Gheorghiu Dej și în timpul regimului național-comunist (perioada Nicolae Ceaușescu). De aici și greșelile istorice întâlnite în filmele românești istorice."],
	["<strong>&#8608;</strong> Prezenta filmelor istorice cu subiect biblic reprezenta o contrapondere la ideologia statelor comuniste, care aveau o ideologie declarat ateista. Exemplul cel mai caracteristic este Ben-Hur (1959), care din cauza subiectului sau nu a putut fi urmarit pe ecranele din fostele state comuniste decat dupa 1989.","<strong>&#8608;</strong> Temele cel mai des intalnite sunt: evocarea unor personalitati istorice sau culturale, a unor evenimente (de exemplu, razboaiele mondiale, războiul de 100 de ani şamd).","<strong>&#8608;</strong> Teme principale: evenimente din istoria Rusiei și Uniunii Sovietice (de exemplu, Revoluția bolșevică sau participarea URSS la al Doilea Război Mondial; participarea Armatei Roșii la Al Doilea Război Mondial este prezentată într-un mod care punea în evidență eroismul ostașilor sovietici, priceperea comandanților, frăția de arme dintre națiunile componente ale URSS.","<strong>&#8608;</strong> Tematica filmelor istorice în timpul perioadei comuniste: evocarea unor personalități ale istoriei noastre (Decebal, Burebista, Tudor Vladimirescu, Mihai Viteazul,  Ștefan cel Mare etc); evocarea unor evenimente istorice importante (Independența, lovitura de stat de la 23 august 1944 etc). Toate acestea trebuia să constituie epopeea națională, continuată, în mod logic, de epoca în care conducerea țării asigurată de către Partidul Comunist în frunte cu Nicolae Ceaușescu."],
	["<strong>&#8608;</strong> Filme istorice de mare amplitudine erau si cele care prezentau ispravile armatei americane (si in subsidiar britanice) in timpul celui de-al Doilea Razboi Mondial, ca o contrapondere a filmelor sovietice cu subiect similar care demonstrau rolul decisiv al Armatei Rosii pe campurile de bataie ale ultimului conflict mondial (Ziua cea mai lunga, 1962). ","","<strong>&#8608;</strong> După căderea URSS cineaștii sovietici au căpătat o mai mare libertate de mișcare, ceea ce a dus la prezentarea unor evenimente istorice într-un mod mai apropiat de realitatea istorică.","<strong>&#8608;</strong> În ciuda constrângerilor de natură ideologică filmul istoric românesc a dat lucrări valoroase: Tudor, Mihai Viteazul, Columna, Ștefan cel Mare, Vlad Țepeș, Atunci i-am condamnat pe toți la moarte etc."],
	["<strong>&#8608;</strong> Filmul istoric cu mare buget putea avea ca personaj principal o figura emblematica a culturii occidentale. Filmul reprezentativ: Agonie si extaz (1965), dedicat comemorarii a 400 de ani de la moartea lui Michelangelo.","<strong>&#8608;</strong> Cinematografia istorica europeana a fost deschisa inovaţiilor privind expresia artistica sau tehnica (în special în Napoleon(1927), care introduce ca noutate tehnică proiecția filmului pe trei ecrane.","<strong>&#8608;</strong> Această cinematografie a avut o perioadă de glorie în perioada interbelică. ","<strong>&#8608;</strong> Valoarea filmelor românești istorice este sporită de muzica unor compozitori de mare calibru, precum Tiberiu Olah și Theodor Grigoriu."],
	["<strong>&#8608;</strong> Filme care nu aveau, propriu-zis, tematica istorica, dar care au capatat aceasta trasatura intr-un anumit context istoric sunt cele care au fost regizate in contextul razboiului rece: On the Beach.","<strong>&#8608;</strong> S-au remarcat cineastii din toate ţările europei, însă ies în evidenţă cei francezi, italieni, englezi şi români.","<strong>&#8608;</strong> În ultimii ani, după venirea la putere a lui Vladimir Putin, se pune din nou accent pe aspectul patriotic, naționalist al filmelor istorice rusești.","<strong>&#8608;</strong> După 1989, în ciuda libertății de creație de care au beneficiat regizorii români, filmul istoric românesc nu a mai produs creații de mare valoare. Emblematic este cazul lui Sergiu Nicolaescu, care după capodoperele realizate înainte de 1989 (Atunci i-am condamnat pe toți la moarte, Mihai Viteazul) nu mai are aceeași inspirație (Triunghiul morții, Carol I)."],
	["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]
	];
var aUS=[
["Nasterea&nbsp;&nbsp; unei&nbsp;&nbsp; natiuni"," Intoleranta","Pe &nbsp;&nbsp;aripile&nbsp;&nbsp; vantului ","Ben&nbsp;&nbsp; Hur","Ultimul &nbsp;&nbsp;tarm","Spartacus","Ziua&nbsp;&nbsp; cea&nbsp; &nbsp;mai&nbsp;&nbsp; lunga","Agonie&nbsp;&nbsp; si&nbsp;&nbsp; extaz","Patton","Apocalipsa &nbsp;&nbsp;acum ","Rosii","Gandhi","Plutonul","Inima&nbsp;&nbsp; neinfricata","Salvati&nbsp;&nbsp; soldatul&nbsp;&nbsp; Ryan ","Pianistul","Lista&nbsp;&nbsp; lui&nbsp;&nbsp; Schindler "],
["Napoleon","Patimile&nbsp;&nbsp; Ioanei &nbsp;&nbsp;d Arc","Nimic &nbsp;&nbsp;nou &nbsp;&nbsp;pe &nbsp;&nbsp;frontul&nbsp;&nbsp; de&nbsp;&nbsp; vest","Podul&nbsp;&nbsp; de&nbsp;&nbsp; pe &nbsp;&nbsp;raul&nbsp;&nbsp; Kwai","Lawrence&nbsp;&nbsp; al&nbsp;&nbsp; Arabiei","Un &nbsp;&nbsp;om &nbsp;&nbsp;pentru&nbsp;&nbsp; eternitate","Batalia&nbsp;&nbsp;&nbsp;&nbsp; pentru&nbsp;&nbsp;Algeria","Submarinul","Viata&nbsp;&nbsp; e &nbsp;&nbsp; frumoasa"],
["Crucisatorul&nbsp;&nbsp; Potemkin","Ivan &nbsp;&nbsp;cel &nbsp;&nbsp;Groaznic","Zboara &nbsp;&nbsp;cocorii ","Donul&nbsp;&nbsp; linistit","Destinul&nbsp;&nbsp; unui &nbsp;&nbsp; om","Andrei&nbsp;&nbsp; Rubleov","Amiralul","Stalingrad","Alexandr&nbsp;&nbsp; Nevsky"],
["Independenta&nbsp;&nbsp; Romaniei","Tudor","Dacii","Columna","Mihai &nbsp;&nbsp;Viteazul","Mircea","Pentru&nbsp;&nbsp; patrie","Padurea&nbsp;&nbsp; spanzuratilor","Stefan&nbsp;&nbsp; cel&nbsp;&nbsp; Mare"]
];
var k=0;
var div=[];
var a2=[
["url(imagini/birthofnationimg.jpg),url(imagini/birthofnation.jpg)","url(imagini/intoleranceimg.jpeg),url(imagini/intolerance.jpeg)","url(imagini/gonewiththewindimg.jpg),url(imagini/gonewiththewind.jpg)","url(imagini/benhurimg.jpg),url(imagini/benhur.jpg)","url(imagini/onthebeachimg.jpg),url(imagini/onthebeach.jpg)","url(imagini/spartacusimg.jpg),url(imagini/spartacus.jpg)","url(imagini/thelongestdayimg.jpg),url(imagini/thelongestday.jpg)","url(imagini/theagonyimg.jpg),url(imagini/theagony.jpg)","url(imagini/pattongimg.jpg),url(imagini/pattong.jpg)","url(imagini/apocalypseimg.jpg),url(imagini/apocalypse.jpg)","url(imagini/redsimg.jpg),url(imagini/reds.jpg)","url(imagini/gandhiimg.jpg),url(imagini/gandhi.jpg)","url(imagini/platoonimg.jpg),url(imagini/platoon.jpg)","url(imagini/braveheartimg.jpg),url(imagini/braveheart.jpg)","url(imagini/ryanimg.jpg),url(imagini/ryan.jpg)","url(imagini/pianistimg.jpg),url(imagini/pianist.jpg)","url(imagini/schindlerimg.jpg),url(imagini/schindler.jpg)"],//"url(imagini/redsimg.jpg),url(imagini/reds.jpg)",
["url(imagini/napoleonimg.jpg),url(imagini/napoleon.jpg)","url(imagini/ioanaimg.jpg),url(imagini/ioana.jpg)","url(imagini/quietimg.jpg),url(imagini/quiet.jpg)","url(imagini/kwaiimg.jpg),url(imagini/kwai.jpg)","url(imagini/arabiaimg.jpg),url(imagini/arabia.jpg)","url(imagini/seasonsimg.jpg),url(imagini/seasons.jpg)","url(imagini/algeriaimg.jpg),url(imagini/algeria.jpg)","url(imagini/dasbootimg.jpg),url(imagini/dasboot.jpg)","url(imagini/lavitaebellaimg.jpg),url(imagini/lavitaebella.jpg)"],
["url(imagini/crucisatorimg.jpg),url(imagini/crucisator.jpg)","url(imagini/ivanimg.jpg),url(imagini/ivan.jpg)","url(imagini/cocoriimg.jpg),url(imagini/cocori.jpg)","url(imagini/donimg.jpg),url(imagini/don.jpg)","url(imagini/destinimg.jpg),url(imagini/destin.jpg)","url(imagini/rublevimg.jpg),url(imagini/rublev.jpg)","url(imagini/admiralimg.jpg),url(imagini/admiral.jpg)","url(imagini/stalingradimg.jpg),url(imagini/stalingrad.jpg)","url(imagini/alexandrimg.jpg),url(imagini/alexandr.jpg)"],
["url(imagini/indepimg.jpg),url(imagini/indep.jpg)","url(imagini/tudorimg.jpg),url(imagini/tudor.jpg)","url(imagini/daciiimg.jpg),url(imagini/dacii.jpg)","url(imagini/columnaimg.jpg),url(imagini/columna.jpg)","url(imagini/mihaiimg.jpg),url(imagini/mihai.jpg)","url(imagini/mirceaimg.jpg),url(imagini/mircea.jpg)","url(imagini/patrieimg.jpg),url(imagini/patrie.jpg)","url(imagini/spanzuratiimg.jpg),url(imagini/spanzurati.jpg)","url(imagini/stefanimg.jpg),url(imagini/stefan.jpg)"]
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
var a5h=[
['11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%'],
['11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%'],
['11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%'],
['11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%','11%,110%']
];
var x=Number(window.localStorage.getItem("aia"));
function selectare(i)
{	
	window.localStorage.setItem("film",i);
	window.localStorage.setItem("titlu",aUS[x][i]);
	window.localStorage.setItem("bgimg",a2[x][i]);
	window.localStorage.setItem("bgpos",a3[x][i]);
	window.localStorage.setItem("bgrep",a4[x][i]);
	window.localStorage.setItem("bgsize",a5[x][i]);
	pa();
}
function pa()
{
	window.location="film.html";
}
	var boxh=[32,22,34,32];
window.onload = function(){
	
	window.localStorage.setItem("categorie",x);
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

	document.getElementById("ex").style.width=0.04*y0+"px";
	document.getElementById("ex").style.height=0.04*y0+"px";
	document.getElementById("expand").style.width=0.7*x0+"px";
	document.getElementById("expand").style.fontSize=0.02*y0+"px";
	document.getElementById("caracteristici").style.fontSize=0.05*y0+"px";
	
	document.getElementById("caracteristici").style.backgroundImage=a0[x];
	document.getElementById("caracteristici").style.backgroundRepeat="no-repeat";
	document.getElementById("caracteristici").style.backgroundSize="100%";
	for(i=0;i<=a1[x]-1;i++)
	{	
		
		div[i]=document.createElement("div");
		div[i].id="div"+i;
		if(i==0)
		{
			div[0].style.marginTop=50+"px";
		}
		else {div[i].style.marginTop=10+"px";}
		div[i].innerHTML='<div id=aUS['+i+']['+x+']></div>';
		div[i].style.transition="0.3s all";
		div[i].style.position="relative";
		div[i].style.display="block";
		div[i].style.width="100%";
		div[i].style.height=0.18*y0-5+"px";
		div[i].style.backgroundColor="red";
		div[i].style.border="5px solid #080000";
		div[i].style.borderLeft="none";
		div[i].style.borderRight="none";
		div[i].style.transition="1s all";
		div[i].style.backgroundImage=a2[x][i];
		div[i].style.backgroundPosition=a3[x][i];
		div[i].style.backgroundRepeat=a4[x][i];
		div[i].style.backgroundSize=a5[x][i];
		div[i].style.cursor="pointer";
		
		
		
		document.body.appendChild(div[i]);		
		document.getElementById('aUS['+i+']['+x+']').innerHTML=aUS[x][i];
		document.getElementById('aUS['+i+']['+x+']').style.marginLeft="25%";
		document.getElementById('aUS['+i+']['+x+']').style.marginTop="10px";
		document.getElementById('aUS['+i+']['+x+']').style.fontFamily="bebasregular";
		document.getElementById('aUS['+i+']['+x+']').style.fontSize=0.04*y0+"px";
		document.getElementById('aUS['+i+']['+x+']').style.marginTop=0.4*(0.18*y0-5)+"px";
		document.getElementById('aUS['+i+']['+x+']').style.color="white";
		document.getElementById('aUS['+i+']['+x+']').style.textShadow="3px 3px 15px black";
		document.getElementById('aUS['+i+']['+x+']').style.transition="1s all";
		
		
	}
	if(x==0)
	{
	div[0].onmouseover=function(){hover0()};
	div[0].onmouseout=function(){unhover0()};
	div[1].onmouseover=function(){hover1()};
	div[1].onmouseout=function(){unhover1()};
	div[2].onmouseover=function(){hover2()};
	div[2].onmouseout=function(){unhover2()};
	div[3].onmouseover=function(){hover3()};
	div[3].onmouseout=function(){unhover3()};
	div[4].onmouseover=function(){hover4()};
	div[4].onmouseout=function(){unhover4()};
	div[5].onmouseover=function(){hover5()};
	div[5].onmouseout=function(){unhover5()};
	div[6].onmouseover=function(){hover6()};
	div[6].onmouseout=function(){unhover6()};
	div[7].onmouseover=function(){hover7()};
	div[7].onmouseout=function(){unhover7()};
	div[8].onmouseover=function(){hover8()};
	div[8].onmouseout=function(){unhover8()};
	div[9].onmouseover=function(){hover9()};
	div[9].onmouseout=function(){unhover9()};
	div[10].onmouseover=function(){hover10()};
	div[10].onmouseout=function(){unhover10()};
	div[11].onmouseover=function(){hover11()};
	div[11].onmouseout=function(){unhover11()};
	div[12].onmouseover=function(){hover12()};
	div[12].onmouseout=function(){unhover12()};
	div[13].onmouseover=function(){hover13()};
	div[13].onmouseout=function(){unhover13()};
	div[14].onmouseover=function(){hover14()};
	div[14].onmouseout=function(){unhover14()};
	div[15].onmouseover=function(){hover15()};
	div[15].onmouseout=function(){unhover15()};
	div[16].onmouseover=function(){hover16()};
	div[16].onmouseout=function(){unhover16()};
	div[0].onclick=function(){selectare(0)};
	div[1].onclick=function(){selectare(1)};
	div[2].onclick=function(){selectare(2)};
	div[3].onclick=function(){selectare(3)};
	div[4].onclick=function(){selectare(4)};
	div[5].onclick=function(){selectare(5)};
	div[6].onclick=function(){selectare(6)};
	div[7].onclick=function(){selectare(7)};
	div[8].onclick=function(){selectare(8)};
	div[9].onclick=function(){selectare(9)};
	div[10].onclick=function(){selectare(10)};
	div[11].onclick=function(){selectare(11)};
	div[12].onclick=function(){selectare(12)};
	div[13].onclick=function(){selectare(13)};
	div[14].onclick=function(){selectare(14)};
	div[15].onclick=function(){selectare(15)};
	div[16].onclick=function(){selectare(16)};
	}
	if(x==1){
		div[0].onmouseover=function(){hover0()};
	div[0].onmouseout=function(){unhover0()};
	div[1].onmouseover=function(){hover1()};
	div[1].onmouseout=function(){unhover1()};
	div[2].onmouseover=function(){hover2()};
	div[2].onmouseout=function(){unhover2()};
	div[3].onmouseover=function(){hover3()};
	div[3].onmouseout=function(){unhover3()};
	div[4].onmouseover=function(){hover4()};
	div[4].onmouseout=function(){unhover4()};
	div[5].onmouseover=function(){hover5()};
	div[5].onmouseout=function(){unhover5()};
	div[6].onmouseover=function(){hover6()};
	div[6].onmouseout=function(){unhover6()};
	div[7].onmouseover=function(){hover7()};
	div[7].onmouseout=function(){unhover7()};
	div[8].onmouseover=function(){hover8()};
	div[8].onmouseout=function(){unhover8()};
	div[0].onclick=function(){selectare(0)};
	div[1].onclick=function(){selectare(1)};
	div[2].onclick=function(){selectare(2)};
	div[3].onclick=function(){selectare(3)};
	div[4].onclick=function(){selectare(4)};
	div[5].onclick=function(){selectare(5)};
	div[6].onclick=function(){selectare(6)};
	div[7].onclick=function(){selectare(7)};
	div[8].onclick=function(){selectare(8)};
	}
	if(x==2)
	{
		div[0].onmouseover=function(){hover0()};
	div[0].onmouseout=function(){unhover0()};
	div[1].onmouseover=function(){hover1()};
	div[1].onmouseout=function(){unhover1()};
	div[2].onmouseover=function(){hover2()};
	div[2].onmouseout=function(){unhover2()};
	div[3].onmouseover=function(){hover3()};
	div[3].onmouseout=function(){unhover3()};
	div[4].onmouseover=function(){hover4()};
	div[4].onmouseout=function(){unhover4()};
	div[5].onmouseover=function(){hover5()};
	div[5].onmouseout=function(){unhover5()};
	div[6].onmouseover=function(){hover6()};
	div[6].onmouseout=function(){unhover6()};
	div[7].onmouseover=function(){hover7()};
	div[7].onmouseout=function(){unhover7()};
	div[8].onmouseover=function(){hover8()};
	div[8].onmouseout=function(){unhover8()};
	div[0].onclick=function(){selectare(0)};
	div[1].onclick=function(){selectare(1)};
	div[2].onclick=function(){selectare(2)};
	div[3].onclick=function(){selectare(3)};
	div[4].onclick=function(){selectare(4)};
	div[5].onclick=function(){selectare(5)};
	div[6].onclick=function(){selectare(6)};
	div[7].onclick=function(){selectare(7)};
	div[8].onclick=function(){selectare(8)};
	}
	if(x==3)
	{
		div[0].onmouseover=function(){hover0()};
	div[0].onmouseout=function(){unhover0()};
	div[1].onmouseover=function(){hover1()};
	div[1].onmouseout=function(){unhover1()};
	div[2].onmouseover=function(){hover2()};
	div[2].onmouseout=function(){unhover2()};
	div[3].onmouseover=function(){hover3()};
	div[3].onmouseout=function(){unhover3()};
	div[4].onmouseover=function(){hover4()};
	div[4].onmouseout=function(){unhover4()};
	div[5].onmouseover=function(){hover5()};
	div[5].onmouseout=function(){unhover5()};
	div[6].onmouseover=function(){hover6()};
	div[6].onmouseout=function(){unhover6()};
	div[7].onmouseover=function(){hover7()};
	div[7].onmouseout=function(){unhover7()};
	div[8].onmouseover=function(){hover8()};
	div[8].onmouseout=function(){unhover8()};
	div[0].onclick=function(){selectare(0)};
	div[1].onclick=function(){selectare(1)};
	div[2].onclick=function(){selectare(2)};
	div[3].onclick=function(){selectare(3)};
	div[4].onclick=function(){selectare(4)};
	div[5].onclick=function(){selectare(5)};
	div[6].onclick=function(){selectare(6)};
	div[7].onclick=function(){selectare(7)};
	div[8].onclick=function(){selectare(8)};
	
	}
}

function hover0(){
	
	document.getElementById("div0").style.backgroundSize=a5h[x][0];
	document.getElementById('aUS['+0+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+0+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover0(){
	document.getElementById("div0").style.backgroundSize=a5[x][0];
	document.getElementById('aUS['+0+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+0+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover1(){
	
	document.getElementById("div1").style.backgroundSize=a5h[x][1];
	document.getElementById('aUS['+1+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+1+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover1(){
	document.getElementById("div1").style.backgroundSize=a5[x][1];
	document.getElementById('aUS['+1+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+1+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover2(){
	
	document.getElementById("div2").style.backgroundSize=a5h[x][2];
	document.getElementById('aUS['+2+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+2+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover2(){
	document.getElementById("div2").style.backgroundSize=a5[x][2];
	document.getElementById('aUS['+2+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+2+']['+x+']').style.textShadow="3px 3px 15px black";
}function hover3(){
	
	document.getElementById("div3").style.backgroundSize=a5h[x][3];
	document.getElementById('aUS['+3+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+3+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover3(){
	document.getElementById("div3").style.backgroundSize=a5[x][3];
	document.getElementById('aUS['+3+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+3+']['+x+']').style.textShadow="3px 3px 15px black";
}function hover4(){
	
	document.getElementById("div4").style.backgroundSize=a5h[x][4];
	document.getElementById('aUS['+4+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+4+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover4(){
	document.getElementById("div4").style.backgroundSize=a5[x][4];
	document.getElementById('aUS['+4+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+4+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover5(){
	
	document.getElementById("div5").style.backgroundSize=a5h[x][5];
	document.getElementById('aUS['+5+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+5+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover5(){
	document.getElementById("div5").style.backgroundSize=a5[x][5];
	document.getElementById('aUS['+5+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+5+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover6(){
	
	document.getElementById("div6").style.backgroundSize=a5h[x][6];
	document.getElementById('aUS['+6+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+6+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover6(){
	document.getElementById("div6").style.backgroundSize=a5[x][6];
	document.getElementById('aUS['+6+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+6+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover7(){
	
	document.getElementById("div7").style.backgroundSize=a5h[x][7];
	document.getElementById('aUS['+7+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+7+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover7(){
	document.getElementById("div7").style.backgroundSize=a5[x][7];
	document.getElementById('aUS['+7+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+7+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover8(){
	
	document.getElementById("div8").style.backgroundSize=a5h[x][8];
	document.getElementById('aUS['+8+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+8+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover8(){
	document.getElementById("div8").style.backgroundSize=a5[x][8];
	document.getElementById('aUS['+8+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+8+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover9(){
	
	document.getElementById("div9").style.backgroundSize=a5h[x][9];
	document.getElementById('aUS['+9+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+9+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover9(){
	document.getElementById("div9").style.backgroundSize=a5[x][9];
	document.getElementById('aUS['+9+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+9+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover10(){
	
	document.getElementById("div10").style.backgroundSize=a5h[x][10];
	document.getElementById('aUS['+10+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+10+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover10(){
	document.getElementById("div10").style.backgroundSize=a5[x][10];
	document.getElementById('aUS['+10+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+10+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover11(){
	
	document.getElementById("div11").style.backgroundSize=a5h[x][11];
	document.getElementById('aUS['+11+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+11+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover11(){
	document.getElementById("div11").style.backgroundSize=a5[x][11];
	document.getElementById('aUS['+11+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+11+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover12(){
	
	document.getElementById("div12").style.backgroundSize=a5h[x][12];
	document.getElementById('aUS['+12+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+12+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover12(){
	document.getElementById("div12").style.backgroundSize=a5[x][12];
	document.getElementById('aUS['+12+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+12+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover13(){
	
	document.getElementById("div13").style.backgroundSize=a5h[x][13];
	document.getElementById('aUS['+13+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+13+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover13(){
	document.getElementById("div13").style.backgroundSize=a5[x][13];
	document.getElementById('aUS['+13+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+13+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover14(){
	
	document.getElementById("div14").style.backgroundSize=a5h[x][14];
	document.getElementById('aUS['+14+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+14+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover14(){
	document.getElementById("div14").style.backgroundSize=a5[x][14];
	document.getElementById('aUS['+14+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+14+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover15(){
	
	document.getElementById("div15").style.backgroundSize=a5h[x][15];
	document.getElementById('aUS['+15+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+15+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover15(){
	document.getElementById("div15").style.backgroundSize=a5[x][15];
	document.getElementById('aUS['+15+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+15+']['+x+']').style.textShadow="3px 3px 15px black";
}
function hover16(){
	
	document.getElementById("div16").style.backgroundSize=a5h[x][16];
	document.getElementById('aUS['+16+']['+x+']').style.fontSize=0.045*y0+"px";
	document.getElementById('aUS['+16+']['+x+']').style.textShadow="3px 3px 15px #65000B";
}
function unhover16(){
	document.getElementById("div16").style.backgroundSize=a5[x][16];
	document.getElementById('aUS['+16+']['+x+']').style.fontSize=0.04*y0+"px";
	document.getElementById('aUS['+16+']['+x+']').style.textShadow="3px 3px 15px black";
}
var lung=0,t,ok=0;
function clic(){
	if(ok==0&&k==0)
	{bara();
	document.getElementById("ex").src="imagini/up.png";}
	else if(ok==1&&k==0){bara2();
	document.getElementById("ex").src="imagini/down.png";
	}
}

function bara(){
	k=1;
	lung=lung+0.01*(Math.round(0.02*y0))*boxh[x];
	document.getElementById("expand").style.height=lung+"px";
	cronometru();
	if(document.getElementById("expand").style.height==(Math.round(0.02*y0))*boxh[x]+"px")
	{
		stopbara();
		
	}
	
}
function cronometru(){
	 t=setTimeout(bara,1);
	
	
}

function stopbara(){
	 clearTimeout(t);
	 ok=1;
	 k=0;
}
function bara2()
{	k=1;
	lung=0;
	document.getElementById("expand").style.height=lung+"px";
	cronometru2();
	if(document.getElementById("expand").style.height==0+"px")
	{
		stopbara2();
		
	}
}
function cronometru2(){
	 t=setTimeout(bara2,1);
	
}
function stopbara2(){
	 clearTimeout(t);
	 ok=0;
	 k=0;

}