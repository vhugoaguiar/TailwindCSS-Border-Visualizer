"use strict";

const copy = document.querySelector("#copy");
const btnApply = document.querySelector("#apply");
let applied = [];

// Apply the selected classes to the "box" div, also cleaning the previously applied ones
const applyClasses = () => {
  const box = document.querySelector("#box");
  const inputBorderStyle = document.querySelector("#borderStyle");
  const inputBorderRadius = document.querySelector("#borderRadius");
  const inputBorderWidth = document.querySelector("#borderWidth");
  const inputborderColor = document.querySelector("#borderColor");

  // Remove previously applied classes
  applied.forEach((element) => box.classList.remove(element));

  // Add the new classes
  box.classList.add(
    inputBorderStyle.value,
    inputBorderRadius.value,
    inputBorderWidth.value,
    `border-[${inputborderColor.value}]`
  );

  // Update the applied array with the new classes
  applied = [
    inputBorderStyle.value,
    inputBorderRadius.value,
    inputBorderWidth.value,
    `border-[${inputborderColor.value}]`,
  ];

  // Update the copy fied with the current classes:
  let copyClasses = "";
  applied.forEach((element) => (copyClasses += element + " "));
  copy.textContent = copyClasses;
};

// When the button Apply is clicked, execute the function applyClasses
btnApply.addEventListener("click", applyClasses);

/**** TO BE IMPLEMENTED => Add the event listener on the "copy" buttom to make it work (copping the applied classes to the clipboard)*****/