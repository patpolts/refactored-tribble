import { KruzerOrderDocument } from "@entities/KruzerOrderDocument";
import { Promise } from "bluebird";
import { Request, Response } from "express";
import { KruzerGetOrderDocumentStrategy } from "./KruzerGetOrderDocumentStrategy";

export class KruzerGetOrderDocumentStrategyController {
    constructor(
        private ordersDocumentStrategy: KruzerGetOrderDocumentStrategy
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
        const { documento } = req.params; 
        const {codigoPedido, dataPedido, statusDescription } = req.body;
        if(!documento) return new Error("parametro documento obrigatorio");
        return await this.ordersDocumentStrategy.execute({
            codigoPedido: codigoPedido || null,
            dataPedido: dataPedido || null,
            statusDescription: statusDescription || null,
            document: documento
        });
    }
}