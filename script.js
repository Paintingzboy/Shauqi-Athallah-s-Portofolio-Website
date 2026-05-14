window.addEventListener('load', () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });

    const wrapper = document.getElementById('slidesWrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (wrapper && prevBtn && nextBtn) {
        let index = 0;
        const totalSlides = wrapper.children.length;

        function updateSlide() {
            wrapper.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
        }

        function startAutoSlide() {
            return setInterval(() => {
                index = (index + 1) % totalSlides;
                updateSlide();
            }, 3000);
        }

        let slideInterval = startAutoSlide();

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % totalSlides;
            updateSlide();
            clearInterval(slideInterval);
            slideInterval = startAutoSlide();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + totalSlides) % totalSlides;
            updateSlide();
            clearInterval(slideInterval);
            slideInterval = startAutoSlide();
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    function revealOnScroll() {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});