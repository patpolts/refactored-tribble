import { KruzerOrderStatus } from "@entities/KruzerOrderStatus";

export interface IKruzerOrderRepository { 
    getByDocument(document: string): Promise<Object>;
}