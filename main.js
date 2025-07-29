const botoes = document.querySelectorAll(".button");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-05t00:00:00");

contadores[0].textContent = tempoObjetivo1 - tempoAtual;

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 59;
    minutos %= 59;
    horas %= 23;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}