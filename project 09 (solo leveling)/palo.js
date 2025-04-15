const menu = document.querySelector('.menu');

const toggle = document.querySelector('.menuToggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})