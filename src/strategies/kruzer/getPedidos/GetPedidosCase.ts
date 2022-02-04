import { IKruzerOrderRepository } from '@repositories/IKruzerOrderRepository';
import {IGetPedidosDTO} from './GetPedidosDTO';

export class GetPedidosCase {
    constructor( 
        private orderRepository: IKruzerOrderRepository
    ){}
    
    async execute(data: IGetPedidosDTO): Promise<void>{
        const response = await this.orderRepository.getByDocument(data.cpf)
            .catch((e) => {return e });
        return response;
    }
}