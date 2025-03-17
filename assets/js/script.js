document.addEventListener("DOMContentLoaded", function() {
    // Efeito de mudança no menu ao rolar a página
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            nav.classList.add("nav-scroll");
        } else {
            nav.classList.remove("nav-scroll");
        }
    });

    // Animação para elementos surgirem suavemente ao carregar
    const elements = document.querySelectorAll(".content h1, .content p");
    elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
    });

    setTimeout(() => {
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            }, index * 200);
        });
    }, 300);
});

