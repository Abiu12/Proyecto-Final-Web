import {Router} from "express";
import {createCliente,updateCliente,deleteCliente, viewClientes, viewAgregarCliente, viewFormEditCliente} from "../controllers/clientes.controller"
const clientesRouter: Router = Router();

clientesRouter.post("/create",createCliente); /**Crear un cliente */
clientesRouter.post("/update/:idCliente",updateCliente); /**Update un cliente */
clientesRouter.get("/delete/:idCliente",deleteCliente) /**Delete un cliente */


clientesRouter.get("/view",viewClientes); /**Vista cliente */

clientesRouter.get("/view/agregar_cliente",viewAgregarCliente); /**Vista Agregar cliente */
clientesRouter.get("/view/modificar_cliente/:idCliente",viewFormEditCliente); /**Vista Agregar cliente */

// empleadoRouter.get("/view/form",viewFormExample);
// empleadoRouter.get("/view/form-edit/:idStatus",viewFormEditExample); /**Para la edicion, es get por que entregamos documentos html */

export default clientesRouter;