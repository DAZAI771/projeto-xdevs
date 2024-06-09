
const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {

    const cartoes = document.querySelectorAll(".cartao");

const ehuntimocartao = cartaoAtual===cartoes.length -1;

    if ( ehuntimocartao) return;
    


    esconderCartoaSelecionado();

    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
})


btnVoltar.addEventListener("click", function () {

    const primeirocartao =cartaoAtual === 0
    if(primeirocartao) return;

    const cartoes = document.querySelectorAll(".cartao");

esconderCartoaSelecionado();


    
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");


});

function esconderCartoaSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

