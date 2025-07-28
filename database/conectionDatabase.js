const { Client } = require("pg")

const client = new Client ({
    user: 'postgres',
    host: 'localhost',
    database: 'controle_atendimento',
    password: 'kikinho24',
    port: 5432
})

client.connect();

client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro na consulta', err);
  } else {
    console.log('Resultado:', res.rows);
  }

  client.end();
});