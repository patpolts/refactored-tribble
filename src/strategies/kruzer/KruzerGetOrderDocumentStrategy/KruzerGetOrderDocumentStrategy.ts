import { KruzerOrderDocument } from "@entities/KruzerOrderDocument";
import { IKruzerOrdersRepository } from "@repositories/IkruzerOrdersRepository";
import { Promise } from "bluebird";
import { KruzerGetOrderDocumentStrategyDTO } from "./KruzerGetOrderDocumentStrategyDTO";

export class KruzerGetOrderDocumentStrategy {
    constructor(
        private ordersRepository: IKruzerOrdersRepository
    ) { }

    async execute(data: KruzerGetOrderDocumentStrategyDTO){ 
        const response = await this.ordersRepository.getByDocument(data.document)
        .catch(e =>{ return new Error(e) });
        return response;

    }
}