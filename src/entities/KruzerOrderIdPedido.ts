import { uuid } from 'uuidv4';

export class KruzerOrderIdPedido{
    public readonly id: string;

    public results: any;

    
    constructor(props: Omit<KruzerOrderIdPedido, 'id'>, id?: string) {   
        Object.assign(this, props); 
        if(!id) this.id = uuid();

        return this;
    }


  
}