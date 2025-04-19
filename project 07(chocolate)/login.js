const passwordinput = document.getElementById('password');
const togglepassword = document.getElementById('togglepassword');

togglepassword.addEventListener('click', () => {
    const ispassword = passwordinput.type === "password";
    passwordinput.type = ispassword ? "text" : "password"; 
})

const botaodamaria = document.querySelector('.botaodamaria').addEventListener('click', () => {
    window.location.href = 'index.html';
})

