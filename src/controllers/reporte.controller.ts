import { Request, Response } from "express";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

export async function viewReporte(req: Request, res: Response) {
  res.render("reportes/reporte-view");
}
export async function getData(req: Request, res: Response) {
  const orden = await OrdenTrabajoModel.findAll({
    attributes: ["precio"],
    raw: true,
  });
  res.status(200).json(orden);
}


