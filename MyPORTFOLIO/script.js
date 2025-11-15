// Smooth scrolling for nav links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation on scroll using IntersectionObserver (native browser API)
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 1s, transform 1s';
    observer.observe(section);
});

// Handle contact form submission (basic alert - replace with your own logic if needed)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Basic validation and alert (you can integrate email sending here if you add a backend)
    if (name && email && phone && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} or ${phone}.`);
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});