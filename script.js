// === Grab all necessary elements ===
const uploadBox = document.getElementById("uploadBox");
const avatarInput = document.getElementById("avatar");
const avatarPreview = document.getElementById("avatarPreview");
const avatarPreviewContainer = document.getElementById("avatarPreviewContainer");
const ticketAvatar = document.getElementById("ticketAvatar");
const preview = document.getElementById("preview");
const removeBtn = document.getElementById("removeAvatar");

// === Drag and Drop Upload ===
uploadBox.addEventListener("dragover", function (e) {
  e.preventDefault();
  uploadBox.classList.add("dragover");
});

uploadBox.addEventListener("dragleave", function () {
  uploadBox.classList.remove("dragover");
});

uploadBox.addEventListener("drop", function (e) {
  e.preventDefault();
  uploadBox.classList.remove("dragover");
  const file = e.dataTransfer.files[0];
  if (file) {
    avatarInput.files = e.dataTransfer.files;
    const url = URL.createObjectURL(file);
    avatarPreview.src = url;
    avatarPreviewContainer.hidden = false; // ✅ Show the container
    ticketAvatar.src = url;
  }
});

// === File input preview ===
avatarInput.addEventListener("change", function () {
  const file = avatarInput.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    avatarPreview.src = url;
    avatarPreviewContainer.hidden = false; // ✅ Show the container
    ticketAvatar.src = url;
  }
});

// === Remove uploaded photo ===
removeBtn.addEventListener("click", () => {
  avatarInput.value = ""; // Reset file input
  avatarPreview.src = ""; // Clear preview image
  avatarPreviewContainer.hidden = true; // ✅ Hide container
  ticketAvatar.src = "assets/avatar-placeholder.png"; // Reset ticket avatar
});

// === Form submission ===
// === Form submission ===
document.getElementById("ticketForm").addEventListener("submit", function (e) {
    if (!this.checkValidity()) {
    this.reportValidity(); // Show browser popup message like "Please fill out this field."
    e.preventDefault(); // Prevent form only if invalid
    return;
  }
  e.preventDefault();


  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const github = document.getElementById("github").value;
  const file = document.getElementById("avatar").files[0];

  document.getElementById("ticketName").textContent = name || "Name";
  document.getElementById("ticketEmail").textContent = email || "Email";
  document.getElementById("ticketgithub").textContent = github || "GitHub";

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      // Store form values + image in localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("github", github);
      localStorage.setItem("userImage", reader.result); // base64 string

      // Navigate after data is saved
      window.location.href = "ticket.html";
    };
    reader.readAsDataURL(file);
  } else {
    // No image uploaded — save rest anyway
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("github", github);
    localStorage.setItem("userImage", "assets/avatar-placeholder.png");

    window.location.href = "ticket.html";
  }
});




;
