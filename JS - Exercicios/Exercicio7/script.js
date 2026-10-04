//Variáveis
const quilometros = document.getElementById("quilometros");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

    const valorKm = Number(quilometros.value);

    const metros = valorKm * 1000;
    const centimetros = valorKm * 100000;

    resultado.textContent =  valorKm + " km = " + metros + " metros e " + centimetros + " centímetros";
});