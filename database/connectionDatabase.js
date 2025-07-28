const { Client } = require("pg")

const connection = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'controle_atendimento',
    password: 'kikinho24',
    port: 5432
})

connection.connect();

connection.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro na consulta', err);
  } else {
    console.log('Conectado:', res.rows);
  }

  connection.end();
});

module.exports = connection;