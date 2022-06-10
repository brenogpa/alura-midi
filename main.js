function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let count = 0; count < listaDeTeclas.length; count++) {

    const tecla = listaDeTeclas[count]
    const notas = tecla.classList[1];
    const idAudio = `#som_${notas}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
