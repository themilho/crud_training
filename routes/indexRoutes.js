const routerAtendimento = require("./atendimentoRoutes")

module.exports = (app) => {
    app.use(routerAtendimento);
}