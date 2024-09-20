// handle audio toggle
const audio = document.getElementById("bg-audio");
const toggleButton = document.querySelector(".audio-toggle");
const toggleIcon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleIcon.classList.remove("fa-volume-xmark");
    toggleIcon.classList.add("fa-volume-high");
  } else {
    audio.pause();
    toggleIcon.classList.remove("fa-volume-high");
    toggleIcon.classList.add("fa-volume-xmark");
  }
});

// handle nav clicked
const navHome = document.querySelector(".nav-home");
const navAbout = document.querySelector(".nav-about");
const navMusic = document.querySelector(".nav-music");

navHome.addEventListener("click", function () {
  scrollToTop();
});

navAbout.addEventListener("click", function () {
  const about = document.querySelector(".about-nav-point");
  about.scrollIntoView({ behavior: "smooth" });
});

navMusic.addEventListener("click", function () {
  scrollToBottom();
});

// handle responsive navbar
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

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
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

// handle select model
const modelListItems = document.querySelectorAll(".model-list li");
const selectedModel = document.querySelector(".selected-model img");
modelListItems[0].style.backgroundColor = "#d73634";
modelListItems.forEach((item) => {
  item.addEventListener("click", function () {
    modelListItems.forEach((li) => (li.style.backgroundColor = ""));
    this.style.backgroundColor = "#d73634";
    const imgSrc = this.querySelector("img").src;
    selectedModel.src = imgSrc;
  });
});

// music slider
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".slider-items");

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();

// music slider items
const musics = [
  {
    title: "ZODIAC",
    imageUrl:
      "https://lh3.googleusercontent.com/22X_m0rt8ceFIJ9gUZvYAfwpZmcT4KXpTBlftw127PTShIgiTNxHHmVDdhDTm68LjGlr8pd8kRxWqkSr=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_lTz45OxpkrMJeOTv9j_ApAmyHpArYRtRA",
  },
  {
    title: "Pandæmonium",
    imageUrl:
      "https://lh3.googleusercontent.com/1HFCTRqx_Et2ffpVHg69HyFpUN2pdo93nbElbfC7zJepMO7E18p9gU3-zfRhReHt5GPF4yxo7pkjYZlc=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_mQE8bpbAocKMoyAusT6PQ5uhSrPvye2Rw",
  },
  {
    title: "BITE! KAMU! BITE!",
    imageUrl:
      "https://lh3.googleusercontent.com/8WPsDM28Lb4sf8PxRJfzOjwSFfoBbN-8uoo7DsPsw1aAKG2H49rAYJYgQcm-AEKu9pd9i-YhhTZXbWM=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_nAE2HP_hNvfAomAHjvSJ2wumtbrtr5NVQ",
  },
  {
    title: "PSYCHO",
    imageUrl:
      "https://lh3.googleusercontent.com/5jep7NM7USk_TABuKWwwvz20sdxO1S-7F7Uik1O7YGDrOatCyS8GPssKNpYC9Dh5IMmRyIefUMo2JNpJ=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_lPkANsPnZ100P-YXtJoVNPxUdVpRDKk1A",
  },
  {
    title: "Sweet Appetite",
    imageUrl:
      "https://lh3.googleusercontent.com/BnN6C6IbgB35C-CDYM1sbRuntuJNc6MsHNDqmRLuavV82AgzVMSPwG_LRKHaS2fkvXw74TMsYlhfFqU=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_ko22pIHgsaYGTMvJ9AVRY61T9MXfzyewM",
  },
  {
    title: "Play Dice!",
    imageUrl:
      "https://lh3.googleusercontent.com/Vbdz0rfxnhmQOqPOl4vIK9e9QUNTmYeAbthdh_wEucLCYvfKL2Er_Xrd3dDKQjMixAH2yXpdWuME-cQ=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_kcY_Qz5jFscHlLuEQeWjcHV9nW6l5sDsc",
  },
  {
    title: " HIDE & SEEK 〜Nakayoku Kenkashina〜",
    imageUrl:
      "https://lh3.googleusercontent.com/wSNTGD13bcbtxBWNWZ-NOcnEw9xokIx1Xqw4UmG2AEVrPqxybMGczYMcX7w4ttrDFayDUIxEoD2Wle8=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_kRAPw7RYfZBmJhe5wTjTPZwPxSiDLKOuc",
  },
  {
    title: "Breaking Dimensions",
    imageUrl:
      "https://lh3.googleusercontent.com/bie5zI1Q8Lno6p-8HVAvG5cf9gDHrHsp7tcbtRiZNm8yIWpyFsWQEPux8Uo3FDoMb5s_rhv6zOgK_yGe=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_nYj85HazeYicVI-zcseXpomc98LkiEHEU",
  },
  {
    title: "Connect the World",
    imageUrl:
      "https://lh3.googleusercontent.com/DYy6TQUeKHvN0nzEmCRlRzPQcMeXn452ci3AcedL7Qk8_cQQ-rqaJ4S7gXnmmpnn9u775bjHsm5pEYHl=w544-h544-l90-rj",
    musicUrl:
      "https://music.youtube.com/playlist?list=OLAK5uy_lldV7qE4RhUgK9X2PncQvqDkzUObls8kg",
  },
];

const sliderItemsContainer = document.querySelector(".slider-items");

musics.forEach((music) => {
  const listItem = document.createElement("li");
  listItem.classList.add("slider-item");

  listItem.innerHTML = `
    <div class="slider-image-container">
      <img src="${music.imageUrl}" alt="${music.title}">
      <div class="slider-image-overlay"></div>
      <p>${music.title}</p>
      
      <a href="${music.musicUrl}" target="_blank" class="play-link">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  `;

  sliderItemsContainer.appendChild(listItem);
});
