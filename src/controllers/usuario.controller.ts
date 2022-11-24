import { Request, Response } from "express";
import { EmpleadoModel } from "../models/empleado.model";
import { UsuarioModel } from "../models/usuario.model";
import {hashPassword,isValidPassword,generatePassword} from "../libraries/bycript.library";
export async function createUsuario(req: Request, res: Response) {
  const {idEmpleado} = req.params;
  const {correo, contrasenia, estatus, rol, token} = req.body;
  const contraseniaHash=hashPassword(contrasenia);
  await UsuarioModel.create({idEmpleado:Number(idEmpleado),correo, contrasenia:contraseniaHash, estatus, rol, token_restauracion:token});
  res.redirect("/administrador/usuarios/view/"+idEmpleado);
}
export async function updateUsuario(req: Request, res: Response) { 
  const {idEmpleado,idUsuario} = req.params;
  const {correo, contrasenia, estatus, rol, token} = req.body; 
  const entity = await UsuarioModel.findOne({where:{
    idEmpleado,
    idUsuario
  }}); 
  entity?.update({idEmpleado:Number(idEmpleado),correo, contrasenia, estatus, rol, token_restauracion:token}) /** ? es por si viene un null */
  res.redirect("/administrador/usuarios/view/"+idEmpleado); 
}
export async function deleteUsuario(req: Request, res: Response) {
  const {idEmpleado,idUsuario} = req.params;
  const entity = await UsuarioModel.findOne({where:{
    idEmpleado,
    idUsuario
  }});
  entity?.destroy();
  res.redirect("/administrador/usuarios/view/"+idEmpleado); 
}
export async function viewUsuarios(req: Request, res: Response) {
  const{idEmpleado}=req.params;
  const recordsUsuario = await UsuarioModel.findAll({ where: { idEmpleado: idEmpleado }, raw: true });
  const recordsEmpleado = await EmpleadoModel.findOne({ where: { idEmpleado: idEmpleado }, raw: true });
  const data = { httpCode: 0, message: "", recordsUsuario, recordsEmpleado };
  res.render("usuarios/usuarios", data);
}
export async function viewAgregarUsuario(req: Request, res: Response) {
  const {idEmpleado}=req.params;
  const recordsEmpleado = await EmpleadoModel.findOne({ where: { idEmpleado: idEmpleado }, raw: true });
  const data = { httpCode: 0, message: "", recordsEmpleado };
  res.render("usuarios/agregar_usuario", data);
}

export async function viewFormEditUsuario(req: Request, res: Response) {
  const {idEmpleado,idUsuario} = req.params;
  const entity = await UsuarioModel.findOne({where:{
    idEmpleado,
    idUsuario    
  }, raw: true}); 
  const data = entity || {};
  res.render("usuarios/actualizar_usuario", data);
}










