const form = document.getElementById('formulario').addEventListener('submit', function(evento) {
    evento.preventDefault();
    const campoA = Number(document.getElementById('campo-a').value);
    const campoB = Number(document.getElementById('campo-b').value);

    if (campoB > campoA) {
        aparecerMensagem(true, campoA, campoB);
    } else {
        aparecerMensagem(false, campoA, campoB);
    }
});

function aparecerMensagem(validador, valorA, valorB) {
    const message = document.getElementById('message');
    
    if (validador) {
        message.innerHTML = `O valor <strong>${valorB}</strong> é maior que o valor <strong>${valorA}</strong>.`
        message.className = 'mensagem-valida'
    } else {
        message.innerHTML = `O valor <strong>${valorB}</strong> é menor que o valor <strong>${valorA}</strong>.`
        message.className = 'mensagem-invalida'
    }
    message.style.margin = '12px 0px 0px 0px';
}