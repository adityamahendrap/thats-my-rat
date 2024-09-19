const nav = document.querySelector("nav");
const navLogo = document.querySelector(".nav-logo img");
const navItemIcons = document.querySelectorAll(".nav-item-icon");
const main = document.querySelector("main");

function applyScrolledStyles() {
  nav.style.padding = "0.5rem 1rem";
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

// select model logic
const modelListItems = document.querySelectorAll(".model-list li");
const selectedModel = document.querySelector(".selected-model img");
modelListItems[0].style.backgroundColor = "#d737349a";
modelListItems.forEach((item) => {
  item.addEventListener("click", function () {
    modelListItems.forEach((li) => (li.style.backgroundColor = ""));
    this.style.backgroundColor = "#d737349a";
    const imgSrc = this.querySelector("img").src;
    selectedModel.src = imgSrc;
  });
});
