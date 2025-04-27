// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor .dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Handle cursor click state
document.addEventListener('mousedown', () => {
    document.body.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
    document.body.classList.remove('clicked');
});

// Hide cursor on Calendly iframe
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.calendly-inline-widget')) {
        cursor.style.display = 'none';
    } else {
        cursor.style.display = 'block';
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle Calendly visibility
const calendlyContainer = document.querySelector('.calendly-container');
const calendlyEmbed = document.getElementById('calendly-embed');

// Hide Calendly initially
if (calendlyContainer) calendlyContainer.style.display = 'none';

// Show Calendly when any relevant button is clicked
document.querySelectorAll('a.cta-button[href="#calendly-embed"]').forEach(btn => {
    // Only add handler if the button is NOT inside the calendly embed container
    if (!btn.closest('.calendly-container')) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (calendlyContainer) calendlyContainer.style.display = 'block';
            if (calendlyEmbed) {
                calendlyEmbed.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Enhanced hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .contact-card, .booking-subtitle');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add scroll-based animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize Calendly widget
document.addEventListener('DOMContentLoaded', function() {
    // Calendly widget is initialized automatically by the script
    // Add any additional Calendly configuration here if needed
}); 