 import { Request, Response } from "express";
import { CreateUserApiStrategy } from "./CreateUserApiStrategy";

import bcrypt from 'bcrypt';
export class CreateUserApiStrategyController {
  constructor(
    private createUserApiStrategy: CreateUserApiStrategy,
  ) {}
  
  //# handle all request to /users
  async handle(req: Request, res: Response):Promise<void> {
    let response = null;
    let status = 201; 
    try {
        switch (req.method) {
            case 'GET':
                response = "users api"
                break;
            case 'POST':
                
                response = await this.post(req);
                break;
            default:
                response = "não autorizado"; 
                status = 401
                break;
        } 
    } catch (error) {
        response = {
            status: "error",
            data: {},
            errors: error,
            message: error.message || "Erro inesperado!"
        };  
         res.status(401).json(response).end(); 
    } finally{ 
         res.status(status).json(response).end(); 
    } 
  }

  async post(req){
    const { name, email, password } = req.body; 
    const encryptedUserPassword = await bcrypt.hash(password, 10);
    const createUser = await this.createUserApiStrategy.execute({
        name: name,
        email: email,
        password: encryptedUserPassword,
        token: null
    });
    return {
        status: "ok",
        data: createUser
    };
  }
}