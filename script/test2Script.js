




document.getElementById("reset_btn").addEventListener("click", ()=> {location.reload();});

document.getElementById("edit_btn").addEventListener("click", set_bom_txt);

function test_text(){
    document.getElementById("console_text_area").innerHTML+="\nnew text";
}
function set_bom_txt() {
    document.getElementById("console_text_area").innerHTML="";setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="Screen width:" + screen.width;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tScreen Height:" + screen.height;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tAvailable Screen Width:" + screen.availWidth;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tAvailable Screen Height:" + screen.availHeight;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\nScreen Color Depth:" + screen.colorDepth;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tScreen Pixel Depth:" + screen.pixelDepth;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tPage location:" + window.location.href;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\nPage hostname:" + window.location.hostname;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tPage path:" + window.location.pathname;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tPage protocol:" + window.location.protocol;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tPort number:" + window.location.port;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\ncookiesEnabled:" + navigator.cookieEnabled;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tnavigator.appName:" +navigator.appName;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tnavigator platform:"+ navigator.platform;setTimeout(250);
    document.getElementById("console_text_area").innerHTML+="\tnavigator online"+navigator.onLine;setTimeout(250);
   
    ---------------