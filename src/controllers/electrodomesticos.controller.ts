import { Request, Response } from "express";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { ClientesModel } from "../models/clientes.model";



export async function createElectrodomestico(req: Request, res: Response) {
  console.log(req.body);
  const idCliente = Number(req.params.idCliente);
  const { codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones } = req.body;
  await ElectrodomesticosModel.create({ codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones, idCliente });
  // const records = await ElectrodomesticosModel.findAll({ raw: true });
  // const recordsCliente = await ClientesModel.findAll({where: {idCliente: idCliente}, raw: true});
  res.redirect("/empleado/electrodomesticos/view/" + idCliente);
}
export async function deleteElectrodomestico(req: Request, res: Response) {
  const idCliente = Number(req.params.idCliente);
  const idElectrodomestico = Number(req.params.idElectrodomestico);
  const entity = await ElectrodomesticosModel.findAll({
    where: {
      idCliente: idCliente,
      idElectrodomestico: idElectrodomestico
    }
  });
  entity[0]?.destroy();
  res.redirect("/empleado/electrodomesticos/view/" + idCliente);
}
/**Vista para ver todos los Electrodomesticos */
export async function viewElectrodomesticos(req: Request, res: Response) {
  const idCliente = Number(req.params.idCliente);
  const records = await ElectrodomesticosModel.findAll({ where: { idCliente: idCliente }, raw: true });
  const recordsCliente = await ClientesModel.findAll({ where: { idCliente: idCliente }, raw: true });
  const data = { httpCode: 0, message: "", records, recordsCliente };
  res.render("electrodomesticos/electrodomesticos", data);
}
/**Vista para agregar Electrodomestico */
export async function viewAgregarElectrodomestico(req: Request, res: Response) {
  const idCliente = Number(req.params.idCliente);
  const recordsCliente = await ClientesModel.findAll({ where: { idCliente: idCliente }, raw: true });
  const data = { httpCode: 0, message: "", recordsCliente };
  res.render("electrodomesticos/agregar_Electrodomestico", data);
}

export async function viewFormEditElectrodomestico(req: Request, res: Response) {
  const { idElectrodomestico,idCliente } = req.params;
  const entity = await ElectrodomesticosModel.findOne({ where: { idCliente: idCliente }, raw: true }); /**Buscamos por el id la entidad */ 
  const recordsCliente = await ClientesModel.findOne({ where: { idCliente: idCliente }, raw: true });
  const dataElectrodomestico = entity || {}; /**Puede ser que no exista */
  // console.log(dataElectrodomestico.nombre);
  
  const data = { recordsCliente,dataElectrodomestico };
  // console.log(entity.nombre);
  res.render("electrodomesticos/actualizar_Electrodomestico", data);
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
export async function updateElectrodomestico(req: Request, res: Response) { /**Codigo de update */
  const idCliente = Number(req.params.idCliente);
  const idElectrodomestico = Number(req.params.idElectrodomestico);
  const { codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones } = req.body; 
  const entity = await ElectrodomesticosModel.findOne({where:{
    idCliente:idCliente,
    idElectrodomestico:idElectrodomestico
  }}); /**Buscamos por el id */
  entity?.update({ codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones }) 
  res.redirect("/empleado/electrodomesticos/view/" + idCliente ); /**Redireccionamos al form principal */
}







