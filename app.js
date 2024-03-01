const express = require('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(req, res){
    console.log("Página principal")
    res.send("Página principal")
})

app.get("/cadastrar", function(req, res){
    console.log("Página de cadastro")
    res.send("Página de cadastro")
})

app.get("/contato", function(req, res){
    console.log("Página de contato")
    res.send("Página de contato")
})

app.get("/produtos/:item/:quantidade", (req, res) => {
    res.send(`Página de produtos - Item: ${req.params.item} | Quantidade: ${req.params.quantidade}`)
})