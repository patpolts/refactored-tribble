import {IKruzerOrderRepository} from '@repositories/IKruzerOrderRepository';
import { Request, Response } from "express";
import { GetPedidosCase } from "./GetPedidosCase";
import { sequelize } from "@config/mysqlDB";

export class GetPedidosController{  
    constructor(){ }

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
        return await this.getByDocument(cpf); 
    }
    async getByDocument(document: string){ 
        //TODO:
        // * validar parametro documento
        // * adicionar orderBy dinamico
        return new Promise(async (resolve,reject) => {
            const result = await sequelize.query(`SELECT codigoPedido, dataPedido, statusDescription FROM positiva_db.kruzerOrders  WHERE cliente_cpf_cnpj LIKE ${document} ORDER BY dataPedido DESC;`)
            .catch((e) => reject(new Error(e)));
            resolve(result);
        });
        
    }
}