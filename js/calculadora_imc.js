function calculadora() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let imc = n2 / (n1 * n1);
    if (imc < 16) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Magreza Grau |||`
    } else if (imc > 16 && imc < 16.9) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Magreza Grau ||`;
    } else if (imc > 17 && imc < 18.4) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Magreza Grau |`;
    } else if (imc > 18.5 && imc < 24.9) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Adequado`;
    } else if (imc > 25 && imc < 29.4) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Pré-obeso`;
    } else if (imc > 30 && imc < 34.9) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Obesidade Grau |`;
    } else if (imc > 35.4 && imc < 39.9) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Obesidade Grau ||`;
    } else if (imc >= 40) {
        document.getElementById("resultadoImc").innerHTML = `Você esta na classificação: Obesidade Grau |||`;
    }
    document.getElementById("imc").innerHTML = `Seu IMC:  ${imc}`;
    document.getElementById("mostrarAltura").innerHTML = `Altura:  ${n1}`;
    document.getElementById("mostrarPeso").innerHTML = `Peso: ${n2}`;
}








