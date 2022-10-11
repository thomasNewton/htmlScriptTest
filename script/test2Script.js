




document.getElementById("reset_btn").addEventListener("click", ()=> {location.reload();});

document.getElementById("edit_btn").addEventListener("click", set_bom_txt);

function test_text(){
    document.getElementById("console_text_area").innerHTML+="\nnew text";
}
function set_bom_txt() {
    document.getElementById("console_text_area").innerHTML="";
    document.getElementById("console_text_area").innerHTML+="Screen width:" + screen.width;
    document.getElementById("console_text_area").innerHTML+="\tScreen Height:" + screen.height;
    document.getElementById("console_text_area").innerHTML+="\tAvailable Screen Width:" + screen.availWidth;
    document.getElementById("console_text_area").innerHTML+="\tAvailable Screen Height:" + screen.availHeight;
    document.getElementById("console_text_area").innerHTML+="\nScreen Color Depth:" + screen.colorDepth;
    document.getElementById("console_text_area").innerHTML+="\tScreen Pixel Depth:" + screen.pixelDepth;
    document.getElementById("console_text_area").innerHTML+="\tPage location:" + window.location.href;
    document.getElementById("console_text_area").innerHTML+="\nPage hostname:" + window.location.hostname;
    document.getElementById("console_text_area").innerHTML+="\tPage path:" + window.location.pathname;
    document.getElementById("console_text_area").innerHTML+="\tPage protocol:" + window.location.protocol;
    document.getElementById("console_text_area").innerHTML+="\tPort number:" + window.location.port;
    document.getElementById("console_text_area").innerHTML+="\ncookiesEnabled:" + navigator.cookieEnabled;
    document.getElementById("console_text_area").innerHTML+="\tnavigator.appName:" +navigator.appName;
    document.getElementById("console_text_area").innerHTML+="\tnavigator platform:"+ navigator.platform;
    document.getElementById("console_text_area").innerHTML+="\tnavigator online"+navigator.onLine;
   
}