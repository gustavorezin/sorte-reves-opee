var botao = document.querySelector('button');
var p = document.querySelector('#texto');
var valor = document.querySelector('#valor');
var botaoSortear = document.querySelector('.botaoSortear');
var botaoReiniciar = document.querySelector('.botaoReiniciar');

var sorteReves = parseInt(Math.random() * 10);
botaoReiniciar.style.display = "none";

function alterarTexto(){
    botaoSortear.style.display = "none";
    botaoReiniciar.style.display = "";

    if(sorteReves == 1){
        p.textContent = "Não faça perguntas, avance até a casa de início e...";
        valor.textContent = "Receba R$100.000";
    } else if(sorteReves == 2){
        p.textContent = "A recente estátua de Venceslau Spancerski foi depredada e precisa de revitalização, como você gosta de ajudar...";
        valor.textContent = "Pague R$25.000";
    } else if(sorteReves == 3){
        p.textContent = "Você ganhou um aumento salarial e investiu parte do valor em ações que renderam.";
        valor.textContent = "Receba R$75.000";
    } else if(sorteReves == 4){
        p.textContent = "Você sonegou impostos por dois anos, fique uma rodada sem jogar e pague uma quantia em reais para compensar parte do valor devido.";
        valor.textContent = "Pague R$200.000";
    } else if(sorteReves == 5){
        p.textContent = "Você ganhou na Mega Sena!";
        valor.textContent = "Receba R$200.000";
    } else if(sorteReves == 6){
        p.textContent = "Seus investimentos na bolsa de valores foram por água abaixo e agora você deve ao Estado, pague ou fique uma rodada  sem jogar.";
        valor.textContent = "Pague R$100.000";
    } else if(sorteReves == 7){
        p.textContent = "Você deu duro essa semana e hoje é dia de role bancado pelos amigos.";
        valor.textContent = "Receba R$25.000 de cada jogador";
    } else if(sorteReves == 8){
        p.textContent = "As esculturas do paredão precisam de um novo patrocinador para manutenção, patrocine e tenha o direito de rolar o dado novamente.";
        valor.textContent = "Pague R$75.000";
    } else if(sorteReves == 9){
        p.textContent = "Tente sua sorte... Jogue o dado, se cair um número de 1 a 3 você ganha.";
        valor.textContent = "Receba R$25.000 se vencer, no contrário, Pague R$25.000";
    } else if(sorteReves == 10){
        p.textContent = "Você fez uma festa na Casa Rosa e a conta ficou cara...";
        valor.textContent = "Pague R$25.000";
    } else if(sorteReves == 11){
        p.textContent = "";
        valor.textContent = "";
    }
}
