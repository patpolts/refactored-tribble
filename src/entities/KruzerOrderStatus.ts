import { uuid } from 'uuidv4';

export class KruzerOrderStatus{

    public codigoPedido: string;
    public dataPedido: string;
    public statusDescription: string;
    public cpf: string;

    
  constructor(props: KruzerOrderStatus, id?: string) {
    Object.assign(this, props); 
  }
  
}