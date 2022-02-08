import { KruzerOrderIdPedido } from "@entities/KruzerOrderIdPedido";
import { Promise } from "bluebird";
import { Request, Response } from "express";
import { KruzerGetOrderIdPedidoStrategy } from "./KruzerGetOrderIdPedidoStrategy";

export class KruzerGetOrderIdPedidoStrategyController {
    constructor(
        private ordersIdPedidoStrategy: KruzerGetOrderIdPedidoStrategy
    ) {}

    async handle(req: Request, res: Response): Promise<void>{
        let response = null;
        let status = 201;
        try {
            switch (req.method) {
                case 'GET':
                    const data = await this.get(req);
                    response = {data: data};
                    break; 
                default:
                    response = {
                        status: "unauthorize",
                        message: "não autorizado"
                    }; 
                    status = 501
                    break;
            } 
            res.status(status).json(response).end();
        } catch (error) {
            response = {
                status: "error",
                data: {},
                errors: error,
                message: error.message || "Erro inesperado!"
            };  
            res.status(401).json(response).end(); 
        }
    } 

    async get(req){
        const { documento, idPedido } = req.params;         
        const query = { documento, idPedido };
        if(!query) return new Error("parametro query obrigatorio");
        return await this.ordersIdPedidoStrategy.execute({
            query: query
        });
    }
}