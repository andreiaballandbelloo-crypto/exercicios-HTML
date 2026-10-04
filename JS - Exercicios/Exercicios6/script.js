// Variáveis

const segundos = document.getElementById("segundos");
const btnCalcular = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", () => {

    const valorSegundos = Number(segundos.value);

    const horas = Math.floor(valorSegundos / 3600);
    const resto = valorSegundos % 3600;
    const minutos = Math.floor(resto / 60);
    const segundosRestantes = resto % 60;

    resultado.textContent = horas + " horas, " +  minutos + " minutos e " + segundosRestantes + " segundos";
});
