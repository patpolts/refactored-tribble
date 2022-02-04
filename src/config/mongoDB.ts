import mongoose from 'mongoose';
import {environment} from '@enviroments/dev';

const connection =  mongoose.connect(environment.mongoURL, {  });

export { connection }