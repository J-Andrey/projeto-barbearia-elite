// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ANIMAÇÃO SCROLL
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => observer.observe(card));