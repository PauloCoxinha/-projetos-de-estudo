let item =  document.getElementById('imagem');

let buttonyes = document.querySelector("#yes");

let imagens = ['imagens/2.gif', 'imagens/3.gif', 'imagens/4.gif', 'imagens/2.jpg', 'imagens/3.jpg', 'imagens/4.jpg'];

let indice = 0

let botao = [
    {width: "70%", height: "50px"},
    {width: "80%", height: "100px"},
    {width: "100%", height: "200px"},
    {width: "400px", height: "300px"},
    {width: "600px", height: "400px"},
    {width: "900px", height: "1000px"}
];

let indicebotao = 0

buttonyes.addEventListener("click", () => {
    item.setAttribute('src', 'imagens/accept.jpg');
    buttonyes.style.width = "100px";
    buttonyes.style.height = "60px";

    let titulo = document.querySelector("#titulo");
    titulo.textContent = "tamo namorando ><";

    


})


let buttono = document.querySelector("#no").addEventListener("click", () => {
    console.log("oi")
     
     item.setAttribute('src', imagens[indice])

     buttonyes.style.width = botao[indicebotao].width;
     buttonyes.style.height = botao[indicebotao].height;

     indice = (indice + 1) % imagens.length;
     
     indicebotao = (indicebotao + 1) % botao.length;

     

   
});