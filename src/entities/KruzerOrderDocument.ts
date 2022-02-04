import { uuid } from 'uuidv4';

export class KruzerOrderDocument{
    public readonly id: string;

    public document: string;
    public results: any;

    
    constructor(props: Omit<KruzerOrderDocument, 'id'>, id?: string) {   
        Object.assign(this, props); 
        if(!id) this.id = uuid();

        return this;
    }


  
}