// Function to toggle password visibility for a given input field and its toggle icon
function setupPasswordToggle(passwordFieldId, toggleIconSelector) {
  const passwordField = document.getElementById(passwordFieldId);
  const togglePassword = document.querySelector(toggleIconSelector);

  if (passwordField && togglePassword) {
    togglePassword.addEventListener("click", function () {
      // Toggle the type attribute
      const type =
        passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);

      // Toggle the eye icon
      this.querySelector("i").classList.toggle("fa-eye");
      this.querySelector("i").classList.toggle("fa-eye-slash");
    });
  }
}

// Setup for the main password field
setupPasswordToggle("password", "#password + .password-toggle-icon");
// Setup for the confirm password field
setupPasswordToggle("confirm-password", "#confirm-password + .password-toggle-icon");