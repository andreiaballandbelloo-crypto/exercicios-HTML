// Variáveis
const numero = document.getElementById("numero");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

    const valor = Number(numero.value);

    resultado.innerHTML = "";

    for (let i = 0; i <= 10; i++) {

        const valorTab = valor * i;

        resultado.innerHTML += valor + " x " + i + " = " + valorTab + "<br>";
    }
});