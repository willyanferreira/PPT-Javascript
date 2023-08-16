const opcoesDaMaquina = ['fa-regular fa-hand-back-fist', 'fa-regular fa-hand', 'fa-regular fa-hand-scissors']

function definirEsolhaDaMaquina(){
    document.querySelector('#escolhaDaMaquina section').innerHTML = `<i class="${opcoesDaMaquina[Math.floor((Math.random() * 3))]}"></i>`
}

let opacaoEscolhidaDoUsuario = '';

let opcaoEscolhidaDaMaquina = '';

const exibirResultado = document.querySelector('#exibirResultado');
function resultadoDaPartida(){
    opcaoEscolhidaDaMaquina = document.querySelector('#escolhaDaMaquina section i').classList[1];
    // console.log(opcaoEscolhidaDaMaquina);
    // console.log(opacaoEscolhidaDoUsuario);

    if(opacaoEscolhidaDoUsuario == 'pedra' && opcaoEscolhidaDaMaquina == 'fa-hand-back-fist'){
        exibirResultado.innerHTML = `<h3 class="empate">Empate</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'papel' && opcaoEscolhidaDaMaquina == 'fa-hand'){
        exibirResultado.innerHTML = `<h3 class="empate">Empate</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'tesoura' && opcaoEscolhidaDaMaquina == 'fa-hand-scissors'){
        exibirResultado.innerHTML = `<h3 class="empate">Empate</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'pedra' && opcaoEscolhidaDaMaquina == 'fa-hand-scissors'){
        exibirResultado.innerHTML = `<h3 class="vitoria">Você venceu</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'papel' && opcaoEscolhidaDaMaquina == 'fa-hand-back-fist'){
        exibirResultado.innerHTML = `<h3 class="vitoria">Você venceu</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'tesoura' && opcaoEscolhidaDaMaquina == 'fa-hand'){
        exibirResultado.innerHTML = `<h3 class="vitoria">Você venceu</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'pedra' && opcaoEscolhidaDaMaquina == 'fa-hand'){
        exibirResultado.innerHTML = `<h3 class="derrota">Você perdeu</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'papel' && opcaoEscolhidaDaMaquina == 'fa-hand-scissors'){
        exibirResultado.innerHTML = `<h3 class="derrota">Você perdeu</h3>`;
    }else if(opacaoEscolhidaDoUsuario == 'tesoura' && opcaoEscolhidaDaMaquina == 'fa-hand-back-fist'){
        exibirResultado.innerHTML = `<h3 class="derrota">Você perdeu</h3>`;
    }
}

function partida(){
    const escolhaDoUsuario = document.querySelectorAll('input');
    // console.log(escolhaDoUsuario);

    if(escolhaDoUsuario[0].checked === true){
        opacaoEscolhidaDoUsuario =  escolhaDoUsuario[0].defaultValue
    }else if(escolhaDoUsuario[1].checked === true){
        opacaoEscolhidaDoUsuario =  escolhaDoUsuario[1].defaultValue;
    }else if(escolhaDoUsuario[2].checked === true){
        opacaoEscolhidaDoUsuario =  escolhaDoUsuario[2].defaultValue;
    }else{
        alert('Selecione uma opção.');
        return;
    }

    const gerarEscolhaDaMaquina = setInterval(definirEsolhaDaMaquina, 70);

    function pararDefinirEscolhaDaMaquina(){
        clearInterval(gerarEscolhaDaMaquina);
    }

    setInterval(pararDefinirEscolhaDaMaquina, 3000);
    
    // alert(opacaoEscolhidaDoUsuario);

    setTimeout(resultadoDaPartida, 3300);
}

const iniciarPartida = document.querySelector('#iniciarPartida');

iniciarPartida.addEventListener('click', partida);
