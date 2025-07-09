// User login state
let isSignedIn = false; // initially false
let userName = "TIRTH"; // You can get this from login if you integrate later

const userToggle = document.getElementById("userToggle");
const userMenu = document.getElementById("userMenu");
const signInOption = document.getElementById("signInOption");
const signOutOption = document.getElementById("signOutOption");

// Toggle user dropdown
userToggle.addEventListener("click", () => {
    if (isSignedIn) {
        userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
    } else {
        // Not signed in → go to login page
        window.location.href = "login.html"; // 🔁 Change if your login file is named differently
    }
});

// Handle Sign In (from menu, though not usually needed now)
signInOption.addEventListener("click", () => {
    if (!isSignedIn) {
        window.location.href = "login.html";
    }
});

// Handle Sign Out
signOutOption.addEventListener("click", () => {
    isSignedIn = false;
    userToggle.innerHTML = `User <i class="fas fa-chevron-down"></i>`;
    userMenu.style.display = "none";
});

