

const square = document.querySelector('.square');

const bg = document.querySelector('.fundo')

window.addEventListener('mousemove', (e) => {
     
    anime({
        targets: square,
        translateX: e.clientX - window.innerWidth / 2,
        translateY: e.clientY - window.innerHeight / 2,
        easing: 'easeOutExpo',
        duration: 500
    });

   
   
});
          





const videoedit = document.querySelector('.videosedit');
const textedit = document.querySelector('.textedit');
const editgame = document.querySelector('.editgame');
const textgame = document.querySelector('.textgame');
const tituloedit = document.querySelector('.tituloedit');
const titulogame = document.querySelector('.titulogame')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('videosedit')) {
        anime({
          targets: videoedit,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 1000,
          easing: 'easeOutExpo'
        });
      }

      if (entry.target.classList.contains('textedit')) {
        anime({
          targets: textedit,
          opacity: [0, 1],
          translateY: [100, 0],
          delay: anime.stagger(50),
          duration: 800,
          easing: 'easeInOutCirc'
        });
      }

      if(entry.target.classList.contains('editgame')) {
        anime({
            targets: editgame,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 1000,
          easing: 'easeOutExpo'
        });
      }

      if(entry.target.classList.contains('textgame')){
        anime({
          targets: textgame,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 1000,
          easing: 'easeOutExpo'
        });
      }

      if(entry.target.classList.contains('tituloedit')){
        anime({
          targets: tituloedit,
          opacity: [0, 1],
          duration: 6000,
          easing: 'easeOutExpo'
        });
      }

      if(entry.target.classList.contains('titulogame')){
        anime({
          targets: titulogame,
          opacity: [0, 1],
          duration: 6000,
          easing: 'easeOutExpo'
        });
      }

      // Para não repetir a animação
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

// Começa a observar os elementos
observer.observe(videoedit);
observer.observe(textedit);
observer.observe(editgame);
observer.observe(textgame);
observer.observe(tituloedit);
observer.observe(titulogame);








    

videoedit.style.opacity = 0;
textedit.style.opacity = 0





observer.observe(videoedit);
observer.observe(textedit);

let audio = document.getElementById('audiodasilva');


document.addEventListener('mouseenter', (event) => {
  if(event.target.tagName === 'A'){
    audio.currentTime = 0;
    audio.play();
  }
}, true);

document.addEventListener('mouseout', (event) => {
  if(event.target.tagName === 'A'){
    audio.onpause();
    audio.currentTime = 0;
  }
}, true);

const slides = document.querySelectorAll('.iframereal');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.projects')



let index = 0;

function showslides(i){
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
  centerSlide(i)
};

function centerSlide(i){
  const activeslide = slides[i];
  const containerWidth = container.offsetWidth;
  const sliderRect = activeslide.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const offset = (containerWidth/ 2) - (sliderRect.width / 2) - (sliderRect.left - containerRect.left);
  
  
  container.style.transform = `translateX(${offset}px)`;
  container.style.transition = "transform 0.6 ease" 


}

next.addEventListener('click', () => {
  index++;
  if(index >= slides.length) index = 0;
  showslides(index);
  
});

prev.addEventListener('click', () => {
  index--;
  if(index < 0) index = slides.length - 1;
  showslides(index);
})


