var yes=document.querySelector(".Yes");
var reqem=document.querySelector(".Reqem");
var isare=document.querySelector(".Isare");
var yumrudiv=document.createElement("DIV");
var yumrudiv1=document.createElement("DIV");
var yumrudiv2=document.createElement("DIV");
yumrudiv.setAttribute("class","yumrudiv");
yumrudiv1.setAttribute("class","yumrudiv");
yumrudiv2.setAttribute("class","yumrudiv");
yes.appendChild(yumrudiv);
reqem.appendChild(yumrudiv1);
isare.appendChild(yumrudiv2);
function Yandir1(){
     if(yumrudiv.style.cssFloat=="left"){
         yumrudiv.style.cssFloat="right"
         yes.style.background="rgb(16,142,233)";
     }else{
         yumrudiv.style.cssFloat="left";
         yes.style.background="grey";
     }
}
function Yandir2(){
    if(yumrudiv1.style.cssFloat=="left"){
        yumrudiv1.style.cssFloat="right"
        reqem.style.background="rgb(16,142,233)";
    }else{
        yumrudiv1.style.cssFloat="left";
        reqem.style.background="grey";
    }
}
function Yandir3(){
    if(yumrudiv2.style.cssFloat=="left"){
        yumrudiv2.style.cssFloat="right"
        isare.style.background="rgb(16,142,233)";
    }else{
        yumrudiv2.style.cssFloat="left";
        isare.style.background="grey";
    }
}
