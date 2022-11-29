import {Router} from "express";
import {createOrdenTrabajo,updateOrdenTrabajo,deleteOrdenTrabajo, viewOrdenTrabajo, viewAgregarOrdenTrabajo, viewFormEditOrdenTrabajo} from "../controllers/orden.trabajo.controller"
const ordenRouter: Router = Router();
ordenRouter.post("/create/:idCliente/:idElectrodomestico",createOrdenTrabajo); 

ordenRouter.post("/update/:idCliente/:idElectrodomestico/:idOrden",updateOrdenTrabajo); 
ordenRouter.get("/delete/:idCliente/:idElectrodomestico/:idOrden",deleteOrdenTrabajo)
ordenRouter.get("/view/:idCliente/:idElectrodomestico",viewOrdenTrabajo);
ordenRouter.get("/view/agregar_orden_trabajo/:idCliente/:idElectrodomestico",viewAgregarOrdenTrabajo);
ordenRouter.get("/view/modificar_electrodomestico/:idCliente/:idElectrodomestico/:idOrden",viewFormEditOrdenTrabajo); 
export default ordenRouter;