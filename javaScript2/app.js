let listaDeNumSortedos = [];
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMsgInicial() {
    exibirTextoNaTela("h1", "jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMsgInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numSecreto) {
        exibirTextoNaTela("h1", "acertou");
        let palavraTentaiva = tentativas == 1 ? "tentativa" : "tentativas";
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentaiva}`
        exibirTextoNaTela("p", msgTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numSecreto) {
            exibirTextoNaTela("p", "O número é menor")
        }else {
            exibirTextoNaTela("p", "O número é maior")
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numEscolhido = parseInt(Math.random() * 10 + 1);
    if (condition) {
        
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo(){
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}