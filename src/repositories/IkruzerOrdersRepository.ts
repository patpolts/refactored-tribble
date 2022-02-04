/**
 * Interface que define os metodos que devem existir no repositorio (implementations/mongo,mysql,api)
 */
import { KruzerOrderDocument } from "@entities/KruzerOrderDocument";

export interface IKruzerOrdersRepository{
    getByDocument(document: string): Promise<KruzerOrderDocument>;
}