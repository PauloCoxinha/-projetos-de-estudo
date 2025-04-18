const togglepassword = document.querySelector('.bxs-low-vision');
const passwordinput = document.querySelector('.password')

togglepassword.addEventListener('click', () => {
    const ispassword = passwordinput.type === "password";
    passwordinput.type = ispassword ? "text" : "password";
});

const togglepassword2 = document.getElementById('togglepassword2');
const passwordinput2 = document.getElementById('password2');

togglepassword2.addEventListener('click', () => {
    const ispassword2 = passwordinput2.type === "password";
    passwordinput2.type = ispassword2 ? "text" : "password";
});