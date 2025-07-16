// Fetch data from localStorage
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const github = localStorage.getItem("github");
const image = localStorage.getItem("userImage");

// Inject into the DOM
document.getElementById("userName").textContent = name || "Guest";
document.getElementById("userFullName").textContent = name || "Guest";
document.getElementById("userEmail").textContent = email || "your@email.com";
document.getElementById("userHandle").textContent = github ? `@${github}` : "@githubuser";
document.getElementById("userImage").src = image || "assets/images/default.jpg"; // Fallback image
