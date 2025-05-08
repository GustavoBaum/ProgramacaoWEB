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

function criaParagrafo() {
    var vNovoParagrafo = document.createElement('p');
    vNovoParagrafo.innerHTML = 'Novo parágrafo';
    var vElementoPai = document.getElementById('novoP');
    vElementoPai.appendChild(vNovoParagrafo);
    document.body.appendChild(vNovoParagrafo);
}

function criarTarefa() {
    var vElementInput = document.getElementById('itemTarefa');
    var vElementLista = document.getElementById('listaTarefas');
    var vItemLista = document.createElement('li');
    vItemLista.innerHTML = vElementInput.value;
    vElementLista.appendChild(vItemLista);

    vElementInput.value = '';
    vElementInput.focus();
}

function criarInicio() {
    var vElementInput = document.getElementById('itemTarefa');
    var vElementLista = document.getElementById('listaTarefas');
    var vItemLista = document.createElement('li');
    vItemLista.innerHTML = vElementInput.value;
    vElementLista.appendChild(vItemLista);

    vElementLista.insertBefore(vItemLista, vElementLista.firstChild);
    vElementInput.value = '';
    vElementInput.focus();
}

function RemoveItem() {
    var vElementPai = document.getElementById('listaTarefas');
    vElementPai.removeChild(vElementPai.lastChild);
}

function RemoveTerceiroItem() {
    var vElementPai = document.getElementById('listaTarefas');
    vElementPai.removeChild(vElementPai.children[2]);
}

function inserirLinha() {
    var vElementTable = document.getElementById('tabela');

    /*var vElementLinha = document.createElement('tr');
    var vElementTD1 = document.createElement('td');
    var vElementTD2 = document.createElement('td');
    var vElementTD3 = document.createElement('td');
    vElementTD1.innerHTML = 'Cell 1';
    vElementTD2.innerHTML = 'Cell 2';
    vElementTD3.innerHTML = 'Cell 3';
    vElementLinha.appendChild(vElementTD1);
    vElementLinha.appendChild(vElementTD2);
    vElementLinha.appendChild(vElementTD3);
    vElementTable.appendChild(vElementLinha);*/

    var vElementLinha = vElementTable.insertRow();
    var vElementTD1 = vElementLinha.insertCell();
    var vElementTD2 = vElementLinha.insertCell();
    var vElementTD3 = vElementLinha.insertCell();
    vElementTD1.innerHTML = 'Cell 1';
    vElementTD2.innerHTML = 'Cell 2';
    vElementTD3.innerHTML = 'Cell 3';
}

function removerLinha() {
    var vElementTable = document.getElementById('tabela');
    vElementTable.deleteRow(-1);
}