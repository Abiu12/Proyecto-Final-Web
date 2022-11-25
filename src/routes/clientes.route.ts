import {Router} from "express";
import {indexViewCliente,readCliente, createCliente,updateCliente,deleteCliente} from "../controllers/clientes.controller"
const clienteRouter: Router = Router();

clienteRouter.get("/view",indexViewCliente);
clienteRouter.get("/",readCliente);
clienteRouter.post("/",createCliente);
clienteRouter.post("/update/:idCliente",updateCliente); 
clienteRouter.delete("/:idCliente",deleteCliente);
export default clienteRouter;