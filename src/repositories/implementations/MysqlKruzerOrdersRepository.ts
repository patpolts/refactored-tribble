import { sequelize } from "@config/mysqlDB"; 
import { KruzerOrderDocument } from "@entities/KruzerOrderDocument";
import { IKruzerOrdersRepository } from "@repositories/IkruzerOrdersRepository";
import { extensions } from "sequelize/dist/lib/utils/validator-extras";


export class MysqlKruzerPedidos implements IKruzerOrdersRepository{
    private pedidosPorDoc: KruzerOrderDocument;

    /**
     * Consulta pedidos na kruzer pelo cpf
     * @param document 
     * @returns Object
     */
    async getByDocument(document: string): Promise<KruzerOrderDocument>{ 
        //TODO: 
        // * adicionar filtros ?   
        const results = await sequelize.query(`SELECT codigoPedido, dataPedido, statusDescription FROM positiva_db.kruzerOrders  WHERE cliente_cpf_cnpj LIKE ${document} ORDER BY dataPedido DESC;`).catch((e) => { return new Error(e) }); 
         
         
        this.pedidosPorDoc = new KruzerOrderDocument({ 
            document: document,
            results: results
        });
        return  this.pedidosPorDoc; 
        
    }
}