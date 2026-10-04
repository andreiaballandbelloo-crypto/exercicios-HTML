// Criando as variáveis

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botaoSomar = document.getElementById("botaoSomar");
const resultado = document.getElementById("resultado");

botaoSomar.addEventListener("click", () => {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const soma = n1 + n2;

    resultado.textContent = "Resultado da soma: " + soma;

});