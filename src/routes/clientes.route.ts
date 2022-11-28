import {Router} from "express";
import {createCliente,updateCliente,deleteCliente, viewClientes, viewAgregarCliente, viewFormEditCliente} from "../controllers/clientes.controller"
const clientesRouter: Router = Router();
clientesRouter.get("/view",viewClientes);
clientesRouter.post("/create",createCliente);
clientesRouter.post("/update/:idCliente",updateCliente); 
clientesRouter.get("/delete/:idCliente",deleteCliente) 

clientesRouter.get("/view/agregar_cliente",viewAgregarCliente); 
clientesRouter.get("/view/modificar_cliente/:idCliente",viewFormEditCliente); 
export default clientesRouter;