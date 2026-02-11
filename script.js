// Typing Animation
const typedText = document.querySelector(".typing");
const text = "Redwan";
let index = 0;
function type(){
    if(index < text.length){
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type,200);
    }
}
window.addEventListener("load", type);

// Scroll Fade-In Sections
const sections = document.querySelectorAll("section, footer");
function scrollFade(){
    const trigger = window.innerHeight * 0.85;
    sections.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < trigger){
            sec.classList.add("fade-in-active");
        }
    });
}
window.addEventListener("scroll", scrollFade);
window.addEventListener("load", scrollFade);

// Skills Animation
const skillBars = document.querySelectorAll(".skill-bar");
function animateSkills(){
    skillBars.forEach(bar=>{
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight * 0.85){
            bar.style.width = bar.dataset.width;
        }
    });
}
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// Smooth Scroll
document.querySelectorAll('header nav a').forEach(a=>{
    a.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});