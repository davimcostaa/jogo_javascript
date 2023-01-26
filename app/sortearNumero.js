const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const numeroMenor = document.getElementById('menor-valor')
numeroMenor.innerHTML = menorValor

const numeroMaior = document.getElementById('maior-valor')
numeroMaior.innerHTML = maiorValor

