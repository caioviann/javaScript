alert("Esse é o jogo do número secreto");
let numMaximo = 5000;
let numSecreto = parseInt(Math.random() * numMaximo + 1);
console.log(numSecreto);
let numDigitado;
let tentativas = 1;

    while(numDigitado != numSecreto){
        numDigitado = prompt("Escolha um número entre 1 e " + numMaximo);

        if(numDigitado == numSecreto){
            break;
        } else {
            tentativas++;
            if(numDigitado > numSecreto){
                alert("Número secreto é menor que o " + numDigitado);
            } else {
                alert("Número secreto é maior que o " + numDigitado);
        }
    }
}
let palavraTentativa = tentativas > 1 ? " tentativas" : " tentativa";
alert("Você acertou o número secreto " + numSecreto + " com " + tentativas + palavraTentativa);
