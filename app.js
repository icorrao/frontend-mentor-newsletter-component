// validate email
function validateEmail(event) {
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var errorLabel = document.getElementById("error-label");

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailInput.value.match(emailPattern)) {
    errorLabel.classList.add("hidden");

    localStorage.setItem("userInput", emailInput.value);
    window.location.href = "success.html";
  } else {
    errorLabel.classList.remove("hidden");
    emailInput.classList.add("input-error");
  }
}

//display email input in success page
document.addEventListener("DOMContentLoaded", function () {
  var userEmail = localStorage.getItem("userInput");

  var submittedEmail = document.getElementById("submitted-email");

  if (userEmail) {
    submittedEmail.textContent = userEmail;
    localStorage.removeItem("userInput");
  } else {
    submittedEmail.textContent = "No email found";
  }
});

//redirect to index.html
document.getElementById("dismiss").addEventListener("click", function () {
  window.location.href = "index.html";
});
