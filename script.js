// User login state
let isSignedIn = false; // initially false
let userName = "TIRTH"; // You can get this from login if you integrate later

const userToggle = document.getElementById("userToggle");
const userMenu = document.getElementById("userMenu");
const signInOption = document.getElementById("signInOption");
const signOutOption = document.getElementById("signOutOption");

// Toggle user dropdown
userToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click closing it immediately
    if (isSignedIn) {
        userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
    } else {
        // Not signed in → go to login page
        window.location.href = "login.html"; // 🔁 Change if your login file is named differently
    }
});

// Handle Sign In (from menu)
signInOption.addEventListener("click", () => {
    isSignedIn = true;
    userToggle.innerHTML = `${userName} <i class="fas fa-chevron-down"></i>`;
    userMenu.style.display = "none";
    localStorage.setItem("signedIn", "true");
    localStorage.setItem("userName", userName);
});

// Handle Sign Out
signOutOption.addEventListener("click", () => {
    isSignedIn = false;
    userToggle.innerHTML = `Sign In <i class="fas fa-chevron-down"></i>`;
    userMenu.style.display = "none";
    localStorage.setItem("signedIn", "false");
    localStorage.removeItem("userName");
});

// Hide user menu on outside click
document.addEventListener("click", function (e) {
    if (!userToggle.contains(e.target) && !userMenu.contains(e.target)) {
        userMenu.style.display = "none";
    }
});

// Navigation toggle for mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu when nav link is clicked (mobile)
document.querySelectorAll("#navLinks a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Search dropdown toggle
const searchIcon = document.getElementById("searchIcon");
const searchDropdown = document.getElementById("searchDropdown");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click closing immediately
    searchDropdown.classList.toggle("show");
    if (searchDropdown.classList.contains("show")) {
        searchInput.focus();
    }
});

// Hide search dropdown if clicked outside
document.addEventListener("click", function (e) {
    if (!searchDropdown.contains(e.target) && !searchIcon.contains(e.target)) {
        searchDropdown.classList.remove("show");
    }
});

// Search input Enter key handler
searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        alert("You searched for: " + this.value);
        this.value = "";
        searchDropdown.classList.remove("show");
    }
});

// On page load, restore login state
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("signedIn") === "true") {
        isSignedIn = true;
        userName = localStorage.getItem("userName") || "User";
        userToggle.innerHTML = `${userName} <i class="fas fa-chevron-down"></i>`;
    }
});

// Carousel functionality
const track = document.getElementById("carouselTrack");
const slides = Array.from(track.children);
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

let currentIndex = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    slides.forEach((slide, index) => {
        slide.classList.toggle("current-slide", index === currentIndex);
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateSlidePosition();
});

nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateSlidePosition();
});

// Initialize carousel position
updateSlidePosition();
