class Tables {
    init(connection) {
        this.connection = connection;
        this.createTableAtendimentos();
    }

    createTableAtendimentos() {
        const sqlType = `create type status_enum AS ENUM ('ativo', 'realizado', 'cancelado');`;
        const sqlTable = `
        create table if not exists atendimentos (
	        id serial not null primary key, 
	        data date,
	        servico varchar(100),
	        cliente varchar(100),
	        status status_enum default 'ativo');
        `;

        this.connection.query(sqlTable, (err) => {
            if (err) {
                console.log("Erro ao criar a tabela atedimentos: ", err);
            }else {
                console.log("Tabela criada com sucesso")
            }
        })
    }
}

module.exports = new Tables();