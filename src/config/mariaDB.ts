import mysql from 'mysql';
import {environment} from '@enviroments/dev';

const pool = mysql.createPool({
    host: environment.hostDB,
    port: 3306,
    user: environment.userDB,
    password: environment.passwordDB,
    database: environment.databaseDB
});

export { pool }