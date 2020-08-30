import { Product } from '../Product/product';
import { Cart } from '../Cart/cart';

export class CartDetails {

    public cartDetailId : number;
    public unitPrice : number;
    public totalPrice : number;
    public quantity : number;
    public product : Product;
    public cart : Cart;
    public state : boolean;
    
}
