// Variáveis
const tempCelsius = document.getElementById("tempCelsius");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

    const celsius = Number(tempCelsius.value);

    const fahrenheit = (9 * celsius + 160) / 5;

    resultado.textContent = "Temperatura em Fahrenheit: " + fahrenheit;

});