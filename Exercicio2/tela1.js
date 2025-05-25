function calcularSoma() {
    var vNum1 = Number(document.getElementById("num1").value);
    var vNum2 = Number(document.getElementById("num2").value);
    const resultado = vNum1 + vNum2;
    document.getElementById("soma").value = resultado;
}

function compararNumeros() {
    var vNum1 = Number(document.getElementById("num1").value);
    var vNum2 = Number(document.getElementById("num2").value);
    const resultadoDiv = document.getElementById("resultadoComparacao");

    if (vNum1 > vNum2) {
        resultadoDiv.innerText = "Primeiro número é maior";
        resultadoDiv.style.backgroundColor = "red";
    } else if (vNum2 > vNum1) {
        resultadoDiv.innerText = "Segundo número é maior que o primeiro"
        resultadoDiv.style.backgroundColor = "green";
    } else {
        resultadoDiv.innerText = "Ambos os números são iguais"
        resultadoDiv.style.backgroundColor = "yellow";
    }
}