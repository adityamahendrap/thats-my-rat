const nav = document.querySelector("nav");
const navLogo = document.querySelector(".nav-logo img");
const navItemIcons = document.querySelectorAll(".nav-item-icon");
const main = document.querySelector("main");

function applyScrolledStyles() {
  nav.style.padding = "0 1rem";
  nav.style.flexDirection = "row";
  navLogo.style.width = "50px";
  navLogo.style.height = "50px";
  navItemIcons.forEach((icon) => {
    icon.style.transform = "scale(0.8)";
  });
  padding.style.marginTop = "50px";
}

function applyTopStyles() {
  nav.style.padding = "1rem 0";
  nav.style.flexDirection = "column";
  navLogo.style.width = "120px";
  navLogo.style.height = "120px";
  navItemIcons.forEach((icon) => {
    icon.style.transform = "scale(1)";
  });
  padding.style.marginTop = "214px";
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 120) {
    applyScrolledStyles();
  } else {
    applyTopStyles();
  }
});
