// Current Date Widget
/**
 * DATE WIDGET
 * Displays current day and month on the home page
 */

const now = new Date();

// Extract current day (1-31) and display in hero element
document.getElementById("current-day").innerHTML = now.getDate();

// Array of month abbreviations for display
const monthsOfTheYear = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

// Display current month abbreviation
document.getElementById("current-month").innerHTML =
  monthsOfTheYear[now.getMonth()];


/**
 * 
 * PAGE NAVIGATION
 * 
 * Manages transitions between home and contact pages
 * Uses CSS animations defined in style.css
 */

// DOM elements for navigation
const homeSection = document.getElementById("home");
const contactSection = document.getElementById("contact-page");

/**
 * Navigates from home page to contact page
 * - Removes slide-out class from contact section (allows slideUp animation)
 * - Adds slide-out class to home section (slides up and disappears)
 * - After animation completes, hides home and shows contact
 */
function navigateToContact() {
  contactSection.classList.remove("slide-out");
  homeSection.classList.add("slide-out");
  
  setTimeout(() => {
    homeSection.classList.add("hidden");
    contactSection.classList.remove("hidden");
  }, 600); // Match @keyframes slideOut duration
}

/**
 * Navigates from contact page to home page
 * - Removes slide-out class from home section (allows slideUp animation)
 * - Adds slide-out class to contact section (slides up and disappears)
 * - After animation completes, shows home and hides contact
 */
function navigateHome() {
  homeSection.classList.remove("slide-out");
  contactSection.classList.add("slide-out");
  
  setTimeout(() => {
    contactSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  }, 600); // Match @keyframes slideOut duration
}

/**
 * Attach event listeners to all elements with 'to-contact-page' class
 * This includes:
 * - Navigation menu "contact" link
 * - Contact CTA button (#contact-me)
 * - All three contact button paragraphs
 */
const toContactPageElements = document.querySelectorAll(".to-contact-page");

toContactPageElements.forEach(element => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    navigateToContact();
  });
});

/**
 * "Return home" link on contact page
 */
document.getElementById("return-home").addEventListener("click", (e) => {
  e.preventDefault();
  navigateHome();
});