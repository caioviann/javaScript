
alert("Esse é o jogo do número secreto");
let numSecreto = 6;
console.log(numSecreto);
let numDigitado;
let tentivas = 1;

    while(numDigitado != numSecreto){
        numDigitado = prompt("Escolha um número entre 1 e 10");

        if(numDigitado == numSecreto){
            if(tentivas == 1){
                alert("Você Descobriu o número de primeira! O número secreto é " + numSecreto);
            }else {
                alert("Você Descobriu o númmero em " + tentivas + " tentativas " +  "O número secreto é " + numSecreto);
            }
           
        } else {
            tentivas++;
            if(numDigitado > numSecreto){
                alert("Número secreto é menor que o " + numDigitado);
            } else {
                alert("Número secreto é maior que o " + numDigitado);
        }
    }

}