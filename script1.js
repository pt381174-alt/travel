const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
        
        // Optional: Hamburger ko 'X' shape mein badalne ke liye
        menu.classList.toggle('is-active');
    });

    // 1. Navbar Toggle Logic (Modern ES6 Arrow Functions)
const initNav = () => {
    const menuBtn = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            // Menu ko open/close karne ke liye toggle
            navLinks.classList.toggle('active');
            
            // Hamburger icon ko 'X' banane ka animation toggle
            menuBtn.classList.toggle('is-active');
        });
    }
};

// 2. Smooth Scrolling for Navigation Links
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Mobile menu ko click ke baad band karne ke liye
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    document.querySelector('#mobile-menu').classList.remove('is-active');
                }
            }
        });
    });
};

// 3. Scroll Header Effect (Header color changes on scroll)
const headerScrollEffect = () => {
    const mainNav = document.querySelector('.main');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            mainNav.style.transition = '0.5s';
        } else {
            mainNav.style.backgroundColor = 'transparent';
        }
    });
};

// Sabhi functions ko call karna
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    smoothScroll();
    headerScrollEffect();
});