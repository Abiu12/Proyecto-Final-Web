import { Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function viewPendientes(req: Request, res: Response) {
  const { Op } = require("sequelize");
  const recordsOrden = await OrdenTrabajoModel.findAll({
    where: {
      [Op.or]: [
        { estado: "En revisión" },
        { estado: "En reparación" }
      ]
    }
  });
  var ordenes = JSON.parse(JSON.stringify(recordsOrden));
  const recordsCliente = [];
  const recordsElectrodomestico = [];
  for (let index = 0; index < ordenes.length; index++) {
     recordsCliente.push(await ClientesModel.findOne({ where: {idCliente:ordenes[index].idCliente}, raw: true })); 
     recordsElectrodomestico.push(await ElectrodomesticosModel.findOne({where:{idCliente:ordenes[index].idCliente,idElectrodomestico:ordenes[index].idElectrodomestico}, raw:true}));
  }
  
  
  const data = {recordsOrden,recordsCliente,recordsElectrodomestico};
  res.render("pendientes/pendientes", data);
}

export async function updateEstadoOrden(req: Request, res: Response) {
  const {idCliente,idElectrodomestico,statusElectrodomestico} =req.params;
  const entity = await OrdenTrabajoModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }});
  entity?.update({ estado:statusElectrodomestico})
  res.redirect("/pendientes/view"); 
}







