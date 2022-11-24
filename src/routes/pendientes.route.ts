import {Router} from "express";
import {viewPendientes, updateEstadoElectrodomestico} from "../controllers/pendientes.controller"
const pendientesRouter: Router = Router();
pendientesRouter.get("/view",viewPendientes); 
pendientesRouter.post("/status/:idCliente/:idElectrodomestico/:statusElectrodomestico",updateEstadoElectrodomestico); 
export default pendientesRouter;