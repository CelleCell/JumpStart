const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
