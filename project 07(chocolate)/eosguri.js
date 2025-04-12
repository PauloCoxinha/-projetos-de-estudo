
const bloco1 = document.querySelector('.classic');


bloco1.addEventListener('mouseover', () => {
    console.log('ta rodando')

    const elementos = {
        whitetext: document.querySelector('.whitetext'),
        white: document.querySelector(' .white'),
        blacktext: document.querySelector('.blacktext'),
        black: document.querySelector('.black')
    };

    elementos.whitetext.style.display = 'none'; 
    elementos.white.style.display = 'none'; 
    elementos.blacktext.style.display = 'none'; 
    elementos.black.style.display = 'none'; 
    

    
});

bloco1.addEventListener('mouseout', () => {


    const elementos = {
        whitetext: document.querySelector('.whitetext'),
        white: document.querySelector(' .white'),
        blacktext: document.querySelector('.blacktext'),
        black: document.querySelector('.black')
    };

    elementos.whitetext.style.display = 'block'; 
    elementos.white.style.display = 'block'; 
    elementos.blacktext.style.display = 'block'; 
    elementos.black.style.display = 'block'; 
    

    
});




const bloco2 = document.querySelector('.dark');


bloco2.addEventListener('mouseover', () => {
    console.log('ta rodando')

    const elementos = {
        sombra: document.querySelector('.sombra'),
        barras: document.querySelector(' .barras'),
        
    };

    elementos.barras.style.display = 'none'; 
    elementos.sombra.style.display = 'none'; 
    
    

    
});

bloco2.addEventListener('mouseout', () => {


    const elementos = {
        sombra: document.querySelector('.sombra'),
        barras: document.querySelector(' .barras'),
        
    };

    elementos.barras.style.display = 'block'; 
    elementos.sombra.style.display = 'block'; 
    
    

    
});


const bloco3 = document.querySelector('.special');


bloco3.addEventListener('mouseover', () => {
    console.log('ta rodando')

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
    

    
});

bloco3.addEventListener('mouseout', () => {


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
    
    

    
});





  

