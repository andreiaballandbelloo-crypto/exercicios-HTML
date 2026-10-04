// // variavel
// const buttonEx1 = document.getElementById("exercicio1")

// //addEventListener escuta
// buttonEx1.addEventListener("click", () => {
//     const num1 = Number(prompt("Informe um número"))
//     const num2 = Number(prompt("Informe outro número"))

//     alert(num1 + num2)
// })
// //add 

const buttonEx1 = document.getElementById("exercicio1")
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")
console.log(input1, "Meu número")

buttonEx1.addEventListener("click", () => {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    console.log(input1, "Meu número")
    alert(num1 + num2)
})