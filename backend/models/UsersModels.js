import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const DataType = Sequelize;

const User = db.define('users', {
    name: DataType.STRING,
    email: DataType.STRING,
    gender: DataType.STRING
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await db.sync();
})();