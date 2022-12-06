import { raw, Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";

export async function viewClientes(req: Request, res: Response) {
  const records = await ClientesModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("clientes/clientes", data);
}
export async function createCliente(req: Request, res: Response) {
  const { correo,nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body;
  const cliente = await ClientesModel.findOne({
    where: {
      telefono
    }, raw: true
  });
  if (cliente == null) {
    await ClientesModel.create({ correo,nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia });
    const records = await ClientesModel.findAll({ raw: true });
    res.redirect("/clientes/view");
  }
  else {
    res.redirect("/clientes/view/cliente_repetido");
  }
}
export async function updateCliente(req: Request, res: Response) {
  const idCliente = Number(req.params.idCliente);
  const { correo, nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body; /**recuperamos del body del form */
  const entity = await ClientesModel.findByPk(idCliente);
  entity?.update({correo, nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia }) /** ? es por si viene un null */
  res.redirect("/clientes/view");
}

export async function deleteCliente(req: Request, res: Response) {
  const { idCliente } = req.params;
  const entity = await ClientesModel.findByPk(idCliente);
  entity?.destroy();
  res.redirect("/clientes/view");
}

export async function viewAgregarCliente(req: Request, res: Response) {
  const records = await ClientesModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records, status: 1 };
  res.render("clientes/agregar_cliente", data);
}
export async function viewFormEditCliente(req: Request, res: Response) {
  const { idCliente } = req.params;
  const entity = await ClientesModel.findByPk(idCliente, { raw: true });
  const data = entity || {};
  res.render("clientes/actualizar_cliente", data);
}
export async function viewClienteRepetido(req: Request, res: Response) {
  res.render("clientes/cliente_repetido");
}








