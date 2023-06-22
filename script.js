// Retrieve the user's language preference from local storage
const preferredLanguage = localStorage.getItem("language");

// Get the language sections
const englishSection = document.getElementById("english");
const spanishSection = document.getElementById("spanish");

// Get the select element
const selectElement = document.querySelector(".select-wrapper");

// Set the selected option based on the preferred language
selectElement.value = preferredLanguage;

// Show the appropriate language section based on the user's preference
if (preferredLanguage === "spanish") {
  spanishSection.style.display = "block";
} else {
  englishSection.style.display = "block";
}

// Function to change the language
function changeLanguage(language) {
  // Update the selected option
  selectElement.value = language;

  if (language === "spanish") {
    spanishSection.style.display = "block";
    englishSection.style.display = "none";
  } else {
    englishSection.style.display = "block";
    spanishSection.style.display = "none";
  }

  // Store the language preference in local storage
  localStorage.setItem("language", language);
}
