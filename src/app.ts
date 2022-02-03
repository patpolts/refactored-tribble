import  express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import { environment } from './enviroments/dev';
import { router } from './routes'; 

const app = express();

if(app.get('env') == "development"){
    app.use(logger('dev'));
} else{ 
    app.use(logger('combined'));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname+'../app/', 'public')));

// mongoose.connect(environment.mongoURL, {});

app.use(router); 

export { app };
