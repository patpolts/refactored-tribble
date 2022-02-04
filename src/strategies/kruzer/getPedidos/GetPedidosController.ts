import { Request, Response } from "express";
import { GetPedidosCase } from "./GetPedidosCase";

export class GetPedidosController{
    private getPedidosCase; 
    constructor( 
    ){   
        this.getPedidosCase = GetPedidosCase;
     }

    async handle(req: Request, res: Response){
        //TODO:
        // * Verificar token requisição
        let response = null;
        let status = 201;

        try {
            switch (req.method) {
                case 'GET':
                    const result =  await this.get(req,res);
                    response = {
                        status: "ok",
                        data: result
                    }
                    break; 
                default:
                    response = "não autorizado"; 
                    status = 401
                    break;
            } 

            return res.status(status).json(response).end(); 

        } catch (error) {
            response = {
                status: "error",
                data: {},
                errors: error,
                message: error.message || "Erro inesperado!"
            };  
            return res.status(401).json(response).end();  
        }  

    }

    async get(req,res){
        //TODO: 
        // * Validar cpf
        const cpf = req.params.document;
        return await this.getPedidosCase.execute(cpf);
    }
}