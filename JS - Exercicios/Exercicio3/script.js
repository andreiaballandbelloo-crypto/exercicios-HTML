// Variáveis
const peso1 = document.getElementById("peso1");
const peso2 = document.getElementById("peso2");
const peso3 = document.getElementById("peso3");
const peso4 = document.getElementById("peso4");
const peso5 = document.getElementById("peso5");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

    const pesos = [
        Number(peso1.value),
        Number(peso2.value),
        Number(peso3.value),
        Number(peso4.value),
        Number(peso5.value)
    ];

    let soma = 0;

    for (let i = 0; i < pesos.length; i++) {
        soma+= pesos[i];
    }

    const media = soma / pesos.length;

    resultado.textContent = "A média é: " + media;
});