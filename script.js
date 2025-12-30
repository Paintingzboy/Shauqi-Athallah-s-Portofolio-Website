document.addEventListener('DOMContentLoaded', () => {
    // --- SLIDER OTOMATIS BERGESER ---
   let index = 0;
const wrapper = document.getElementById('slidesWrapper');
const slides = document.querySelectorAll('.mySlides');

function updateSlide() {
    const shift = index * (100 / slides.length);
    wrapper.style.transform = `translateX(-${shift}%)`;
}

function moveSlide(step) {
    index += step;
    if (index >= slides.length) { index = 0; }
    if (index < 0) { index = slides.length - 1; }
    updateSlide();
}

// Auto slide tetap berjalan setiap 3 detik
setInterval(() => {
    moveSlide(1);
}, 3000);


    
    setInterval(startSliding, 3000); // Bergeser setiap 3 detik

    // --- NAVIGASI AKTIF SAAT SCROLL (Sesuai keinginan Anda) ---
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            if (pageYOffset >= (section.offsetTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});