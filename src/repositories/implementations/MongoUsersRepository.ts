import { IUsersRepository } from "../IUsersRepository";
import { User } from "@entities/User";
import { Schema, Model } from 'mongoose';
import mongoose from 'mongoose'; 
import { connection } from "@config/mongoDB";

export const userApiSchema = new mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, required: true},
    password: {type: String, required: true}
},{ strict: true, timestamps: true });

export const userApiModel = mongoose.model('userApi', userApiSchema);

export class MongoUsersRepository implements IUsersRepository{ 
    constructor(){ 
        this.connection();
     }
    async connection(){
       connection
       .then(x => {
            console.log(
                `conectado "${x.connections[0].name}"`,
            );
        }).catch(err => {
            console.error('Error connecting to mongo', err);
        });
    }
    async findByEmail(email: string): Promise<User> {
        return;
    }
    async save(user: User): Promise<void> { 
        console.log(await  mongoose.connection.readyState);
        
        const create = new userApiModel({
            name: user.name,
            email: user.email,
            password: user.password
        });
        create.save((err,doc) => {
            if(err){
                console.log(err);
                    
                return err;
            }
            console.log(doc);
            
            return doc;
        });
    }
}