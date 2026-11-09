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

// Handle form submission gracefully on static hosts (e.g. GitHub Pages) vs PHP hosts (cPanel)
const enquiryForm = document.querySelector(".enquiry-form");
if (enquiryForm) {
  enquiryForm.addEventListener("submit", function(e) {
    const isStaticHost = window.location.hostname.includes("github.io") || window.location.protocol === "file:";
    if (isStaticHost) {
      e.preventDefault();
      const name = enquiryForm.querySelector("[name='name']").value;
      const phone = enquiryForm.querySelector("[name='phone']").value;
      const service = enquiryForm.querySelector("[name='service']").value;
      const msg = enquiryForm.querySelector("[name='message']").value;
      const text = `Hello Abhijit Enterprises, I am ${name} (${phone}). I would like to enquire about ${service}.${msg ? ' Note: ' + msg : ''}`;
      window.open(`https://wa.me/918208361003?text=${encodeURIComponent(text)}`, "_blank");
    }
  });
}

