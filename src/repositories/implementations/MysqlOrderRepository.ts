import { sequelize } from "@config/mysqlDB";
import { KruzerOrderStatus } from "@entities/KruzerOrderStatus";
import { IKruzerOrderRepository } from "@repositories/IKruzerOrderRepository";
import { Promise } from "bluebird"; 


export class MysqlOrderRepository implements IKruzerOrderRepository{
    private orders: KruzerOrderStatus[] = [];

    /**
     * Consulta pedidos na kruzer pelo cpf
     * @param document 
     * @returns Object
     */
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