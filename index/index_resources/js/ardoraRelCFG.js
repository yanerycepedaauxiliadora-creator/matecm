//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=5;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste"; messageTime="Has fallado"; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#00FFFF";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Uno</p>","<p>Dos</p>","<p>Tres</p>","<p>Cuatro</p>","<p>Cinco</p>","<p>Seis</p>","<p>Siete</p>","<p>Ocho</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","","",""]; ansRL=["MA==","Mg==","MQ==","Ng==","Mw==","NA==","NQ==","Nw=="];
var iR=["<div  align='center'><img alt='' src='index_resources/media/Uno.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/Tres.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/Dos.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/cinco.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/seis.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/siete.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/cuatro.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/ocho.jpg'></div>"];
var auR=[1,3,2,5,6,7,4,8];
