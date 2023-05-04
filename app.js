//navbar menu code

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

menuLinks.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

//dog popup code

const openPopupButtons = document.querySelectorAll("[data-popup-target]");
const closePopupButtons = document.querySelectorAll("[data-popup-close]");
const overlay = document.getElementById("popup__overlay");
const popup = document.getElementById("popup");

openPopupButtons.forEach((a) => {
  a.addEventListener("click", () => {
    console.log("trying to open");
    openPopup(popup);
  });
});

closePopupButtons.forEach((a) => {
  a.addEventListener("click", () => {
    console.log("trying to close");
    closePopup(popup);
  });
});

function openPopup(popup) {
  console.log("opening");
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(popup) {
  console.log("closing");
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

//smooth scrolling links code

links = document.querySelectorAll('a[href^="#"]');

links.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
