




document.getElementById("reset_btn").addEventListener("click", ()=> {location.reload();});

document.getElementById("edit_btn").addEventListener("click", set_bom_txt);

function test_text(){
    document.getElementById("console_text_area" ).innerHTML+="\nnew text";
}
function set_bom_txt() {
    document.getElementById("console_text_area" ).innerHTML="";
    
   
    outputs =[
    "\tAvailable Screen Height:" + screen.availHeight,
    "\nScreen Color Depth:" + screen.colorDepth,
    "\tScreen Pixel Depth:" + screen.pixelDepth,
    "\tPage location:" + window.location.href,
    "\nPage hostname:" + window.location.hostname,
    "\tPage path:" + window.location.pathname,
    "\tPage protocol:" + window.location.protocol,
    "\tPort number:" + window.location.port,
    "\ncookiesEnabled:" + navigator.cookieEnabled,
    "\tnavigator.appName:" +navigator.appName,
    "\tnavigator platform:"+ navigator.platform,
    "\tnavigator online"+navigator.onLine,
    "Screen width:" + screen.width,
    "\tScreen Height:" + screen.height,
    "\tAvailable Screen Width:" + screen.availWidth,
    ]
        
    for (i=0;i<outputs.length;i++){
       document.getElementById("console_text_area" ).innerHTML+=outputs[i];
        stringy=outputs[i];
       setTimeout(() => {
        document.getElementById("console_text_area" ).innerHTML+=stringy;
      }, 2000);

       

    }
    
    
}


