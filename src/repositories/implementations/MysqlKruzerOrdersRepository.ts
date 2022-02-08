import { loadPartialConfig } from "@babel/core";
import { sequelize } from "@config/mysqlDB"; 
import { KruzerOrderDocument } from "@entities/KruzerOrderDocument";
import { KruzerOrderIdPedido } from "@entities/KruzerOrderIdPedido";
import { IKruzerOrdersRepository } from "@repositories/IkruzerOrdersRepository";
import { extensions } from "sequelize/dist/lib/utils/validator-extras";


export class MysqlKruzerPedidos implements IKruzerOrdersRepository{
    private pedidosPorDoc: KruzerOrderDocument;
    private pedidosPorId: KruzerOrderIdPedido;

    /**
     * Consulta pedidos na kruzer pelo cpf
     * @param document 
     * @returns Object
     */
    async getByDocument(document: string): Promise<KruzerOrderDocument>{ 
        //TODO: 
        // * adicionar filtros ?   
        const results = await sequelize.query(`SELECT idPedido, dataPedido, statusDescription FROM positiva_db.kruzerOrders  WHERE cliente_cpf_cnpj LIKE ${document} ORDER BY dataPedido DESC;`).catch((e) => { return new Error(e) }); 
         
         
        this.pedidosPorDoc = new KruzerOrderDocument({ 
            document: document,
            results: results
        });
        return  this.pedidosPorDoc; 
        
    }
    async getPedidoPorItem(query: object): Promise<KruzerOrderIdPedido>{ 
        //TODO: 
        // * adicionar filtros ?
        const document = query.documento;
        const idPedido = query.idPedido;  

        const results = await sequelize.query(`SELECT 
                                                    *
                                                 FROM
                                                    positiva_db.kruzerPedidosPorItem
                                                WHERE
                                                    cliente_cpf_cnpj LIKE ${document}
                                                AND
                                                    idpedido LIKE "${idPedido}";`).catch((e) => { return new Error(e) }); 
        
        this.pedidosPorId = new KruzerOrderIdPedido({ 
            results: results[0]
        });
        
        return  this.pedidosPorId; 
        
    }
}
