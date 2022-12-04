import { Request, Response } from "express";

export async function viewReporte(req: Request, res: Response) {
  res.render("reportes/reporte-view");
}


