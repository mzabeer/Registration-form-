// script.js
function showConfirmationMessage() {
    const confirmationMessage = "Registration Successful! Thank you for signing up.";
    alert(confirmationMessage);
  }
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    showConfirmationMessage();
  });
  