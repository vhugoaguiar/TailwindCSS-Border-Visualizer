"use strict";

const btnApply = document.querySelector("#apply");
const btnCopy = document.querySelector("#btnCopy");
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
  copy.value = copyClasses;
};

/* Copy the content from the copy area to the clipboard. *
 * I tried to use a <div> at fisrt, but the select() function only worked with a <input> field */
const copyClasses = () => {
  const copy = document.querySelector("#copy");
  const tooltip = document.querySelector("#tooltip");

  // Select the text field
  copy.select();
  copy.setSelectionRange(0, 99999);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copy.value);

  // Change the text content of the tooltip:
  tooltip.textContent = "Text copied!";
};

// When the button Apply is clicked, execute the function applyClasses
btnApply.addEventListener("click", applyClasses);
// When the copy icon is clicked, execute the function copyClasses
btnCopy.addEventListener("click", copyClasses);
