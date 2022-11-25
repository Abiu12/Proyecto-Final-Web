import { Request, Response } from "express";
import {ClienteModel} from "../models/clientes.model";

export async function indexViewCliente(req: Request, res: Response) {
  return res.render("cliente/cliente-view");
}
export async function readCliente(req: Request, res: Response) {
  const {query:where}=req;
  const clientes= await ClienteModel.findAll({
    attributes:["idCliente","nombre","primerApellido","segundoApellido","telefono","calle","noCasaInt","noCasaExt","colonia","municipio"],
    raw:true,
    where
  });
  res.status(200).json(clientes);
}
export async function createCliente(req: Request, res: Response) {
  try {
    const {body}= req.body;
    console.log("Body que llega a controlador "+ body);    
    // const clienteResponse = await ClienteModel.create(body,{raw: true});
    const clienteResponse = await ClienteModel.create({
      nombre:"Abiu",
      primerApellido:"Franco",
      segundoApellido: "Matias",
      telefono: '9511928339',
      calle: "Lagos",
      noCasaInt:"A",
      noCasaExt:'13',
      colonia: "Donaji",
      municipio:"Oaxaca de Juarez"    
    },{raw: true})
    res.status(201).json(clienteResponse);
  } catch (error) {
    console.log(error);
  }
}
export async function updateCliente(req: Request, res: Response) {
  const {idCliente} = req.params;
  const {body} = req;
  console.log("id del cliente a actualizar");
  console.log(idCliente);
  console.log("body de actualizar");
  console.log(body);
  
  
  
  
  const entity = await ClienteModel.findByPk(idCliente);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}
export async function deleteCliente(req: Request, res: Response) {
  const { idCliente } = req.params;
  const entity = await ClienteModel.findByPk(idCliente);
  await entity?.destroy();
  res.status(204).json({ok:""}); 
}









