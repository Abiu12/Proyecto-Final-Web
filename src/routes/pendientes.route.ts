import {Router} from "express";
import {viewPendientes, updateEstadoOrden} from "../controllers/pendientes.controller"
const pendientesRouter: Router = Router();
pendientesRouter.get("/view",viewPendientes); 
pendientesRouter.post("/status/:idCliente/:idElectrodomestico/:statusElectrodomestico",updateEstadoOrden); 
export default pendientesRouter;