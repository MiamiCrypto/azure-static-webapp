/* script.js - Controls the image slider */

// Select elements from the document
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0; // Keeps track of the current slide

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Function to show the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loops back to the start
    showSlide(currentIndex);
}

// Function to show the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loops to the end
    showSlide(currentIndex);
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Automatically cycle through slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide display
showSlide(currentIndex);
