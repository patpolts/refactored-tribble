import { Promise } from "bluebird";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
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
        return res.status(401).json(response).end(); 
    } finally{ 
        return res.status(status).json(response).end(); 
    } 
  }
 
  //execute command post to /users
  async post(req): Promise<Object>{
    const { name, email, password } = req.body; 
      const createUser = await this.createUserUseCase.execute({
        name,
        email,
        password
      });
      const response = {
        data: createUser,
        status: "ok",
        message: "Usuário criado"
      };
      return response; 
  } 

}