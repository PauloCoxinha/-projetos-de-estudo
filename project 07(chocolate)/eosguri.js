
const bloco1 = document.querySelector('.classic');


bloco1.addEventListener('mouseover', () => {
    console.log('ta rodando')   

    const elementos = {
        whitetext: document.querySelector('.whitetext'),
        white: document.querySelector(' .white'),
        blacktext: document.querySelector('.blacktext'),
        black: document.querySelector('.black'),
        classichover: document.querySelector('.classichover'),
        titulohoverclassic: document.querySelector('.titulohoverclassic'),
        buynowclassic: document.querySelector('.buynowclassic'),
        paragrafoclassic: document.querySelector('.paragrafohoverclassic'),
        gradient: document.querySelector('.classic'),

    };

    elementos.whitetext.style.display = 'none';     
    elementos.white.style.display = 'none'; 
    elementos.blacktext.style.display = 'none'; 
    elementos.black.style.display = 'none'; 
    elementos.classichover.style.display = 'block';
    elementos.titulohoverclassic.style.display = 'block';
    elementos.buynowclassic.style.display = 'block';
    elementos.paragrafoclassic.style.display = 'block';
    elementos.gradient.style.background = 'linear-gradient(to bottom, #C0BFB3 50%, #24201C 50%)';
    
    

    
});

bloco1.addEventListener('mouseout', () => {

    
    const elementos = {
        whitetext: document.querySelector('.whitetext'),
        white: document.querySelector(' .white'),
        blacktext: document.querySelector('.blacktext'),
        black: document.querySelector('.black'),
        classichover: document.querySelector('.classichover'),
        titulohoverclassic: document.querySelector('.titulohoverclassic'),
        paragrafoclassic: document.querySelector('.paragrafohoverclassic'),
        buynowclassic: document.querySelector('.buynowclassic'),
        gradient: document.querySelector('.classic'),
    };

    elementos.whitetext.style.display = 'block'; 
    elementos.white.style.display = 'block'; 
    elementos.blacktext.style.display = 'block'; 
    elementos.black.style.display = 'block'; 
    elementos.classichover.style.display = 'none';
    elementos.titulohoverclassic.style.display = 'none';
    elementos.buynowclassic.style.display = 'none';   
    elementos.paragrafoclassic.style.display = 'none';
    elementos.paragrafoclassic.style.display = 'block';
    elementos.gradient.style.background = 'linear-gradient(to right, #C0BFB3 50%, #24201C 50%)';

    
});




const bloco2 = document.querySelector('.dark');


bloco2.addEventListener('mouseover', () => {
    console.log('ta rodando')

    const elementos = {
        sombra: document.querySelector('.sombra'),
        barras: document.querySelector(' .barras'),
        titulodark: document.querySelector('.titulohoverdark'),
        paragrafodark: document.querySelector('.paragrafohoverdark'),
        buynowdark: document.querySelector('.buynowdark'),
        darkhover: document.querySelector('.darkhover')
        
    };

    elementos.barras.style.display = 'none'; 
    elementos.sombra.style.display = 'none'; 
    elementos.titulodark.style.display = 'block';
    elementos.buynowdark.style.display = 'block';
    elementos.paragrafodark.style.display = 'block';
    elementos.darkhover.style.display = 'block'
    
    

    
});

bloco2.addEventListener('mouseout', () => {


    const elementos = {
        sombra: document.querySelector('.sombra'),
        barras: document.querySelector(' .barras'),
        darkhover: document.querySelector('.darkhover'),
        titulodark: document.querySelector('.titulohoverdark'),
        paragrafodark: document.querySelector('.paragrafohoverdark'),
        buynowdark: document.querySelector('.buynowdark')
        
    };
    elementos.darkhover.style.display = 'flex';
    elementos.barras.style.display = 'block'; 
    elementos.sombra.style.display = 'block'; 
    elementos.titulodark.style.display = 'none';
    elementos.buynowdark.style.display = 'none';
    elementos.paragrafodark.style.display = 'none';
    
    

    
});


const bloco3 = document.querySelector('.special');


