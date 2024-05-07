let listaDeNumSortedos = [];
let numeroLimite = 10;
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
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
    let quantElemmentosNaLista = listaDeNumSortedos.length;
    let numEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if(quantElemmentosNaLista == numeroLimite){
        listaDeNumSortedos = [];
    }
    if (listaDeNumSortedos.includes(numEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumSortedos.push(numEscolhido);
        return numEscolhido;
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