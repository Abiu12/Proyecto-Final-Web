import { Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";

export async function createCliente(req: Request, res: Response) {
  const { nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body;
  await ClientesModel.create({ nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia });
  const records = await ClientesModel.findAll({ raw: true });
  res.redirect("/empleado/clientes/view");
}
export async function deleteCliente(req: Request, res: Response) {
  const { idCliente } = req.params;
  const entity = await ClientesModel.findByPk(idCliente);
  entity?.destroy();
  res.redirect("/empleado/clientes/view"); 
}
export async function viewClientes(req: Request, res: Response) {
  const records = await ClientesModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("clientes/clientes", data);
}
export async function viewAgregarCliente(req: Request, res: Response) {
  const records = await ClientesModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("clientes/agregar_cliente", data);
}
export async function viewFormEditCliente(req: Request, res: Response) {
  const { idCliente } = req.params;
  const entity = await ClientesModel.findByPk(idCliente, { raw: true });
  const data = entity || {};
  res.render("clientes/actualizar_cliente", data);
}
export async function updateCliente(req: Request, res: Response) {
  const idCliente = Number(req.params.idCliente);
  const { nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body; /**recuperamos del body del form */
  const entity = await ClientesModel.findByPk(idCliente); 
  entity?.update({ nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia }) /** ? es por si viene un null */
  res.redirect("/empleado/clientes/view"); 
}







