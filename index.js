var setaDireita = document.getElementById('seta-direita');
var setaEsquerda = document.getElementById('seta-esquerda');
var leonardo = document.getElementById('leonardo');
var samantha = document.getElementById('samantha');
var bruna = document.getElementById('bruna');

function RolarParaDireita() {
    leonardo.style = "display:none";
    bruna.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex";
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex";
    bruna.style = "display:none";
    setaDireita.style = "display:flex";
    setaEsquerda.style = "display:none";
}
