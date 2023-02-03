const email = document.getElementById('email');
const form = document.getElementById('form');
const errorText = document.getElementById('errorTxt');
const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

form.addEventListener('submit', (e) => {
  if (!(validator.test(email.value))) {
    errorText.style.display = 'block';
    e.preventDefault();
  }
});