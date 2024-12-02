import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT as 'postgres',
});
//Testando conexão do banco de dados com o servidor
sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch((err: Error) => console.error('Erro ao conectar ao banco de dados:', err));

export { sequelize };