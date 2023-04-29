const submitForm = document.querySelector('.login-form')
const email = document.querySelector('[name="email"]')
const password = document.querySelector('[name="password"]')

submitForm.addEventListener("submit", onFormSend);

function onFormSend(event) {
  event.preventDefault();
  const elements = {email: email.value, password: password.value};
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }
console.log(elements);
submitForm.reset();
}