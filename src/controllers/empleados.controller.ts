import { Request, Response } from "express";
import {EmpleadosModel} from "../models/empleados.model";

export async function createEmpleado(req: Request, res: Response) { 
    const {nombre,apellidoPaterno,apellidoMaterno,telefono} = req.body; 
    await EmpleadosModel.create({nombre,apellidoPaterno,apellidoMaterno,telefono}); 
    const records = await EmpleadosModel.findAll({raw:true}); 
    const data = {httpCode:201,
      message:"Registrado correctamente",
      records:records};
    res.status(201).render("empleados/empleados",data); 
}
export async function deleteEmpleado(req: Request, res: Response) { 
const { idEmpleado } = req.params;
const entity = await EmpleadosModel.findByPk(idEmpleado); 
entity?.destroy(); 
res.redirect("/administrador/view/empleados"); 
}
/**Vista para ver todos los empleados */
export async function viewEmpleados(req:Request,res:Response){ 
  const records = await EmpleadosModel.findAll({raw:true});
  const data = {httpCode:0,message:"",records};
  res.render("empleados/empleados",data);
}

/**Vista para agregar empleado */
export async function viewAgregarEmpleado(req:Request,res:Response){ 
  const records = await EmpleadosModel.findAll({raw:true});
  const data = {httpCode:0,message:"",records};
  res.render("empleados/agregar_empleado",data);
}

export async function viewFormEditEmpleado(req:Request,res:Response) {
  const {idEmpleado} = req.params;
  const entity = await EmpleadosModel.findByPk(idEmpleado,{raw:true}); /**Buscamos por el id la entidad */
  const data = entity || {}; /**Puede ser que no exista */  
  res.render("empleados/actualizar_empleado",data); 
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
export async function updateEmpleado(req: Request, res: Response) { /**Codigo de update */
  // const {status,description} = req.body; /**recuperamos del body del form */
  // const {idStatus} = req.params; /**Recuperamos de la url */
  // const entity = await EmpleadosModel.findByPk(idStatus); /**Buscamos por el id */
  // entity?.update({status,description}) /** ? es por si viene un null */
  // res.redirect("/api/v1/example/view/form"); /**Redireccionamos al form principal */
}







