const opcoesDaMaquina = ['fa-regular fa-hand-back-fist pedra', 'fa-regular fa-hand papel', 'fa-regular fa-hand-scissors tesoura']

function definirEsolhaDaMaquina(){
    document.querySelector('#escolhaDaMaquina section').innerHTML = `<i class="${opcoesDaMaquina[Math.floor((Math.random() * 3))]}"></i>`
}

let opcaoEscolhidaDoUsuario = '';

let opcaoEscolhidaDaMaquina = '';

const regrasDoJogo = {
    pedra: 'tesoura',
    papel: 'pedra',
    tesoura: 'papel'
};

const exibirResultado = document.querySelector('#exibirResultado');
function resultadoDaPartida(){
    opcaoEscolhidaDaMaquina = document.querySelector('#escolhaDaMaquina section i').classList[2];

    if(opcaoEscolhidaDoUsuario === opcaoEscolhidaDaMaquina){
        exibirResultado.innerHTML = `<h3 class="empate">Empate</h3>`;
    }else if(regrasDoJogo[opcaoEscolhidaDoUsuario] === opcaoEscolhidaDaMaquina){
        exibirResultado.innerHTML = `<h3 class="vitoria">Você venceu</h3>`;
    }else{
        exibirResultado.innerHTML = `<h3 class="derrota">Você perdeu</h3>`;
    }
}

function partida(){
    exibirResultado.innerHTML = '';
    const escolhaDoUsuario = document.querySelectorAll('input');

    if(escolhaDoUsuario[0].checked === true){
        opcaoEscolhidaDoUsuario =  escolhaDoUsuario[0].defaultValue
    }else if(escolhaDoUsuario[1].checked === true){
        opcaoEscolhidaDoUsuario =  escolhaDoUsuario[1].defaultValue;
    }else if(escolhaDoUsuario[2].checked === true){
        opcaoEscolhidaDoUsuario =  escolhaDoUsuario[2].defaultValue;
    }else{
        alert('Selecione uma opção.');
        return;
    }

    const gerarEscolhaDaMaquina = setInterval(definirEsolhaDaMaquina, 70);

    function pararDefinirEscolhaDaMaquina(){
        clearInterval(gerarEscolhaDaMaquina);
    }

    setInterval(pararDefinirEscolhaDaMaquina, 3000);
    
    setTimeout(resultadoDaPartida, 3300);
}

const iniciarPartida = document.querySelector('#iniciarPartida');

iniciarPartida.addEventListener('click', partida);