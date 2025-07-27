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