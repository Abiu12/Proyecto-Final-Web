import { Request, Response } from "express";
import { EmpleadoModel } from "../models/empleado.model";

export async function createEmpleado(req: Request, res: Response) {
  const { nombre, primerApellido, segundoApellido, genero } = req.body;
  const empleado = await EmpleadoModel.findOne({
    where: {
      nombre,
      primerApellido,
      segundoApellido
    }, raw: true
  });
  if (empleado == null) {
    await EmpleadoModel.create({ nombre, primerApellido, segundoApellido, genero });
    const records = await EmpleadoModel.findAll({ raw: true });
    res.redirect("/empleados/view");
  }
  else {
    res.redirect("/empleados/view/empleado_repetido");
  }
}
export async function updateEmpleado(req: Request, res: Response) {
  const { nombre, primerApellido, segundoApellido, genero } = req.body;
  const { idEmpleado } = req.params;
  const entity = await EmpleadoModel.findByPk(idEmpleado);
  entity?.update({ nombre, primerApellido, segundoApellido, genero })
  res.redirect("/empleados/view");
}
export async function deleteEmpleado(req: Request, res: Response) {
  const { idEmpleado } = req.params;
  const entity = await EmpleadoModel.findByPk(idEmpleado);
  entity?.destroy();
  res.redirect("/empleados/view");
}
export async function viewEmpleados(req: Request, res: Response) {
  const records = await EmpleadoModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("empleados/empleados", data);
}
export async function viewAgregarEmpleado(req: Request, res: Response) {
  const records = await EmpleadoModel.findAll({ raw: true });
  const data = { httpCode: 0, message: "", records };
  res.render("empleados/agregar_empleado", data);
}
export async function viewFormEditEmpleado(req: Request, res: Response) {
  const { idEmpleado } = req.params;
  const entity = await EmpleadoModel.findByPk(idEmpleado, { raw: true });
  const data = entity || {};
  res.render("empleados/actualizar_empleado", data);
}
export async function viewEmpleadoRepetido(req: Request, res: Response) {
  res.render("empleados/empleado_repetido");
}








