class AtendimentoController {
    search() {
        return "Buscando atendimentos";
    }

    create() {
        return "Criando atendimento";
    }

    update(id) {
        return `Alterando atendimento ${id}`
    }

    delete(id) {
        return `Deletando atendimento ${id}`
    }
}

module.exports = new AtendimentoController();