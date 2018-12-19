import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[];
  recargoEnv: number;
  recargoPag: number;


  constructor(public userId: string, public envio: any, shoppingCart: ShoppingCart, public sucursal){
    this.datePlaced = new Date().getTime();
    if (envio.destino=="domicilio"){
      this.recargoEnv = 5;
    }else{
      this.recargoEnv = 0;
    }
    this.recargoPag = 1;

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
