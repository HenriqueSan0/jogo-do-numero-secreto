let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function msgInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}
msgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let msgTentativas = `Você precisou de ${tentativas} ${palavraTentativas} para ganhar.`;
        exibirTextoNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero é menor ');
        } else {
            exibirTextoNaTela('p', 'O numero é maior');
        }
    }
    tentativas++;
    limparCampo();
}


function geraNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosDaLista = listaDeNumeroSorteados.length;
   if(quantidadeDeElementosDaLista == 0){
    listaDeNumeroSorteados = [];
   }
   if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return geraNumeroAleatorio();
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados)
    return numeroEscolhido;
   }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = "";
}


function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    msgInicial();

}