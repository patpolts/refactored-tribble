import { Promise } from "bluebird";
import { Request, Response } from "express";

export class RequestUseCaseController {
    constructor( 
    ) {}

    async handle(req: Request, res: Response): Promise<void> {
        let response = null;
        let status = 201;
        try {
            switch (req.method) {
                case 'GET':
                    response = "GET request: home api"
                    break;
                case 'POST':
                    response = "POST request: inválido"
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
}