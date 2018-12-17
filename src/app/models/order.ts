import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];
  status: string;
  recargoEnv: number;
  recargoPag: number;
  cadete: string;

  constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart ){
    this.datePlaced = new Date().getTime();
    this.cadete = "";
    this.status = "pendiente";
    if (shipping.send=="domicilio"){
      this.recargoEnv = 0.05;
    }
    this.recargoPag = 0.01;

    this.items = shoppingCart.items.map(i => {
      return {
        product: {
          name: i.name,
          price: i.price
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      }
    })

  }
}
