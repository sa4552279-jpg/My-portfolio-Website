// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault();

            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');

    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add('bg-darker/95', 'shadow-xl');
    } else {
        nav.classList.remove('bg-darker/95', 'shadow-xl');
    }
});