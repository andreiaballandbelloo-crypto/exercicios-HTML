// Variáveis
const distMilhas = document.getElementById("distMilhas");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

    const milhas = Number(distMilhas.value);

    const quilometros = milhas * 1.60934;

    resultado.textContent = "Distância em quilômetros: " + quilometros;

});