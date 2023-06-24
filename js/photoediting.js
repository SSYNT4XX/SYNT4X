const allImages = document.querySelectorAll(".images .img");
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");

allImages.forEach(img => {
    img.addEventListener("click", () => showLightbox(img.querySelector("img").src));
});

const showLightbox = (img) => {
    lightbox.querySelector("img").src = img;
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden";
}

closeImgBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
});
