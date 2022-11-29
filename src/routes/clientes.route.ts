import {Router} from "express";
import {createCliente,updateCliente,deleteCliente, viewClientes, viewAgregarCliente, viewFormEditCliente, viewClienteRepetido} from "../controllers/clientes.controller"
const clientesRouter: Router = Router();
clientesRouter.get("/view",viewClientes);
clientesRouter.post("/create",createCliente);
clientesRouter.post("/update/:idCliente",updateCliente); 
clientesRouter.get("/delete/:idCliente",deleteCliente) 

clientesRouter.get("/view/agregar_cliente",viewAgregarCliente); 
clientesRouter.get("/view/actualizar_cliente/:idCliente",viewFormEditCliente); 
clientesRouter.get("/view/cliente_repetido",viewClienteRepetido); 
export default clientesRouter;