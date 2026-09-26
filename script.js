document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".mobile-menu-toggle");
  const nav=document.querySelector(".site-nav");
  if(toggle&&nav){
    toggle.addEventListener("click",()=>{
      const open=nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded",String(open));
      toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
    });
    nav.querySelectorAll("a[href^=\"#\"]").forEach(link=>link.addEventListener("click",()=>{
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
      toggle.setAttribute("aria-label","Open navigation");
    }));
  }
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",e=>{
    const id=link.getAttribute("href"); if(!id||id==="#") return;
    const target=document.querySelector(id); if(!target) return;
    e.preventDefault(); target.scrollIntoView({behavior:"smooth",block:"start"});
    history.replaceState(null,"",id);
  }));
  if("IntersectionObserver" in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll(".reveal").forEach(el=>io.observe(el));}
});
