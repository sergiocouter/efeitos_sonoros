const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador += 1;
    console.log(contador)
}
