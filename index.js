const form = document.getElementById("form-field");
const firstNameEl = document.getElementById("firstname");
const lastNameEl = document.getElementById("lastname");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

// console.log();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSucess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const regexE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexE.test(String(email).toLocaleLowerCase());
};

const validateInputs = () => {
  const firstName = firstNameEl.value.trim();
  const lastName = lastNameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  if (firstName === "") {
    setError(firstNameEl, "Firstname is required");
  } else {
    setSucess(firstNameEl);
  }

  if (lastName === "") {
    setError(lastNameEl, "LastName is required");
  } else {
    setSucess(lastNameEl);
  }

  if (email === "") {
    setError(emailEl, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(emailEl, "Provide a valid email address!");
  } else {
    setSucess(emailEl);
  }

  if (password === "") {
    setError(passwordEl, "Password is required");
  } else if (password.length < 8) {
    setError(passwordEl, "Password must be at least 8 characters!");
  } else {
    setSucess(passwordEl);
  }
};
