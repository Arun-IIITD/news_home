const menuBtn = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("open");
});
