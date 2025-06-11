// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamically update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Example: Simple form validation (client-side) for the contact form
// (This is basic and doesn't replace server-side validation)
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const emailInput = document.getElementById('email');
        if (!emailInput.value.includes('@')) {
            alert('Please enter a valid email address.');
            e.preventDefault(); // Stop form submission
        }
        // You can add more validation here
    });
}