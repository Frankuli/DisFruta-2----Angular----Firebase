export class ShoppingCartItem{
  key: string;
  price: number;
  name: string;
  quantity: number;

    constructor(init?: Partial<ShoppingCartItem>){
      Object.assign(this, init);
    }

    get totalPrice(){
        return this.price * this.quantity;
    }
}
