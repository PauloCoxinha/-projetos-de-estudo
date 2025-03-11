let numeros = ["0", "1", "2", "3","4","5", "6", "7", "8", "9"];

let operadores = ["+", "-", "÷", "x"];

let botoes = [
    {id: "0", value: "0"},
    {id: "1", value: "1"},
    {id: "2", value: "2"},
    {id: "3", value: "3"},
    {id: "4", value: "4"},
    {id: "5", value: "5"},
    {id: "6", value: "6"},
    {id: "7", value: "7"},
    {id: "8", value: "8"},
    {id: "9", value: "9"},

    {id: "soma", value: "+"},
    {id: "subtracao", value: "-"},
    {id: "divisao", value: "÷"},
    {id: "multiplicacao", value: "x"},
    {id: "igual", value: "="}




]

let operacao = "";

let resultado = document.getElementById("res");

let limpar = document.getElementById("clear");


function limparconteudo(){
    resultado.innerText = ""
    operacao = ""
}

limpar.addEventListener("click", limparconteudo);


botoes.forEach(botao => {
    document.getElementById(botao.id)?.addEventListener("click", () => {
        if(botao.value === "="){
            operacao = eval(operacao.replace("÷", "/").replace("x", "*"));
        } else {
            operacao += botao.value
        }

        resultado.innerText = operacao;

       



    })
})






