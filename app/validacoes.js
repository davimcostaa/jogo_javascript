
function verificaValidadeDoChute(chute) {
    const numero = +chute

    if (chute.toUpperCase() === "GAME OVER") {
        document.body.innerHTML = `
        <h2> GAME OVER </h2>
        <h3> O número secreto era ${numeroSecreto} </h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar novamente </button> 
        `
        document.body.style.background = "#404258";
    }

    if (chuveInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
        return
    }

    if (numeroForaDoRange(numero)) {
        elementoChute.innerHTML += `
        <div> Valor inválido: Fale um número entre 
        ${menorValor} e ${maiorValor} </div>
        `
        return
    }

    if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2> Você acertou!!! </h2>
        <h3> O número secreto era ${numeroSecreto} </h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar novamente </button> 
        
    `
    const startit = () => {
        setTimeout(function () {
          confetti.start();
        }, 100);
      };
      // Stops
      const stopit = () => {
        setTimeout(function () {
          confetti.stop();
        }, 5000);
      };
      // playing start
      startit();
      // stoping it
      stopit();
        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class=”fa-solid fa-down-long”></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class=”fa-solid fa-up-long”></i></div>
        `
    }

}

function chuveInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoRange(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})


