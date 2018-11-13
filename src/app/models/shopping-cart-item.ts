import { Product } from "./product";

export class ShoppingCartItem{

    constructor(public products: Product, public quantity: number){}
    get totalPrice(){
        return this.products.price * this.quantity;
    }
}