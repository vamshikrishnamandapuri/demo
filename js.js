// Form Validation for Contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !phone || !message) {
                e.preventDefault();
                alert('Please fill all fields.');
                return false;
            }

            // Simple email regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email.');
                return false;
            }

            // Phone regex for Indian numbers
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                e.preventDefault();
                alert('Please enter a valid 10-digit phone number.');
                return false;
            }

            // If valid, submit (Formspree handles sending)
            alert('Thank you! Your message has been sent. We\'ll contact you soon.');
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});