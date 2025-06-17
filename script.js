window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-section');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(sectionPosition < screenPosition) {
        aboutSection.classList.add('visible');
    }
});

const menuLinks = document.querySelectorAll('.menu a');
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const flipCard = document.getElementById('flipCard');
if (flipCard) {
    flipCard.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const flipCard = document.querySelector(".flip-card");

    if (flipCard) {
        flipCard.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    }
});

window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('.skills-section');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        skillsSection.classList.add('visible');
    }
});


window.addEventListener('scroll', function () {
    const sections = ['.projects-section', '.contact-section'];

    sections.forEach(selector => {
        const section = document.querySelector(selector);
        if (section) {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                section.classList.add('visible');
            }
        }
    });
});