function alteraH3() {
    var vElemento = document.getElementById('elemento_h3');
    vElemento.innerHTML = 'Conteúdo alterado';
}

function alterarEstilo() {
    var vElemento = document.getElementById('elemento_h3');
    vElemento.style.textAlign = 'center';
}

function ativaClasse1() {
    document.getElementById('elemento_h3').classList.add('classe1');
}

function ativaClasse2() {
    document.getElementById('elemento_h3').classList.add('classe2');
}