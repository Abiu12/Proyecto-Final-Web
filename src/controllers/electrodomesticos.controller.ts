import { Request, Response } from "express";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { ClienteModel } from "../models/clientes.model";

export async function createElectrodomestico(req: Request, res: Response) {
  const {idCliente} = req.params;
  var date = new Date();
  var fecha=String(date.getDate())+String(date.getMonth()+1)+String(date.getFullYear()).substring(2,4);
  var hora = String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
  const codigo_seguimiento = "E"+idCliente+fecha+hora;
  const {nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones } = req.body;
  await ElectrodomesticosModel.create({ codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones, idCliente:Number(idCliente) });
  res.redirect("/empleado/electrodomesticos/view/" + idCliente);
}
export async function deleteElectrodomestico(req: Request, res: Response) {
  const {idCliente,idElectrodomestico} = req.params;
  const entity = await ElectrodomesticosModel.findOne({
    where: {
      idCliente,
      idElectrodomestico
    }
  });
  entity?.destroy();
  res.redirect("/empleado/electrodomesticos/view/" + idCliente);
}
export async function updateElectrodomestico(req: Request, res: Response) {
  const {idCliente,idElectrodomestico} = req.params;
  const { codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones } = req.body; 
  const entity = await ElectrodomesticosModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }}); 
  entity?.update({ codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones }) 
  res.redirect("/empleado/electrodomesticos/view/" + idCliente ); 
}
export async function viewElectrodomesticos(req: Request, res: Response) {
  const {idCliente} = req.params;
  const records = await ElectrodomesticosModel.findAll({ where: { idCliente}, raw: true });
  const recordsCliente = await ClienteModel.findAll({ where: { idCliente}, raw: true });
  const data = { httpCode: 0, message: "", records, recordsCliente };
  res.render("electrodomesticos/electrodomesticos", data);
}
export async function viewAgregarElectrodomestico(req: Request, res: Response) {
  const {idCliente}=req.params;
  const recordsCliente = await ClienteModel.findAll({ where: { idCliente }, raw: true });
  const data = { httpCode: 0, message: "", recordsCliente };
  res.render("electrodomesticos/agregar_Electrodomestico", data);
}
export async function viewFormEditElectrodomestico(req: Request, res: Response) {
  const { idElectrodomestico,idCliente } = req.params;
  const entity = await ElectrodomesticosModel.findOne({ where: { idCliente,idElectrodomestico}, raw: true }); /**Buscamos por el id la entidad */ 
  const recordsCliente = await ClienteModel.findOne({ where: { idCliente}, raw: true });
  const dataElectrodomestico = entity || {};
  const data = { recordsCliente,dataElectrodomestico };
  res.render("electrodomesticos/actualizar_Electrodomestico", data);
}








