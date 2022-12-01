import { Request, Response } from "express";
import { isValidPassword } from "../libraries/bycript.library";
import { UsuarioModel } from "../models/usuario.model";


export function logginView(req: Request, res: Response){
  const {error} = req.query;
  res.render("login/login-view",{error});
}

export async function logginUsuario(req: Request, res: Response) {
  // try {
     const { body } = req;
     const { correo, contrasenia } = body;
  //   const usuarioResponse = await UsuarioModel.findOne({
  //     attributes: ["idUsuario", "idEmpleado", "correo", "estatus", "rol", "contrasenia"],
  //     where: { correo }
  //   });
  //   if (usuarioResponse !== null) {
  //     const contraseniaUsuario = usuarioResponse.getDataValue("contrasenia");
  //     // if (isValidPassword(contrasenia, contraseniaUsuario)) {
  //     //   const user = usuarioResponse.toJSON();
  //     //   delete user.contrasenia;
  //     //   req.session.user = user;
  //     //   //return res.status(StatusCodes.OK).json(user);
  //     //   return res.redirect("/");
  //     // }
  //       // const user = usuarioResponse.toJSON();
  //        //delete user.contrasenia;
  //        //req.session.user = user;
  //     //   //return res.status(StatusCodes.OK).json(user);
          return res.redirect("/clientes/view");

  //   }

  //   res.redirect("/api/v1/loggin/signin?error=1");
  // } catch (error) {
  //   res.send("error");
  // }
}
