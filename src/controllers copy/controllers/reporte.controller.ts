import { Request, Response } from "express";
import sequelize from "sequelize/types/sequelize";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function viewReporte(req: Request, res: Response) {
  res.render("reportes/reporte-view");
}
export async function getData(req: Request, res: Response) {
  const ordenes = await OrdenTrabajoModel.findAll({
    attributes: ["precio","fecha_salida"],
    raw: true,
    where:{
      estado:"Entregado",
    },
    order: [
      ['fecha_salida', 'ASC'] ],
  });
  var ordenesfiltradas = [];
  /**Vamos a ocupar moment js para depurar el mes */
  res.status(200).json(ordenes);
}


