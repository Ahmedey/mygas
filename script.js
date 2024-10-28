const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.getElementById("theme-toggle");

mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

//   themeToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     document.body.classList.toggle("light-mode");
//   });
themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");

  // Toggle between dark and light modes
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  // Save the current theme to localStorage
  if (isDarkMode) {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }
});

window.addEventListener("load", function () {
  const theme = localStorage.getItem("theme");

  document.body.classList.toggle(theme);
});

// Handle form submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const message = document.getElementById("message").value;

  // Save to local storage
  localStorage.setItem(
    "contactFormData",
    JSON.stringify({ name, email, mobile, message })
  );

  // Simulate email sending (for demo purposes)
  alert("Your message has been sent successfully!");

  // Clear the form
  contactForm.reset();
});
