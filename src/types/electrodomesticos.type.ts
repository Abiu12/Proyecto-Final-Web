export default interface ElectrodomesticosType {
  idElectrodomestico?: number;
  codigo_seguimiento?: string;
  nombre?: string;
  modelo?: string;
  marca?: string;
  fecha_entrada?: string;
  fecha_salida?: string;
  estado?: string;
  garantia?: string;
  observaciones?: string;
  idCliente?:number;
  
}
