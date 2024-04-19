function toggleLight(comodo) {

    const botao = document.querySelector(`.${comodo} button`);

    if (botao.classList.contains('apagado')) {

        controleIluminacao.ligarLuz(comodo);
        
    } else {

        controleIluminacao.desligarLuz(comodo);
    }
}

function atualizarEstadoLuzes(comodo, estado) {

    const botao = document.querySelector(`.${comodo} button`);

    if (estado) {

        botao.classList.remove('apagado');
        botao.classList.add('aceso');

    } else {

        botao.classList.remove('aceso');
        botao.classList.add('apagado');

    }
}

controleIluminacao.registraObserver({

    update: (comodo, estado) => {

        atualizarEstadoLuzes(comodo, estado);
    }
});

document.querySelectorAll('.botoes button').forEach(button => {

    button.addEventListener('click', () => {
        
        const comodo = button.parentElement.className;
        toggleLight(comodo);
    });
});
