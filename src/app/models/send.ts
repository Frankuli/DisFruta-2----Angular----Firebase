export class Send {
  cadete: string;
  destino: string;
  cliente: string;

  constructor(userId: string, public envio: any, public sucursal) {
    this.cadete = '';
    this.cliente= userId;
  }
}
