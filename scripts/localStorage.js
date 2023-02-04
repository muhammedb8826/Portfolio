const lSname = document.getElementById('your-name');
const lSemail = document.getElementById('email');
const lSmssage = document.getElementById('form-text-area');
const inputs = Array.from(document.getElementsByClassName('info-form'));

inputs.forEach((input) => input.addEventListener('input', () => {
  localStorage.setItem(
    'formData',
    JSON.stringify({
      name: lSname.value,
      email: lSemail.value,
      message: lSmssage.value,
    }),
  );
}));

const parsedLS = JSON.parse(localStorage.formData);

window.onload = () => {
  lSname.value = parsedLS.name;
  lSemail.value = parsedLS.email;
  lSmssage.value = parsedLS.message;
};