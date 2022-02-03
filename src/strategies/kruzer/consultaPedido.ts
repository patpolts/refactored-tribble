import { Request, Response } from "express";
import { environment } from "@enviroments/dev";
import { pool }  from "@config/mariaDB"
import {Sequelize} from "sequelize";


export class ConsultaPedidoController{
    async handle(req: Request, res: Response){
            let response = null;
            let status = 201;
            try {
                switch (req.method) {
                    case 'GET':
                        response = await this.get(req, res);
                        break;
                    default:
                        response = "não autorizado"; 
                        status = 401
                        break;
                } 
                console.log("1");
                
            } catch (error) {
                response = {
                    status: "error",
                    data: {},
                    errors: error,
                    message: error.message || "Erro inesperado!"
                };
                console.log(response);
                  
                return res.status(401).json(response).end(); 
            } finally{
                console.log(response); 
                return res.status(status).json(response).end(); 
            } 
          }        
        

        async get (req, res){
            const { document } = req.params;

            const sequelize = new Sequelize('positiva_db', 'intmongo', 'xubJp5Nekd56BvSa', {
                host: '95.111.234.97',
                dialect: 'mysql'
              });


            var t = await sequelize.query(` SELECT 
                                                codigoPedido, dataPedido, statusDescription
                                            FROM
                                                positiva_db.kruzerOrders
                                            WHERE
                                                cliente_cpf_cnpj LIKE ${document}
                                            ORDER BY dataPedido DESC;`)
                                                console.log(t);
                                                return t;
            
            /* pool.getConnection( async ( error, conn ) => {
                 conn.query(
                    `SELECT 
                        codigoPedido, dataPedido, statusDescription
                     FROM
                         positiva_db.kruzerOrders
                     WHERE
                        cliente_cpf_cnpj LIKE ${document}
                     ORDER BY dataPedido DESC;`,
    
                    (error, resultado, fiel) => {
                        conn.release();
                    

                     return resultado
                    }
                )
                if (error){
                    console.log(error);
                    return error
                }
            })  */
        }
    }