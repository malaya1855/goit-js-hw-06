const submitForm = document.querySelector('.login-form')
const email = document.querySelector('[name="email"]')
const password = document.querySelector('[name="password"]')

submitForm.addEventListener("submit", onFormSend);

function onFormSend(event) {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
  else {
    const elements = {email: email.value, password: password.value};
    console.log(elements);
    submitForm.reset();
  }
}