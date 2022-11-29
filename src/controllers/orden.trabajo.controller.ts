import { Request, Response } from "express";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { ClientesModel } from "../models/clientes.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function createOrdenTrabajo(req: Request, res: Response) {
  const {idCliente,idElectrodomestico} = req.params;
  const {trabajo, precio} = req.body;
  await OrdenTrabajoModel.create({ trabajo, precio, idCliente:Number(idCliente),idElectrodomestico:Number(idElectrodomestico) });
  res.redirect("/orden/view/"+ idCliente+"/"+idElectrodomestico);
}
export async function deleteOrdenTrabajo(req: Request, res: Response) {
  const {idCliente,idElectrodomestico,idOrden} = req.params;
  const entity = await OrdenTrabajoModel.findOne({
    where: {
      idCliente,
      idElectrodomestico,
      idOrden
    }
  });
  entity?.destroy();
  res.redirect("/orden/view/"+ idCliente+"/"+idElectrodomestico);
}
export async function updateOrdenTrabajo(req: Request, res: Response) {
  const {idCliente,idElectrodomestico,idOrden} = req.params;
  const { trabajo,precio } = req.body; 
  const entity = await OrdenTrabajoModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }}); 
  entity?.update({ trabajo, precio });
  res.redirect("/orden/view/"+ idCliente+"/"+idElectrodomestico); 
}
export async function viewOrdenTrabajo(req: Request, res: Response) {
  const {idCliente,idElectrodomestico} = req.params;
  const recordsOrden = await OrdenTrabajoModel.findOne({ where: { idCliente,idElectrodomestico}, raw: true });
  const recordsCliente = await ClientesModel.findOne({ where: { idCliente}, raw: true });
  const recordsElectrodomestico = await ElectrodomesticosModel.findOne({ where: { idCliente,idElectrodomestico}, raw: true });
  const data = { httpCode: 0, message: "", recordsOrden, recordsCliente,recordsElectrodomestico };
  res.render("orden-trabajo/orden_trabajo", data);
}
export async function viewAgregarOrdenTrabajo(req: Request, res: Response) {
  const {idCliente,idElectrodomestico}=req.params;
  const recordsCliente = await ClientesModel.findOne({ where: { idCliente }, raw: true });
  const recordsElectrodomestico = await ElectrodomesticosModel.findOne({ where: { idCliente,idElectrodomestico }, raw: true });
  const data = { httpCode: 0, message: "", recordsCliente,recordsElectrodomestico };
  res.render("orden-trabajo/agregar_orden_trabajo", data);
}
export async function viewFormEditOrdenTrabajo(req: Request, res: Response) {
  const { idElectrodomestico,idCliente,idOrden } = req.params;
  const entity = await OrdenTrabajoModel.findOne({ where: { idCliente,idElectrodomestico,idOrden}, raw: true }); 
  const recordsCliente = await ClientesModel.findOne({ where: { idCliente}, raw: true });
  const recordsElectrodomestico = await ElectrodomesticosModel.findOne({ where: { idCliente,idElectrodomestico }, raw: true });
  const recordsOrden = entity || {};
  const data = { recordsCliente,recordsOrden,recordsElectrodomestico };
  res.render("orden-trabajo/actualizar_orden_trabajo", data);
}








