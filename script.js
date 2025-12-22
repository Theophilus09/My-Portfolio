// Simple Form Alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    alert('Thank you! Your message has been sent.');
    this.reset(); // Clears the form
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});