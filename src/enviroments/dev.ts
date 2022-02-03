require('dotenv').config({
    allowEmptyValues: true
});

export const environment = {
    port: process.env.PORT || '3333',
    appSecret: process.env.APP_SECRET,
    mongoURL: process.env.MONGO_URL,
    hostDB: process.env.MYSQL_HOST,
    portDB: process.env.MYSQL_PORT,
    userDB: process.env.MYSQL_USER,
    passwordDB: process.env.MYSQL_PASSWORD,
    databaseDB: process.env.MYSQL_DB
};
