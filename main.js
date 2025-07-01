const botoes = document.querySelectorAll(".button");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j = 0; i < botoes.length; j++){
            botoes[j].classList.remove("ativo");

        }
        botoes[i].classList.add("ativo");
    }

}