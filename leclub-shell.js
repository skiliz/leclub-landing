(function(){
var header=document.querySelector(".nav");
if(!header) return;

var previousScrollY=window.scrollY;
var ticking=false;

function updateHeaderVisibility(){
var currentScrollY=Math.max(window.scrollY,0);
var scrollDelta=currentScrollY-previousScrollY;
var nearTop=currentScrollY<96;

if(nearTop||document.body.classList.contains("menu-open")||document.body.classList.contains("booking-open")){
header.classList.add("header-visible");
header.classList.remove("header-hidden");
previousScrollY=currentScrollY;
ticking=false;
return;
}

if(Math.abs(scrollDelta)<4){
ticking=false;
return;
}

var scrollingUp=scrollDelta<0;
header.classList.toggle("header-visible",scrollingUp);
header.classList.toggle("header-hidden",!scrollingUp);
previousScrollY=currentScrollY;
ticking=false;
}

function requestHeaderVisibility(){
if(!ticking){
requestAnimationFrame(updateHeaderVisibility);
ticking=true;
}
}

updateHeaderVisibility();
window.addEventListener("scroll",requestHeaderVisibility,{passive:true});
})();
