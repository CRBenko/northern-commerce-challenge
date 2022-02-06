const contactForm = document.querySelector("#signup");
const submitForm = document.querySelector("#submitted");
const signupBtn = document.querySelector("#submit");
const submittingBtn = document.querySelector("#submitting");
const messageElement = document.querySelector(".form__message");
const emailField = document.querySelector(".form__input");
const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

function validate() {
  if (regex.test(email.value)) {
    signupBtn.textContent = "Submitting...";
    signupBtn.disabled = true;
    setTimeout(function () {
      submitForm.style.display = "block";
      contactForm.style.display = "none";
      console.log(`${email.value}, ${interests.value}`);
    }, 2000);
  } else {
    messageElement.classList.remove("form__error--hidden");
    emailField.style.borderColor = "#d02035";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    validate(contactForm);
  });
});
