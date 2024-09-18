const nav = document.querySelector("nav");
const navLogo = document.querySelector(".nav-logo img");
const navItemIcons = document.querySelectorAll(".nav-item-icon");

function applyScrolledStyles() {
  nav.style.padding = "0 1rem";
  nav.style.flexDirection = "row";
  navLogo.style.width = "50px";
  navLogo.style.height = "50px";
  navItemIcons.forEach((icon) => {
    icon.style.transform = "scale(0.8)";
  });
}

function applyTopStyles() {
  nav.style.padding = "1rem 0";
  nav.style.flexDirection = "column";
  navLogo.style.width = "120px";
  navLogo.style.height = "120px";
  navItemIcons.forEach((icon) => {
    icon.style.transform = "scale(1)";
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    applyScrolledStyles();
  } else {
    applyTopStyles();
  }
});
