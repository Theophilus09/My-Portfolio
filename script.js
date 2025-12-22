
// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Use the 'service_id' and 'template_id' from your EmailJS dashboard
    emailjs.sendForm('service_l772c9j', 'template_k1l28sk', this)
        .then(function() {
            console.log('SUCCESS!');
            alert("Email sent successfully!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send.");
        });
});