let currentIndex = 0;
const slides = document.querySelectorAll(".slide img");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.parentElement.style.opacity = i === index ? "1" : "0";
    });
}

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
});

// Auto-slide every 2 seconds for faster performance
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 2000);

// Initialize first slide
showSlide(currentIndex);



