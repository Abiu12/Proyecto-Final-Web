import {Router} from "express";
import {createElectrodomestico,updateElectrodomestico,deleteElectrodomestico, viewElectrodomesticos, viewAgregarElectrodomestico, viewFormEditElectrodomestico} from "../controllers/electrodomesticos.controller"
const electrodometicoRouter: Router = Router();

electrodometicoRouter.post("/create/:idCliente",createElectrodomestico); /**Crear un empleado */
electrodometicoRouter.post("/update/:idCliente/:idElectrodomestico",updateElectrodomestico); /**Update un empleado */
electrodometicoRouter.get("/delete/:idCliente/:idElectrodomestico",deleteElectrodomestico) /**Delete un empleado */


electrodometicoRouter.get("/view/:idCliente",viewElectrodomesticos); /**Vista  */

electrodometicoRouter.get("/view/agregar_electrodomestico/:idCliente",viewAgregarElectrodomestico); /**Vista Agregar empleados */
electrodometicoRouter.get("/view/modificar_electrodomestico/:idCliente/:idElectrodomestico",viewFormEditElectrodomestico); /**Vista Agregar empleados */

// empleadoRouter.get("/view/form",viewFormExample);
// empleadoRouter.get("/view/form-edit/:idStatus",viewFormEditExample); /**Para la edicion, es get por que entregamos documentos html */

export default electrodometicoRouter;