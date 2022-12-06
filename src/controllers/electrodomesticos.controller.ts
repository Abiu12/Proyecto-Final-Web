import { Request, Response } from "express";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { ClientesModel } from "../models/clientes.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";
import * as authService from "../services/auth.service";

export async function createElectrodomestico(req: Request, res: Response) {
  const {idCliente} = req.params;
  var date = new Date();
  var fecha=String(date.getDate())+String(date.getMonth()+1)+String(date.getFullYear()).substring(2,4);
  var hora = String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
  const codigo_seguimiento = "E"+idCliente+fecha+hora;
  const {nombre, modelo, marca,estado  } = req.body;
  const electrodomesticoResponse=await ElectrodomesticosModel.create({ codigo_seguimiento, nombre, modelo, marca, idCliente:Number(idCliente),estado:"Recibido"});
  const clienteResponse  = await ClientesModel.findByPk(idCliente, { raw: true });
  var cliente = JSON.parse(JSON.stringify(clienteResponse));
  const mail= cliente.correo;
  const nombreElec = electrodomesticoResponse.getDataValue("nombre");
  const marcaElec = electrodomesticoResponse.getDataValue("marca");
  const modeloElec = electrodomesticoResponse.getDataValue("modelo");
  await authService.sendCodeFollowing({
    mail,data: {codigo_seguimiento, nombreElec,marcaElec,modeloElec },
  });
  console.log("Correo enviadooo");
  res.redirect("/electrodomesticos/view/" + idCliente);
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
  res.redirect("/electrodomesticos/view/" + idCliente);
}
export async function updateElectrodomestico(req: Request, res: Response) {
  const {idCliente,idElectrodomestico} = req.params;
  const { codigo_seguimiento, nombre, modelo, marca } = req.body; 
  const entity = await ElectrodomesticosModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }}); 
  entity?.update({ codigo_seguimiento, nombre, modelo, marca}) 
  res.redirect("/electrodomesticos/view/" + idCliente ); 
}
export async function updateElectrodomesticoEstado(req: Request, res: Response) {
  const {idCliente,idElectrodomestico,estado} = req.params;
  const entity = await ElectrodomesticosModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }}); 
  const orden = await OrdenTrabajoModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }}); 
  orden?.update({estado:"Trabajo cobrado"});
  entity?.update({ estado}) ;
  res.redirect("/electrodomesticos/view/" + idCliente ); 
}
export async function viewElectrodomesticos(req: Request, res: Response) {
  const {idCliente} = req.params;
  const records = await ElectrodomesticosModel.findAll({ where: { idCliente}, raw: true });
  const recordsCliente = await ClientesModel.findAll({ where: { idCliente}, raw: true });
  //const recordsOrden = await OrdenTrabajoModel.findAll({ where: { idCliente}, raw: true });
  const data = { httpCode: 0, message: "", records, recordsCliente };
  res.render("electrodomesticos/electrodomesticos", data);
}
export async function viewAgregarElectrodomestico(req: Request, res: Response) {
  const {idCliente}=req.params;
  const recordsCliente = await ClientesModel.findAll({ where: { idCliente }, raw: true });
  const data = { httpCode: 0, message: "", recordsCliente };
  res.render("electrodomesticos/agregar_electrodomestico", data);
}
export async function viewFormEditElectrodomestico(req: Request, res: Response) {
  const { idElectrodomestico,idCliente } = req.params;
  const entity = await ElectrodomesticosModel.findOne({ where: { idCliente,idElectrodomestico}, raw: true }); /**Buscamos por el id la entidad */ 
  const recordsCliente = await ClientesModel.findOne({ where: { idCliente}, raw: true });
  const dataElectrodomestico = entity || {};
  const data = { recordsCliente,dataElectrodomestico };
  res.render("electrodomesticos/actualizar_electrodomestico", data);
}








