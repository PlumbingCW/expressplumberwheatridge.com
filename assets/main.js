(function(){
  var btn=document.getElementById("menuToggle"),menu=document.getElementById("mobileMenu"),mq=window.matchMedia("(max-width:960px)");
  function setOpen(o){
    if(!btn||!menu)return;
    menu.classList.toggle("open",o);
    btn.setAttribute("aria-expanded",o?"true":"false");
    btn.setAttribute("aria-label",o?"Close menu":"Open menu");
    document.documentElement.style.overflow=(o&&mq.matches)?"hidden":"";
  }
  if(btn){btn.addEventListener("click",function(){setOpen(!menu.classList.contains("open"))});}
  document.addEventListener("keydown",function(e){if(e.key==="Escape"){setOpen(false);}});
  var onChange=function(){if(!mq.matches){setOpen(false);}};
  if(mq.addEventListener){mq.addEventListener("change",onChange);}else if(mq.addListener){mq.addListener(onChange);}
  var bar=document.getElementById("callbar"),foot=document.querySelector("footer.sitefoot");
  if(bar&&foot&&"IntersectionObserver" in window){
    new IntersectionObserver(function(en){bar.classList.toggle("hide",en[0].isIntersecting&&!mq.matches);},{threshold:0}).observe(foot);
  }
})();
