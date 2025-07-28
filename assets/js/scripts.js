document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('aria-valuenow') + '%';
            bar.firstElementChild.style.width = width;
            bar.firstElementChild.style.transition = 'width 1s ease-in-out'; // Add transition
        });
    }

    // Trigger animation when the Skills section is in view
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(skillsSection); // Animate only once
            }
        });
    });

    observer.observe(skillsSection);
});
document.addEventListener('DOMContentLoaded', function() {
    const certificationImages = document.querySelectorAll('.certification-card img');

    certificationImages.forEach(img => {
        img.addEventListener('click', function() {
            // Implement lightbox functionality here
            // (e.g., using a library like Lightbox2 or writing your own)
            console.log('Lightbox triggered for:', this.alt);
        });
    });
});

document.querySelectorAll('.certification-card').forEach(card => {
    card.addEventListener('click', function() {
        const certId = card.getAttribute('data-cert-id') || 'N/A';
        document.getElementById('cert-id-value').textContent = certId;
    });
});

// Project card tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        card.style.transform = `rotateY(${x/20}deg) rotateX(${-y/20}deg) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Hero parallax effect
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        hero.style.transform = `translate(${x}px, ${y}px)`;
    });
    hero.addEventListener('mouseleave', () => {
        hero.style.transform = '';
    });
}

// Dynamic skills animation
document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach((card, index) => {
        card.style.setProperty('--i', index + 1);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.progress').style.width = 
                    entry.target.querySelector('.progress').style.getPropertyValue('--progress');
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => observer.observe(card));
});

    // Replace both scroll listeners with this single one
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});





// Contact Form Functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:appuzmathew9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    this.reset();
    alert('Opening email client...');
});


// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

