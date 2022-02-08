/**
 * Interface que define os metodos que devem existir no repositorio (implementations/mongo,mysql,api)
 */
import { KruzerOrderDocument } from "@entities/KruzerOrderDocument";
import { KruzerOrderIdPedido } from "@entities/KruzerOrderIdPedido";

export interface IKruzerOrdersRepository{
    getByDocument(document: string): Promise<KruzerOrderDocument>;
    getPedidoPorItem(query: object): Promise<KruzerOrderIdPedido>;
}

