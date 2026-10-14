import express from 'express'

const app = express()

app.get("/api/pessoa/:batata", (req, res) => {
    const batata = req.params.batata;
    res.send({ mensagem: `Usuário com ID: ${batata}` })

})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})


// console.log("Hello World");

