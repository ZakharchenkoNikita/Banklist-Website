"use strict";
/*

///////////////////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("#section--1");
const allBtns = document.getElementsByTagName("button");
console.log(allBtns);

console.log(document.getElementsByClassName("btn"));
*/

///////////////////////////////////////////////////////////////

// Creating and inserting elements
// .insertAdjacentHTML

const header = document.querySelector(".header");

const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookies for improve functionalyti and analytics.";
message.innerHTML =
  'We use cookies for improve functionalyti and analytics. <button class= "btn btn--close-cookie">Got it!</button>';

// Add element programmatically
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

/*

// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// Don't use
// logo.className = "Nick";

*/