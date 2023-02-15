"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

function openModal(event) {
  event.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnsOpenModal.forEach(function (btn) {
  return btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener("click", function (event) {
  const s1coords = section1.getBoundingClientRect();

  // Scroling OLD SCHOOL
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  // Scrolling NEW SCHOOL
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page navigation

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document
  .querySelector(".nav__links")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Matching strategy
    if (event.target.classList.contains("nav__link")) {
      const sectionId = event.target.getAttribute("href");
      document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  });
