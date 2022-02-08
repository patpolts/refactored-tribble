import { KruzerOrderIdPedido } from "@entities/KruzerOrderIdPedido";
import { IKruzerOrdersRepository } from "@repositories/IkruzerOrdersRepository";
import { Promise } from "bluebird";
import { KruzerGetOrderIdPedidoStrategyDTO } from "./KruzerGetOrderPedidoStrategyDTO";

export class KruzerGetOrderIdPedidoStrategy {
    constructor(
        private ordersRepository: IKruzerOrdersRepository
    ) { }

    async execute(data: KruzerGetOrderIdPedidoStrategyDTO){ 
        const response = await this.ordersRepository.getPedidoPorItem(data.query)
        .catch(e =>{ return new Error(e) });
        return response;

    }
}