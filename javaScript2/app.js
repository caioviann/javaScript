let numSecreto= 7;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela("h1", "jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numSecreto) {
        exibirTextoNaTela("h1", "acertou");
        exibirTextoNaTela("p", "Você acertou o número secreto");
    } else {
        if (chute > numSecreto) {
            exibirTextoNaTela("p", "O número é menor")
        }else {
            exibirTextoNaTela("p", "O número é maior")
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}