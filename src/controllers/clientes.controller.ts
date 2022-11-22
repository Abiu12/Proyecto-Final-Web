import { Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";

export async function createCliente(req: Request, res: Response) {
  const { nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body;
  await ClientesModel.create({ nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia });
  const records = await ClientesModel.findAll({ raw: true }); /**Regreso una actualizacion de los clientes */
  const data = {
    httpCode: 201,
    message: "Registrado correctamente",
    records: records
  };
  
  // res.status(201).render("clientes/clientes",data);
  res.redirect("/empleado/clientes/view");
}
export async function deleteCliente(req: Request, res: Response) {
  const { idCliente } = req.params;
  const entity = await ClientesModel.findByPk(idCliente);
  entity?.destroy();
  // const records = await ClientesModel.findAll({ raw: true }); /**Regreso una actualizacion de los clientes */
  // const data = {
  //   httpCode: 201,
  //   message: "Registrado correctamente",
  //   records: records
  // };
  // res.status(201).render("clientes/clientes", data);
  res.redirect("/empleado/clientes/view"); /**No se borra en el primero */
}
/**Vista para ver todos los Clientes */
export async function viewClientes(req: Request, res: Response) {
  const records = await ClientesModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("clientes/clientes", data);
}

/**Vista para agregar Cliente */
export async function viewAgregarCliente(req: Request, res: Response) {
  const records = await ClientesModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("clientes/agregar_cliente", data);
}

export async function viewFormEditCliente(req: Request, res: Response) {
  // const { idCliente } = req.params;
  const idCliente = Number(req.params.idCliente);
  const entity = await ClientesModel.findByPk(idCliente, { raw: true }); /**Buscamos por el id la entidad */
  const data = entity || {}; /**Puede ser que no exista */
  res.render("clientes/actualizar_cliente", data);
}
/**Para actualizar Version mia */
// export async function updateExample(req: Request, res: Response) { /**Codigo de update */
//     const {status,description} = req.body; 
//     const {idStatus} = req.params;
//     console.log(idStatus);

//     await ExampleModel.update({
//       status: status,
//       description: description
//     },{
//       where:{
//         idStatus:idStatus
//       }
//     }
//     );
//     const records = await ExampleModel.findAll({raw:true}); /**recupero los datos */
//     const data = {httpCode:201,
//       message:"Modificado correctamente",
//       records:records};
//     res.status(201).render("status/status-view",data); /**Actualizamos la vista */

// }

/**Para actualizar profe FOTO */
export async function updateCliente(req: Request, res: Response) { /**Codigo de update */
  const idCliente = Number(req.params.idCliente);
  const { nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body; /**recuperamos del body del form */
  const entity = await ClientesModel.findByPk(idCliente); /**Buscamos por el id */
  entity?.update({ nombre, apellidoPaterno, apellidoMaterno, telefono, calle, noCasaInt, noCasaExt, colonia }) /** ? es por si viene un null */
  res.redirect("/empleado/clientes/view"); /**Redireccionamos al form principal */
}







