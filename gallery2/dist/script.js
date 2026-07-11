const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const close = document.querySelector(".close");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

});

});

close.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});