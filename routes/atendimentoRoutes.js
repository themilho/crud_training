import { Router } from "express";
const router = Router();

//Métodos HTTP: GET, POST, PUT, DELETE (dentre outros); 

router.get("/atendimentos", (req, res) => {
    res.send("Estamos listando todos os atendimentos");
})

router.post("/atendimentos", (req, res) => {
    res.send("Estamos criando o seu atendimento")
})

router.put("/atendimento/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Estamos atualizando o atendimento ${id}`)
})

router.delete("/atendimento/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Estamos deletando o atendimento ${id}`)
})

module.exports = router;