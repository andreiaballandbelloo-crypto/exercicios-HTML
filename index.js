import express from 'express';
import db from './repository/index.js';
 
const app = express()
app.use(express.json())
 
//C
app.post("/api/v1/pessoa", (req, res) => {
    //id, cpf, email
    const { id, cpf, email } = req.body
 
    if (!id || !cpf || !email) {
        //avisar q é para enviar tudo
        res.send({ message: "Falta de informação" })
        return
    }
    //cadastrar
    db.push({ id, cpf, email })
    res.send({ message: "Pessoa criada com sucesso!" })
})

app.get("/api/v1/pessoas", (req, res) => {
    res.send({message: "Pessoa encontrada com sucesso", db})
 })

//R
app.get("/api/v1/pessoa/:id", (req, res) => {
    const id = req.params.id

    const pessoa = db.find(p => p.id === id)

    if(!pessoa) {
        res.status(404).send({message: "Pessoa não encontrada!"})
        return
    }
    res.send({message: "Pessoa encontrada com sucesso", pessoa})
 })
//U
app.put("/api/v1/pessoa/:id", (req, res) => { })
//D
app.delete("/api/v1/pessoa/:id", (req, res) => { })
 
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});




