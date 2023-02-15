"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// Modal window
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

// Tabbed component
tabsContainer.addEventListener("click", function (event) {
  const clicked = event.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(function (tab) {
    return tab.classList.remove("operations__tab--active");
  });

  tabsContent.forEach(function (content) {
    return content.classList.remove("operations__content--active");
  });

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
