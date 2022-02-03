require('dotenv').config({
    allowEmptyValues: true
});

export const environment = {
    port: process.env.PORT || '3333',
    appSecret: process.env.APP_SECRET,
    mongoURL: process.env.MONGO_URL
};
