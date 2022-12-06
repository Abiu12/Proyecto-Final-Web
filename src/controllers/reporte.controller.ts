import { Request, Response } from "express";
import { Op } from "sequelize";
import sequelize from "sequelize/types/sequelize";
import { ElectrodomesticosModel } from "../models/electrodomesticos.model";
import { OrdenTrabajoModel } from "../models/orden.trabajo.model";

var fechaInicio=0;
var fechaFinal=0;
export async function viewReporte(req: Request, res: Response) {
  res.render("reportes/reporte-form");
}
export async function viewReporteFecha(req: Request, res: Response) {
  const {start,end}= req.body;
  fechaInicio=start;
  fechaFinal=end;
  const data={fechaInicio,fechaFinal}
  res.render("reportes/reporte-view",data);
}




export async function getData(req: Request, res: Response) {
	let startedDate = new Date(fechaInicio);
	let endDate = new Date(fechaFinal);
	const ordenes = await OrdenTrabajoModel.findAll({
		attributes: ["precio", "fecha_salida"],
		where: {
			estado: "Trabajo cobrado",
			fecha_salida: { [Op.between]: [startedDate, endDate] },
		},
		order: [["fecha_salida", "ASC"]],
	});
	res.status(200).json(ordenes);
}