let lastScroll = 0;
const navbar = document.getElementById("navbar");
const scrollThreshold = 10;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(Math.abs(currentScroll - lastScroll) <= scrollThreshold){
        return;
    }

    if(currentScroll > lastScroll && currentScroll > 100){

        navbar.classList.add("hide");

    }else{

        navbar.classList.remove("hide");

    }

    lastScroll = currentScroll;

});
window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(changeSlide,5000);
const elements = document.querySelectorAll(
".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade"
);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }else{
            entry.target.classList.remove("active");
        }
    });
},{
    threshold:0.15
});

elements.forEach(el=>observer.observe(el));

const sections = document.querySelectorAll(".reveal-text");

document.querySelectorAll(".reveal-text").forEach(section=>{

    section.querySelectorAll("span").forEach((line,index)=>{

        line.style.transitionDelay = `${index*0.25}s`;

    });

});

document.querySelectorAll(".card").forEach((card,index)=>{
    card.style.transitionDelay = `${index * 0.15}s`;
});