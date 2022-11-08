import {Sequelize} from 'sequelize';

const db = new Sequelize('crud_mern', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;