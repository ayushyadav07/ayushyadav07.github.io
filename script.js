// Get references to the menu button and the navbar
const menuButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Add a click event listener to the menu button
menuButton.addEventListener("click", () => {
  // Toggle the "active" class on the navbar to show/hide it
  navbar.classList.toggle("active");
});
