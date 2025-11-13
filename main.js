const opcoesDaMaquina = [
    'fa-regular fa-hand-back-fist pedra',
    'fa-regular fa-hand papel',
    'fa-regular fa-hand-scissors tesoura',
    'fa-regular fa-hand-lizard lagarto',
    'fa-regular fa-hand-spock spock'
];

function definirEsolhaDaMaquina() {
    document.querySelector('#escolhaDaMaquina section').innerHTML =
        `<i class="${opcoesDaMaquina[Math.floor((Math.random() * 5))]}"></i>`;
}

let opcaoEscolhidaDoUsuario = '';
let opcaoEscolhidaDaMaquina = '';

const regrasDoJogo = {
    pedra: ['tesoura', 'lagarto'],
    papel: ['pedra', 'spock'],
    tesoura: ['papel', 'lagarto'],
    lagarto: ['spock', 'papel'],
    spock: ['tesoura', 'pedra']
};

let vitorias = 0, derrotas = 0, empates = 0, total = 0;

function atualizarPlacar() {
    document.querySelector('#vitorias').textContent = vitorias;
    document.querySelector('#derrotas').textContent = derrotas;
    document.querySelector('#empates').textContent = empates;
    document.querySelector('#total').textContent = total;
}

const exibirResultado = document.querySelector('#exibirResultado');

function resultadoDaPartida() {
    opcaoEscolhidaDaMaquina = document.querySelector('#escolhaDaMaquina section i').classList[2];

    const usuarioIcone = document.querySelector(`label input[value=${opcaoEscolhidaDoUsuario}]`).parentElement.querySelector('i');
    const maquinaIcone = document.querySelector('#escolhaDaMaquina section i');

    usuarioIcone.classList.remove(
        'animacao-pedra-esmaga-tesoura',
        'animacao-papel-encobre-pedra',
        'animacao-tesoura-corta-papel',
        'animacao-lagarto-envenena-spock',
        'animacao-spock-vaporiza-pedra'
    );
    maquinaIcone.classList.remove(
        'animacao-pedra-esmaga-tesoura',
        'animacao-papel-encobre-pedra',
        'animacao-tesoura-corta-papel',
        'animacao-lagarto-envenena-spock',
        'animacao-spock-vaporiza-pedra'
    );

    let resultadoTexto = '';

    if (opcaoEscolhidaDoUsuario === opcaoEscolhidaDaMaquina) {
        resultadoTexto = `<h3 class="empate">Empate</h3>`;
        empates++;
    } else if (regrasDoJogo[opcaoEscolhidaDoUsuario].includes(opcaoEscolhidaDaMaquina)) {
        resultadoTexto = `<h3 class="vitoria">Você venceu</h3>`;
        vitorias++;

        if (opcaoEscolhidaDoUsuario === 'pedra' && ['tesoura', 'lagarto'].includes(opcaoEscolhidaDaMaquina)) {
            usuarioIcone.classList.add('animacao-pedra-esmaga-tesoura');
        } else if (opcaoEscolhidaDoUsuario === 'papel' && ['pedra', 'spock'].includes(opcaoEscolhidaDaMaquina)) {
            usuarioIcone.classList.add('animacao-papel-encobre-pedra');
        } else if (opcaoEscolhidaDoUsuario === 'tesoura' && ['papel', 'lagarto'].includes(opcaoEscolhidaDaMaquina)) {
            usuarioIcone.classList.add('animacao-tesoura-corta-papel');
        } else if (opcaoEscolhidaDoUsuario === 'lagarto' && ['spock', 'papel'].includes(opcaoEscolhidaDaMaquina)) {
            usuarioIcone.classList.add('animacao-lagarto-envenena-spock');
        } else if (opcaoEscolhidaDoUsuario === 'spock' && ['tesoura', 'pedra'].includes(opcaoEscolhidaDaMaquina)) {
            usuarioIcone.classList.add('animacao-spock-vaporiza-pedra');
        }

    } else {
        resultadoTexto = `<h3 class="derrota">Você perdeu</h3>`;
        derrotas++;

        if (opcaoEscolhidaDaMaquina === 'pedra' && ['tesoura', 'lagarto'].includes(opcaoEscolhidaDoUsuario)) {
            maquinaIcone.classList.add('animacao-pedra-esmaga-tesoura');
        } else if (opcaoEscolhidaDaMaquina === 'papel' && ['pedra', 'spock'].includes(opcaoEscolhidaDoUsuario)) {
            maquinaIcone.classList.add('animacao-papel-encobre-pedra');
        } else if (opcaoEscolhidaDaMaquina === 'tesoura' && ['papel', 'lagarto'].includes(opcaoEscolhidaDoUsuario)) {
            maquinaIcone.classList.add('animacao-tesoura-corta-papel');
        } else if (opcaoEscolhidaDaMaquina === 'lagarto' && ['spock', 'papel'].includes(opcaoEscolhidaDoUsuario)) {
            maquinaIcone.classList.add('animacao-lagarto-envenena-spock');
        } else if (opcaoEscolhidaDaMaquina === 'spock' && ['tesoura', 'pedra'].includes(opcaoEscolhidaDoUsuario)) {
            maquinaIcone.classList.add('animacao-spock-vaporiza-pedra');
        }
    }

    total++;
    atualizarPlacar();
    exibirResultado.innerHTML = resultadoTexto;
}

function partida() {
    exibirResultado.innerHTML = '';
    const escolhaDoUsuario = document.querySelectorAll('input');

    const escolhido = Array.from(escolhaDoUsuario).find(el => el.checked);
    if (!escolhido) {
        alert('Selecione uma opção.');
        return;
    }

    opcaoEscolhidaDoUsuario = escolhido.value;

    const gerarEscolhaDaMaquina = setInterval(definirEsolhaDaMaquina, 70);

    function pararDefinirEscolhaDaMaquina() {
        clearInterval(gerarEscolhaDaMaquina);
    }

    setTimeout(pararDefinirEscolhaDaMaquina, 3000);
    setTimeout(resultadoDaPartida, 3300);
}

const iniciarPartida = document.querySelector('#iniciarPartida');
iniciarPartida.addEventListener('click', partida);
