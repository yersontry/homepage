// Get the language sections
const englishSection = document.getElementById("english");
const spanishSection = document.getElementById("spanish");

// Get user's browser preferred language
const browserLanguage = navigator.languages[0].startsWith("en")
  ? "english"
  : navigator.languages[0].startsWith("es")
  ? "spanish"
  : "english";

console.log("browser language is " + browserLanguage);

// Retrieve the user's language preference from local storage
const localLanguage = localStorage.getItem("language");

// Get the select element
const selectElement = document.querySelector(".select-wrapper");

// Set preferred language, browser language by default
let preferredLanguage =
  localStorage.getItem("language") != null
    ? localStorage.getItem("language")
    : localStorage.getItem("language") == null
    ? browserLanguage
    : "problems";

console.log("language stored in memory is " + localStorage.getItem("language"));

// Set the selected option based on the preferred language
selectElement.value = preferredLanguage;

console.log("preferred lang is " + preferredLanguage);

// Function to change the language
function changeLanguage(language) {
  // Update the selected option
  selectElement.value = language;

  // Show the appropriate language section based on the user's preference
  if (language === "spanish") {
    spanishSection.style.display = "block";
    englishSection.style.display = "none";
  } else if (language === "english") {
    spanishSection.style.display = "none";
    englishSection.style.display = "block";
  } else {
    englishSection.style.display = "none";
    spanishSection.style.display = "none";
  }

  // Store the language preference in local storage
  localStorage.setItem("language", language);
}
