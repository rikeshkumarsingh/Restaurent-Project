import { FoodItem } from "./food-item";

export class OrderRequest {
    foodItems: FoodItem[];
    restoName: string;
    username: string;
    orderStatus:boolean;
    total:number;
    constructor(){
        this.restoName='';
        this.foodItems=[];
        this.username='';
        this.orderStatus=false
        this.total=0;


    }
}
