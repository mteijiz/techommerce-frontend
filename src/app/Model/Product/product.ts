import { Brand } from '../Brand/brand';
import { Category } from '../Category/category';
import { Subcategory } from '../Subcategory/subcategory';
import { Image } from '../Image/image';

export class Product {

    public productId : number;
    public productCode : String;
    public productName : String;
    public productDescription : String;
    public productPrice : number;
    public productQuantity : number;
    public productRate : number;
    public productQuantityOfVotes: number;
    public productBrand : Brand;
    public productCategory : Category;
    public productSubcategory : Subcategory;
    public productState : Boolean;
    public productImage : Image[];

}
