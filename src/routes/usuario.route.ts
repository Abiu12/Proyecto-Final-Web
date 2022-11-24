import {Router} from "express";
import {createUsuario,updateUsuario,deleteUsuario, viewUsuarios, viewAgregarUsuario, viewFormEditUsuario} from "../controllers/usuario.controller"
const usuarioRouter: Router = Router();
usuarioRouter.post("/create/:idEmpleado",createUsuario); 
usuarioRouter.post("/update/:idEmpleado/:idUsuario",updateUsuario); 
usuarioRouter.get("/delete/:idEmpleado/:idUsuario",deleteUsuario);
usuarioRouter.get("/view/:idEmpleado",viewUsuarios); 
usuarioRouter.get("/view/agregar_usuario/:idEmpleado",viewAgregarUsuario); 
usuarioRouter.get("/view/modificar_usuario/:idEmpleado/:idUsuario",viewFormEditUsuario); 
export default usuarioRouter;