// console.log("batata") // não existe em produção, usado pra debug, aparece no console
//alert("frita") // avisar ao usuário de alguma coisa
// prompt("123") // avisar e pedir uma informação

//getElementById = pega um id e salva na variável
const footer = document.getElementById("rodape")
footer.style.backgroundColor = "blue"

// cria um elemento novo
const h2Criado = document.createElement("h2")
h2Criado.textContent = "Criando um H2 no footer"
// colocando na tela
footer.appendChild(h2Criado)


h2Criado.addEventListener("click", () => {
    alert("Funcionou :) ")
})

const forms = document.getElementById("formulario")
forms.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("nao enviou nada")
})

footer.addEventListener("mouseover", () => {
    alert("oi 123")
})

