var botao = document.querySelector('button');
var p = document.querySelector('#texto');
var h1 = document.querySelector('h1');
var valor = document.querySelector('#valor');
var botaoSortear = document.querySelector('.botaoSortear');
var botaoReiniciar = document.querySelector('.botaoReiniciar');

var sorteReves = parseInt(Math.random() * 30);
botaoReiniciar.style.display = "none";

function alterarTexto(){
    botaoSortear.style.display = "none";
    botaoReiniciar.style.display = "";

    if(sorteReves == 1){
        h1.textContent = "Sorte!"
        p.textContent = "Não faça perguntas, avance até a casa de início e...";
        valor.textContent = "Receba R$100.000";
    } else if(sorteReves == 2){
        h1.textContent = "Revés!"
        p.textContent = "A recente estátua de Venceslau Spancerski foi depredada e precisa de revitalização, como você gosta de ajudar...";
        valor.textContent = "Pague R$25.000";
    } else if(sorteReves == 3){
        h1.textContent = "Sorte!"
        p.textContent = "Você ganhou um aumento na mesada e investiu parte do valor em ações do Free Fire que renderam.";
        valor.textContent = "Receba R$75.000";
    } else if(sorteReves == 4){
        h1.textContent = "Revés!"
        p.textContent = "Você pegou dinheiro dos amigos emprestado e chegou a hora de devolver .";
        valor.textContent = "Pague R$25.000 pra cada jogador";
    } else if(sorteReves == 5){
        h1.textContent = "Sorte!"
        p.textContent = "Você ganhou na Mega Sena!";
        valor.textContent = "Receba R$200.000";
    } else if(sorteReves == 6){
        h1.textContent = "Revés!"
        p.textContent = "Seus investimentos na bolsa de valores foram por água abaixo e agora você deve ao Estado, pague ou fique uma rodada  sem jogar.";
        valor.textContent = "Pague R$100.000";
    } else if(sorteReves == 7){
        h1.textContent = "Sorte!"
        p.textContent = "Você deu duro essa semana e hoje é dia de role bancado pelos amigos.";
        valor.textContent = "Receba R$25.000 de cada jogador";
    } else if(sorteReves == 8){
        h1.textContent = "Revés!"
        p.textContent = "As esculturas do paredão precisam de um novo patrocinador para manutenção, patrocine e tenha o direito de rolar o dado novamente.";
        valor.textContent = "Pague R$75.000";
    } else if(sorteReves == 9){
        p.textContent = "Tente sua sorte... Jogue o dado, se cair um número de 1 a 3 você ganha.";
        valor.textContent = "Receba R$25.000 se vencer, no contrário, Pague R$25.000";
    } else if(sorteReves == 10){
        h1.textContent = "Revés!"
        p.textContent = "Você fez uma festa de aniversáro na Casa Rosa e a conta ficou cara...";
        valor.textContent = "Pague R$25.000";
    } else if(sorteReves == 11){
        h1.textContent = "Sorte!"
        p.textContent = "Recebeu o prêmio de 'Melhor Aluno'. Parabéns!";
        valor.textContent = "Receba R$20.000";
    } else if(sorteReves == 12){
        h1.textContent = "Revés!"
        p.textContent = "Cantina da escola esta ficando cada vez mais cara e o seu toddynho também. Pague seu custo do ano.";
        valor.textContent = "Pague R$25.000";
    } else if(sorteReves == 13){
        h1.textContent = "Sorte!"
        p.textContent = "Este cartão é para se livrar da cadeia quando necessário. (Você só pode utilizar uma vez, caso cair outra vez, sorteie novamente)";
        valor.textContent = "Habeas Corpus";
    } else if(sorteReves == 14){
        h1.textContent = "Revés!"
        p.textContent = "Entre no camburão e vá para a cadeia.";
        valor.textContent = "(e sem reclamar!)";
    } else if(sorteReves == 15){
        h1.textContent = "Sorte!"
        p.textContent = "Recebeu uma herança inesperada.";
        valor.textContent = "Receba R$75.000";
    } else if(sorteReves == 16){
        h1.textContent = "Revés!"
        p.textContent = "Um navio trazendo todos os seus vídeo-games entre outras mercadorias afundou e não tinha seguro.";
        valor.textContent = "Pague R$100.000";
    } else if(sorteReves == 17){
        h1.textContent = "Sorte!"
        p.textContent = "Seu aniversário chegou.";
        valor.textContent = "Receba R$25.000 de cada jogador";
    } else if(sorteReves == 18){
        h1.textContent = "Revés!"
        p.textContent = "Seu vídeo-game precisa de manutenção";
        valor.textContent = "Pague R$15.000";
    } else if(sorteReves == 19){
        h1.textContent = "Sorte!"
        p.textContent = "Jogue os dados novamente e avance seu peão.";
        valor.textContent = "";
    } else if(sorteReves == 20){
        h1.textContent = "Revés!"
        p.textContent = "Tirou uma férias no campo com toda a família!";
        valor.textContent = "Pague R$15.000";
    } else if(sorteReves == 21){
        h1.textContent = "Sorte!"
        p.textContent = "Parabéns! Tirou 10 em matemática e a Profa. Érica decidiu dar uma recompensa:";
        valor.textContent = "Receba R$20.000";
    } else if(sorteReves == 22){
        h1.textContent = "Revés!"
        p.textContent = "Haha que azarado(a)!";
        valor.textContent = "Volte 3 casas.";
    } else if(sorteReves == 23){
        h1.textContent = "Sorte!"
        p.textContent = "Você tem uma chance. Quanto é 2+2x5?";
        valor.textContent = "Receba R$50.000 se acertar.";
    } else if(sorteReves == 24){
        h1.textContent = "Revés!"
        p.textContent = "ihh, que azar, vai ter que imitar uma galinha se não quer perder dinheiro...";
        valor.textContent = "Pague R$100.000 se não imitar.";
    } else if(sorteReves == 25){
        h1.textContent = "Sorte!"
        p.textContent = "Ih, que sorte, escolha um jogador para te pagar.";
        valor.textContent = "Receba R$20.000 do jogador escolhido";
    } else if(sorteReves == 26){
        h1.textContent = "Revés!"
        p.textContent = "Estamos abrindo um zoológico e queremos saber qual é o som que a vaca faz. Faça você, ou escolha um amigo para nos ensinar.";
        valor.textContent = "O jogador que imitar uma vaca, recebe R$50.000";
    } else if(sorteReves == 27){
        h1.textContent = "Sorte!"
        p.textContent = "Ganhou um trocado da mãe pra sair com os amigos.";
        valor.textContent = "Receba R$20.000";
    } else if(sorteReves == 28){
        h1.textContent = "Revés!"
        p.textContent = "Avance 2 casas. Caso caia em uma casa já comprada, você não precisa pagar dessa vez.";
        valor.textContent = "Sortudo(a).";
    } else if(sorteReves == 29){
        h1.textContent = "Sorte!"
        p.textContent = "Escolha um jogador para ir direto para cadeia.";
        valor.textContent = "Você tem a força!";
    } else if(sorteReves == 30){
        h1.textContent = "Revés!"
        p.textContent = "Sua mãe descobriu que você pegou dinheiro dela para comprar coisa escondida e, infelizmente, fez você devolver.";
        valor.textContent = "Pague R$40.000";
    } 
}
