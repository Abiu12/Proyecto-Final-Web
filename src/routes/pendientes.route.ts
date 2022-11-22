import {Router} from "express";
import {viewPendientes, updateEstadoElectrodomestico} from "../controllers/pendientes.controller"
const pendientesRouter: Router = Router();

pendientesRouter.get("/view",viewPendientes); 
pendientesRouter.post("/status/:idCliente/:idElectrodomestico/:statusElectrodomestico",updateEstadoElectrodomestico); 


// empleadoRouter.get("/view/form",viewFormExample);
// empleadoRouter.get("/view/form-edit/:idStatus",viewFormEditExample); /**Para la edicion, es get por que entregamos documentos html */

export default pendientesRouter;