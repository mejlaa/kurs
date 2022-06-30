const form = document.getElementById("signup");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const passwordInput = document.getElementById("password");
const dateInput = document.getElementById("date");

const valid = (input, errorId) => {
  if (input.value === "") {
    document.getElementById("errorId").textContent = "Please input something";
  } else {
    document.getElementById("errorId").textContent = "";
  }
};
const submitFunction = (event) => {
  event.preventDefault();
  const nameValid = valid(nameInput, "errorName");
  const surnameValid = valid(surnameInput, "errorSurame");
  const passwordValid = valid(passwordInput, "errorPassword");
  const dateValid = valid(dateInput, "errorDate");

  if (nameValid && surnameValid && passwordValid && dateValid) {
    alert("your input are valid");
  }

  console.log(event);
};

form.addEventListener("submit", submitFunction);
