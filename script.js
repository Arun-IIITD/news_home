const menuBtn = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const nav = document.querySelector("nav");

/* MOBILE MENU */
menuBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("open");
});

/* HERO IMAGE SWITCH (FOR CYPRESS) */
const heroImg = document.querySelector(".hero-img img");

function updateHeroImage() {
  if (window.innerWidth < 1000) {
    heroImg.src = "./assets/image-web-3-mobile.jpg";
  } else {
    heroImg.src = "./assets/image-web-3-desktop.jpg";
  }
}

updateHeroImage();
window.addEventListener("resize", updateHeroImage);
