import { Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function viewPendientes(req: Request, res: Response) {
  const { Op } = require("sequelize");
  const recordsElectrodomestico = await ElectrodomesticosModel.findAll({
    where: {
      [Op.or]: [
        { estado: "En revisión" },
        { estado: "En reparación" }
      ]
    }
  });
  var electrodomestico = JSON.parse(JSON.stringify(recordsElectrodomestico));
  console.log("Electrodomesticos");
  
  console.log(electrodomestico);
  
  const recordsCliente = [];
  const recordOrdenTrabajo = [];
  for (let index = 0; index < electrodomestico.length; index++) {
     recordsCliente.push(await ClientesModel.findOne({ where: {idCliente:electrodomestico[index].idCliente}, raw: true })); 
     recordOrdenTrabajo.push(await OrdenTrabajoModel.findOne({where:{idCliente:electrodomestico[index].idCliente,idElectrodomestico:electrodomestico[index].idElectrodomestico}, raw:true}));
  }
  const data = {recordsElectrodomestico,recordsCliente,recordOrdenTrabajo};
  res.render("pendientes/pendientes", data);
}

export async function updateEstadoElectrodomestico(req: Request, res: Response) {
  const {idCliente,idElectrodomestico,statusElectrodomestico} =req.params;
  const entity = await ElectrodomesticosModel.findOne({where:{
    idCliente,
    idElectrodomestico
  }});
  entity?.update({ estado:statusElectrodomestico})
  res.redirect("/pendientes/view"); 
}







