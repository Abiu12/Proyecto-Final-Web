export default interface OrdenTrabajoType {
  idOrden? :number;
  trabajo?: string;
  precio?: string;
  fecha_entrada?: string;
  fecha_salida?: string;
  estado?: string;
  garantia?: string;
  observaciones?: string;
  idCliente?:number;
  idElectrodomestico?:number;
  
}
