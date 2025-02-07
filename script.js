let currentIndex = 0;
const slides = document.querySelectorAll(".slide img");
const totalSlides = slides.length;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.parentElement.style.opacity = i === index ? "1" : "0";
    });
}

// Show the first slide initially
showSlide(currentIndex);

// Event listeners for Prev & Next buttons
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
});

// Auto-slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);

