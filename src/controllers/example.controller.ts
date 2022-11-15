// import { Request, Response } from "express";
// // import {ExampleModel} from "../models/example.model";

// // export async function createExample(req: Request, res: Response) { /**Create es para insertar */
// //     const {status,description} = req.body; /**Id incrementable */
// //     await ExampleModel.create({status,description}); /**Inserto a bd */
// //     const records = await ExampleModel.findAll({raw:true}); /**recupero los datos */
// //     const data = {httpCode:201,
// //       message:"Registrado correctamente",
// //       records:records};
// //     res.status(201).render("status/status-view",data); /**Actualizamos la vista */
// // }

// /**Para actualizar Version mia */
// // export async function updateExample(req: Request, res: Response) { /**Codigo de update */
// //     const {status,description} = req.body; 
// //     const {idStatus} = req.params;
// //     console.log(idStatus);
    
// //     await ExampleModel.update({
// //       status: status,
// //       description: description
// //     },{
// //       where:{
// //         idStatus:idStatus
// //       }
// //     }
// //     );
// //     const records = await ExampleModel.findAll({raw:true}); /**recupero los datos */
// //     const data = {httpCode:201,
// //       message:"Modificado correctamente",
// //       records:records};
// //     res.status(201).render("status/status-view",data); /**Actualizamos la vista */
    
// // }

// /**Para actualizar profe FOTO */
// export async function updateExample(req: Request, res: Response) { /**Codigo de update */
//   const {status,description} = req.body; /**recuperamos del body del form */
//   const {idStatus} = req.params; /**Recuperamos de la url */
//   const entity = await ExampleModel.findByPk(idStatus); /**Buscamos por el id */
//   entity?.update({status,description}) /** ? es por si viene un null */
//   res.redirect("/api/v1/example/view/form"); /**Redireccionamos al form principal */
// }


// /**Eliminado por bander y uno fisico 
//  * -Por bandera: a todos los registros que tengamos le agregamos
//  * -Eliminacion fisica: delete
//  *
// */

// export async function deleteExample(req: Request, res: Response) { /**Codigo de delete */
//   const { idStatus } = req.params;
//   const entity = await ExampleModel.findByPk(idStatus); /**Busca en la bd */
//   entity?.destroy(); /**si no es nulo lo destruye */
//   res.redirect("/api/v1/example/view/form"); /**Redireccionamos al form principal */
// }
// export async function viewFormExample(req:Request,res:Response){ /**view Es para ver el form como tal */
//   const records = await ExampleModel.findAll({raw:true}); /**Consulta en bd raw: true, solo queremos la info en json, no como en modelo */
//   const data = {httpCode:0,message:"",records};
//   res.render("status/status-view",data);
// }

// export async function viewFormEditExample(req:Request,res:Response) {
//   const {idStatus} = req.params;
//   const entity = await ExampleModel.findByPk(idStatus,{raw:true}); /**Buscamos por el id la entidad */
//   const data = entity || {}; /**Puede ser que no exista */  
//   res.render("status/components/form-edit-component",data); 
// }


// // /**Solo queremos los datos */

// export async function getData(req: Request, res: Response) {
//   const records = await ExampleModel.findAll({raw:true});
//   res.status(200).json(records); /**de la peticion regresa el json con todos los datos */
// }