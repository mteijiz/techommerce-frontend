import { CartDetails } from '../CartDetails/cart-details';

export class Cart {

    public totalAmount : number;
    public state : boolean;
    public userId : string;
    public quantityOfProduct : number;
    public details : CartDetails[];
}
