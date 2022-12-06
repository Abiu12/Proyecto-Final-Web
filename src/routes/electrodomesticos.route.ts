import {Router} from "express";
import {createElectrodomestico,updateElectrodomestico,deleteElectrodomestico, viewElectrodomesticos, viewAgregarElectrodomestico, viewFormEditElectrodomestico, updateElectrodomesticoEstado} from "../controllers/electrodomesticos.controller"
const electrodometicoRouter: Router = Router();
electrodometicoRouter.post("/create/:idCliente",createElectrodomestico); 
electrodometicoRouter.post("/update/:idCliente/:idElectrodomestico",updateElectrodomestico); 
electrodometicoRouter.get("/update/:idCliente/:idElectrodomestico/:estado",updateElectrodomesticoEstado); 
electrodometicoRouter.get("/delete/:idCliente/:idElectrodomestico",deleteElectrodomestico)
electrodometicoRouter.get("/view/:idCliente",viewElectrodomesticos);

electrodometicoRouter.get("/view/agregar_electrodomestico/:idCliente",viewAgregarElectrodomestico);
electrodometicoRouter.get("/view/modificar_electrodomestico/:idCliente/:idElectrodomestico",viewFormEditElectrodomestico); 
export default electrodometicoRouter;