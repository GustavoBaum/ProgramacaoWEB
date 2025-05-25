function espelharTexto() {
    var texto = document.getElementById("texto").value;
    document.getElementById("espelhoTexto").innerText = texto;
}

function mostrarTamanho() {
    var texto = document.getElementById("texto").value;
    var tamanho = texto.length;
    var mensagem = 'O tamanho atual do campo é ' + tamanho + ' caracteres';
    if (tamanho !== 1) {
        mensagem += 's';
    }
    document.getElementById("tamanhoTexto").innerText = mensagem;
}