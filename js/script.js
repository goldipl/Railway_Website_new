const menuButton = document.querySelector(".menuButton");
const menuItems = document.querySelector(".menuList");
const expandListButton = document.querySelectorAll(".expandList");
const bodyTag = document.querySelector("body");

// Opening and closing hamburger menu
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    menuItems.classList.toggle("open");
    bodyTag.classList.toggle("bodyLock");
});

// Expanding mobile menu
expandListButton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("open");
    });
});