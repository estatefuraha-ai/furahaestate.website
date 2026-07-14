const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentImage = 0;


// Open Lightbox
galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentImage=index;

        lightbox.classList.add("active");

        showImage();

    });

});


// Display Image
function showImage(){

    lightboxImg.src=galleryImages[currentImage].src;

}


// Next
nextBtn.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage();

});


// Previous
prevBtn.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage();

});


// Close
document.querySelector(".close").onclick=()=>{

    lightbox.classList.remove("active");

};


// Keyboard Controls
document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});