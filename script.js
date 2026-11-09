const langToggle=document.getElementById("langToggle");
let currentLang="en";
function setLanguage(lang){
  currentLang=lang;
  document.body.dataset.lang=lang;
  document.querySelectorAll("[data-en][data-mr]").forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  langToggle.textContent=lang==="en"?"मराठी":"English";
  document.documentElement.lang=lang==="mr"?"mr":"en";
}
langToggle.addEventListener("click",()=>setLanguage(currentLang==="en"?"mr":"en"));
document.getElementById("menuToggle").addEventListener("click",()=>{
  document.getElementById("mainNav").classList.toggle("open");
});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>{
  document.getElementById("mainNav").classList.remove("open");
}));
document.getElementById("year").textContent=new Date().getFullYear();
