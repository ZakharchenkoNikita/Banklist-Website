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
// header.append(message);
// header.append(message.cloneNode(true));
header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
