const burgerEl = document.querySelector(".burger");
const menuEl = document.querySelector(".nav-menu");
const barBurger = document.querySelectorAll(".bar");
const btnLangEl = document.querySelector(".btn-lang");
const body = document.body;

burgerEl.addEventListener("click", () => {
  burgerEl.classList.toggle("active");
  menuEl.classList.toggle("active");
  body.classList.toggle("stopscroll");
});
document.querySelectorAll(".nav-menu").forEach((n) =>
  n.addEventListener("click", () => {
    burgerEl.classList.remove("active");
    menuEl.classList.remove("active");
    body.classList.remove("stopscroll");
  })
);

const langBtn = document.querySelector(".btn-lang");
const dropDown = document.querySelector(".dropdown__list");
const langList = document.querySelectorAll(".dropdown__list-item");
const langValue = document.querySelector(".btn-lang__value");

langBtn.addEventListener("click", function () {
  dropDown.classList.toggle("active");
  // langBtn.classList.toggle("active");
});
langList.forEach((el) => {
  el.addEventListener("click", function (e) {
    langValue.textContent = e.target.textContent;
    dropDown.classList.toggle("active");
    langBtn.classList.toggle("active");
  });
});
