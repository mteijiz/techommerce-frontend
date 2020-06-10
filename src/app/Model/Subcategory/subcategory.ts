import { Category } from '../Category/category';

export class Subcategory {

    public subcategoryId : number;
    public subcategoryCode : String;
    public subcategoryName : String;
    public subcategoryDescription : String;
    public subcategoryState : boolean;
    public category : Category

    constructor(){
        this.subcategoryName="";
    }
}