bloco3.addEventListener('mouseover', () => {
    console.log('ta rodando')


    const elementoshover = {
        tituloflavor: document.querySelector('.titulohover'),
        paragrafoflavor: document.querySelector('.paragrafohover'),
        botaoflavor: document.querySelector('.buynowflavor')
    }
    const elementos = {
        barracereja: document.querySelector('.barracereja'),
        cereja: document.querySelector(' .Cereja'),
        barracaramel: document.querySelector('.barracaramelo'),
        caramel: document.querySelector('.caramelo'),
        titulo: document.querySelector('.titulo'),
        titulo2: document.querySelector('.titulo2')

        
    };

    elementos.barracereja.style.display = 'none'; 
    elementos.cereja.style.display = 'none'; 
    elementos.barracaramel.style.display = 'none'; 
    elementos.caramel.style.display = 'none'; 
    elementos.titulo.style.display = 'none';
    elementos.titulo2.style.display = 'none';
    elementoshover.botaoflavor.style.display = 'block';
    elementoshover.paragrafoflavor.style.display = 'inline-flex';
    elementoshover.tituloflavor.style.display = 'inline-flex';

    
});

bloco3.addEventListener('mouseout', () => {


    const elementoshover = {
        tituloflavor: document.querySelector('.titulohover'),
        paragrafoflavor: document.querySelector('.paragrafohover'),
        botaoflavor: document.querySelector('.buynowflavor')
    }

    const elementos = {
        barracereja: document.querySelector('.barracereja'),
        cereja: document.querySelector(' .Cereja'),
        barracaramel: document.querySelector('.barracaramelo'),
        caramel: document.querySelector('.caramelo'),
        titulo: document.querySelector('.titulo'),
        titulo2: document.querySelector('.titulo2')

        
    };

    elementos.barracereja.style.display = 'block'; 
    elementos.cereja.style.display = 'block'; 
    elementos.barracaramel.style.display = 'block'; 
    elementos.caramel.style.display = 'block'; 
    elementos.titulo.style.display = 'block';
    elementos.titulo2.style.display = 'block';
    elementoshover.botaoflavor.style.display = 'none';
    elementoshover.paragrafoflavor.style.display = 'none';
    elementoshover.tituloflavor.style.display = 'none';
    
    

    
});


const mouseentra = document.querySelector('.linkheader').addEventListener('mouseover', () => {
    mouseentra.style.cursor = 'pointer';
})

// bloco1.addEventListener('click', () => { ... })


    const animatedElement = document.querySelector('.secondimage');
    const animatedElement2 = document.querySelector('.h1semovendo');
    const animatedElement3 = document.querySelector('.secondimage2');
    const animatedElement4 = document.querySelector('.textpage2');

// Cria o observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quando aparecer, adiciona a classe que ativa a animação
     if(entry.target.classList.contains('secondimage')){
      entry.target.classList.add('animate__animated', 'animate__fadeInRight', 'visable');
    }

    if (entry.target.classList.contains('secondimage2')){
        entry.target.classList.add('animate__animated', 'animate__fadeInLeft', 'visable');
    }

    if (entry.target.classList.contains('textpage2')){
        entry.target.classList.add('animate__animated', 'animate__zoomInUp', 'visable');
    }

    if(entry.target.classList.contains('h1semovendo')){
      entry.target.classList.add('animate__animated', 'animate__zoomInDown', 'visable');
    }
    }   
  });
}, {
  threshold: 0.1 // ativa quando 10% do elemento estiver visível
});

// Observa o elemento
observer.observe(animatedElement);
observer.observe(animatedElement2);
observer.observe(animatedElement3);
observer.observe(animatedElement4);


const slides = document.querySelectorAll('.product-item');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');

let index = 0;

function showslide(i){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');           
}

nextbtn.addEventListener('click', () => {
    index++;
    if(index >= slides.length) index = 0;
    showslide(index);
})


prevbtn.addEventListener('click', () => {
    index--;
    if(index < 0) index = slides.length - 1;
    showslide(index);
});




   
    
    


    




  

