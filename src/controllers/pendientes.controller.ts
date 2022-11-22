import { Request, Response } from "express";
import { ClientesModel } from "../models/clientes.model";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";


/**Vista para ver los pendientes */
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
  // var electrodomestico = {recordsElectrodomestico:recordsElectrodomestico};
  // console.log(electrodomestico.recordsElectrodomestico[0]["dataValues"]);
  var electrodomestico = JSON.parse(JSON.stringify(recordsElectrodomestico));
  // console.log(electrodomestico[0].modelo);

  const recordsCliente = [];
  for (let index = 0; index < recordsElectrodomestico.length; index++) {
     recordsCliente.push(await ClientesModel.findOne({ where: {idCliente:electrodomestico[index].idCliente}, raw: true })); 
  }
  console.log(recordsCliente);
  const data = {recordsElectrodomestico,recordsCliente};
  // console.log(recordsElectrodomestico);
  res.render("pendientes/pendientes", data);
}


export async function updateEstadoElectrodomestico(req: Request, res: Response) {
  // res.send("ok");
  const {idCliente,idElectrodomestico,statusElectrodomestico} =req.params;
  const entity = await ElectrodomesticosModel.findOne({where:{
    idCliente : idCliente,
    idElectrodomestico : idElectrodomestico 
  }});
  entity?.update({ estado:statusElectrodomestico})
  res.redirect("/tecnico/pendientes/view"); 
}







