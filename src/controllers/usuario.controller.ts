import { Request, Response } from "express";
import { EmpleadoModel } from "../models/empleado.model";
import { UsuarioModel } from "../models/usuario.model";
import {hashPassword,isValidPassword,generatePassword} from "../libraries/bycript.library";
export async function createUsuario(req: Request, res: Response) {
  const {idEmpleado} = req.params;
  const {correo, contrasenia, estatus, rol} = req.body;
  const contraseniaHash=hashPassword(contrasenia);
  await UsuarioModel.create({idEmpleado:Number(idEmpleado),correo, contrasenia:contraseniaHash, estatus, rol});
  res.redirect("/usuarios/view/"+idEmpleado);
}
export async function createCredencialesAdmin(req: Request, res: Response) {
  await EmpleadoModel.create({idEmpleado: 0,nombre:"Abiu",primerApellido:"Franco",segundoApellido:"Matias",genero:"H"});
  const contraseniaHash=hashPassword("admin");
  await UsuarioModel.create({idEmpleado: 0,correo:"admin", contrasenia:contraseniaHash, estatus:"A", rol:"1111"});
  res.send("creado");
}
export async function updateUsuario(req: Request, res: Response) { 
  const {idEmpleado,idUsuario} = req.params;
  const {correo, contrasenia, estatus, rol} = req.body; 
  const contraseniaHash=hashPassword(contrasenia);
  const entity = await UsuarioModel.findOne({where:{
    idEmpleado,
    idUsuario
  }}); 
  entity?.update({idEmpleado:Number(idEmpleado),correo, contrasenia:contraseniaHash, estatus, rol}) /** ? es por si viene un null */
  res.redirect("/usuarios/view/"+idEmpleado); 
}
export async function deleteUsuario(req: Request, res: Response) {
  const {idEmpleado,idUsuario} = req.params;
  const entity = await UsuarioModel.findOne({where:{
    idEmpleado,
    idUsuario
  }});
  entity?.destroy();
  res.redirect("/usuarios/view/"+idEmpleado); 
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










