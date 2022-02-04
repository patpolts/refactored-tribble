import { IUsersRepository } from "../IUsersRepository";
import { User } from "@entities/User";
import { Schema, Model } from 'mongoose';
import mongoose from 'mongoose'; 
import { connection } from "@config/mongoDB";
import jwt from 'jsonwebtoken';
import { environment } from "@enviroments/dev";

export const userApiSchema = new mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, required: true},
    password: {type: String, required: true},
    token: {type: String, required: false}
},{ strict: true, timestamps: true });

export const userApiModel = mongoose.model('userApi', userApiSchema);

export class MongoUsersRepository implements IUsersRepository{ 
    public users: User
    constructor(){ 
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
    async findByToken(token: string): Promise<void> {
        this.connection(); 
        const response = await userApiModel.findOne({token: token})
            .catch((e)=> {return e});
        return response;
    }
    async save(user: User): Promise<string> { 
        this.connection(); 
        const token =  jwt.sign({user: user.id}, environment.appSecret,{ expiresIn: '5days'});
        const create = new userApiModel({
            name: user.name,
            email: user.email,
            password: user.password,
            token: token
        });
        await create.save(async (err,doc) => {
            if(err) return err;  
           this.users = new User({
                name: doc.name,
                email: doc.email,
                password: doc.password,
                token: doc.token
            });
        });   

        return token;
    }
 
}