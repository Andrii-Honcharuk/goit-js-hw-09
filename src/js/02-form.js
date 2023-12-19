import throttle from "lodash.throttle";

const feedbackFormEl = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state"


const userData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
  email: '',
  message: ''
}
feedbackFormEl.elements.email.value = userData.email ?? '';
feedbackFormEl.elements.message.value = userData.message ?? '';


feedbackFormEl.addEventListener("input", onInputForm);

function onInputForm(event) {
  const {email, message} = event.currentTarget.elements;
  const userData = {
    email: email.value.trim(),
    message: message.value.trim(),
  }
  localStorage.setItem(localStorageKey, JSON.stringify(userData));

  // console.log(userData);
}


feedbackFormEl.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const inputEmail = event.target.elements.email.value.trim();
  const inputMsg = event.target.elements.message.value.trim();

  if (!inputEmail || !inputMsg) return alert ("Input correct information");
  const savedUserData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
    email: '',
    message: ''
  };

  console.log("Saved:");
  console.log(savedUserData);
  
  localStorage.removeItem(localStorageKey);
  event.target.reset();
};