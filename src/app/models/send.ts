export class Send {
  cadete: string;
  destino: string;
  cliente: string;
  estado: string;

  constructor(userId: string, public envio: any, public sucursal) {
    this.cadete = '';
    this.estado = 'Pendiente';
    this.cliente= userId;
  }
}
