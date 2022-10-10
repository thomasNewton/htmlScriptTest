// variables are global by nature in a browser // so dont need to be declared here

var b1Clicks=0;
var b2Clicks=0;



var vidList=[];
vidList[0]='ioi'
vidList[1]='<iframe width="560" height="315" src="https://www.youtube.com/embed/U_7CGl6VWaQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
vidList[2]='<iframe width="560" height="315" src="https://www.youtube.com/embed/T2mHyHhJSAU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
vidList[3]='<iframe width="560" height="315" src="https://www.youtube.com/embed/1vUNkgTzCLI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
vidList[4]='<iframe width="560" height="315" src="https://www.youtube.com/embed/tD2nOjn3ffs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
vidList[5]='<iframe width="560" height="315" src="https://www.youtube.com/embed/PHxYnDVrxkI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
vidList[6]='<iframe width="560" height="315" src="https://www.youtube.com/embed/dnHdqPBrtH8?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

var scriptList=[];
scriptList[0]='<link rel="stylesheet" href="css/mainCss.css">';
scriptList[1]='<link rel="stylesheet" href="css/pg2Css.css">';
scriptList[2]='<link rel="stylesheet" href="css/pg3Css.css">';
scriptList[3]='<link rel="stylesheet" href="css/pg4Css.css">';
scriptList[4]='<link rel="stylesheet" href="css/pg5Css.css">';
scriptList[5]="";




 function button1Function(){
  b1Clicks++;
  b1State=b1Clicks%scriptList.length;
  document.getElementById("button1").innerText="b1State="+b1State;
  document.getElementById("SSD").innerHTML=scriptList[b1State];

}

function button2Function(){
  if (b2Clicks==0){  // save original content to be able to cycle back to it
    //originalContent=
    vidList[0]=document.getElementById("content").innerHTML;
  }
  b2Clicks++;
  b2State=b2Clicks%vidList.length;
  document.getElementById("button2").innerText="b2State="+b2State;
  document.getElementById("content").innerHTML=vidList[b2State];

}