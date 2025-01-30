// Smooth Scroll untuk Link "BACK"
document.querySelector('.footer a[href="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animasi saat halaman dimuat
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Animasi hover pada section
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-5px)';
        section.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0)';
        section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Efek parallax pada header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Animasi teks bergerak di header
const headerText = document.querySelector('.header h1');
headerText.innerHTML = headerText.textContent
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('');

// Efek hover pada logo pembayaran
document.querySelectorAll('.payment-logos img').forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.1)';
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });
});

// Animasi teks di footer
const footerText = document.querySelector('.footer p');
footerText.innerHTML = footerText.textContent
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('');

