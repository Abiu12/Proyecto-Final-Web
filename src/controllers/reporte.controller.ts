import { Request, Response } from "express";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function viewReporte(req: Request, res: Response) {
  res.render("reportes/reporte-view");
}
export async function getData(req: Request, res: Response) {
  const ordenes = await OrdenTrabajoModel.findAll({
    attributes: ["precio"],
    raw: true,
  });

  const electrodomesticos = await -ElectrodomesticosModel.findAll({
    attributes: ["estado"],
    raw: true,
    where:  
  });
  res.status(200).json(orden);
}


