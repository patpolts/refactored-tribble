
import {Sequelize} from "sequelize";

const sequelize = new Sequelize('positiva_db', 'intmongo', 'xubJp5Nekd56BvSa', {
    host: '95.111.234.97',
    dialect: 'mysql'
});

export { sequelize };