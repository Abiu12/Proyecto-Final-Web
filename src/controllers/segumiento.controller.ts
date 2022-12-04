import { Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function viewIndexSeguimiento(req: Request, res: Response) {
  res.render("consulta-electrodomestico/consulta-electrodomestico");
}

export async function readElectrodomestico(req: Request, res: Response) {
  const {codigo_seguimiento} =req.body;
  const entityElectrodomestico = await ElectrodomesticosModel.findOne({where:{
    codigo_seguimiento
  }});
  const electrodomestico = JSON.parse(JSON.stringify(entityElectrodomestico));
  
  console.log(electrodomestico);
  console.log(codigo_seguimiento);
  
  if(entityElectrodomestico!=null){
    const entityCliente = await ClientesModel.findOne({where:{
      idCliente:electrodomestico.idCliente
    }});
    const cliente = JSON.parse(JSON.stringify(entityCliente));
    const entityOrden = await OrdenTrabajoModel.findOne({where:{
      idCliente:electrodomestico.idCliente,
      idElectrodomestico:electrodomestico.idElectrodomestico
    }});
    const orden = JSON.parse(JSON.stringify(entityOrden));
    const data ={electrodomestico,cliente,orden};
    res.render("consulta-electrodomestico/status-electrodomestico",data);
  }
  else{
    res.render("consulta-electrodomestico/electrodomestico-no-encontrado");
  }
  
  // res.redirect("/pendientes/view"); 
}







