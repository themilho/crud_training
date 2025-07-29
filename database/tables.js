class Tables {
    init(connection) {
        this.connection = connection;
        this.createTableAtendimentos();
    }

    createTableAtendimentos() {
        const sqlType = `
            DO$$
            BEGIN
                if not exists (select 1 from pg_type where typname = 'status_enum') then
                    create type status_enum as enum ('ativo', 'realizado','cancelado');
                end if;
            END$$
        `;
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