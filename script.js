// Initialize variables
let currentIndex = 0; // Tracks the current slide index
const slides = document.querySelectorAll(".slide"); // Selects all slides
const totalSlides = slides.length; // Counts total number of slides

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active"); // Remove active class from all slides
        if (i === index) {
            slide.classList.add("active"); // Add active class only to the current slide
        }
    });
}

// Display the first slide initially
showSlide(currentIndex);

// Event listener for Previous button
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to previous slide
    showSlide(currentIndex);
});

// Event listener for Next button
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to next slide
    showSlide(currentIndex);
});

// Auto-slide every 3 seconds for smooth transitions
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);





