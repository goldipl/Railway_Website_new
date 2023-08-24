const menuButton = document.querySelector(".menuButton");
const menuItems = document.querySelector(".menuList");
const expandListButton = document.querySelectorAll(".expandList");
// const bodyTag = document.querySelector("body");
const anchorButton = document.querySelectorAll(".menuListAnchorClose");

// Opening and closing hamburger menu
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    menuItems.classList.toggle("open");
    // bodyTag.classList.toggle("bodyLock");
});

// Expanding mobile menu
expandListButton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("open");
    });
});

// Closing hamburger menu after clicking anchor href link
anchorButton.forEach((button) => {
    button.addEventListener("click", () => {
        menuButton.classList.remove("open");
        menuItems.classList.remove("open");
    });
});

// Footer Year
document.querySelector("span.footerYear").innerHTML = new Date().getFullYear();