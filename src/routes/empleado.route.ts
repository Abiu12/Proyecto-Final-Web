import {Router} from "express";
import {createEmpleado,updateEmpleado,deleteEmpleado, viewEmpleados, viewAgregarEmpleado, viewFormEditEmpleado} from "../controllers/empleado.controller"
const empleadoRouter: Router = Router();
empleadoRouter.post("/create",createEmpleado);
empleadoRouter.post("/update/:idEmpleado",updateEmpleado);
empleadoRouter.get("/delete/:idEmpleado",deleteEmpleado);
empleadoRouter.get("/view",viewEmpleados);
empleadoRouter.get("/view/agregar_empleado",viewAgregarEmpleado);
empleadoRouter.get("/view/modificar_empleado/:idEmpleado",viewFormEditEmpleado);
export default empleadoRouter;