// JavaScript for Slider and Form Validation

// Image Slider Functionality
const sliderImages = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

function showNextImage() {
    sliderImages[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
    sliderImages[currentImageIndex].style.display = 'block';
}

// Initialize Slider
sliderImages.forEach(img => (img.style.display = 'none'));
sliderImages[0].style.display = 'block';
setInterval(showNextImage, 3000);

// Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert('Form submitted successfully!');
        contactForm.reset();
    });
}
