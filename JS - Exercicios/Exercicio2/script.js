// Variáveis

const ganhoHora = document.getElementById("ganhoHora");
const qtdHoras = document.getElementById("qtdHoras");
const btnEnviar = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");

btnEnviar.addEventListener("click", () => {

    const valor = Number(ganhoHora.value);
    const horas = Number(qtdHoras.value);

    const salario = valor * horas;

    resultado.textContent = "Salário mensal: R$ " + salario;

});