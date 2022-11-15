import {Router} from "express";
import {createEmpleado,updateEmpleado,deleteEmpleado, viewEmpleados, viewAgregarEmpleado, viewFormEditEmpleado} from "../controllers/empleados.controller"
const empleadoRouter: Router = Router();

empleadoRouter.post("/create/empleado",createEmpleado); /**Crear un empleado */
empleadoRouter.post("/update/:idStatus",updateEmpleado); /**Update un empleado */
empleadoRouter.get("/delete/:idEmpleado",deleteEmpleado) /**Delete un empleado */


empleadoRouter.get("/view/empleados",viewEmpleados); /**Vista empleados */

empleadoRouter.get("/view/agregar_empleado",viewAgregarEmpleado); /**Vista Agregar empleados */
empleadoRouter.get("/view/modificar_empleado/:idEmpleado",viewFormEditEmpleado); /**Vista Agregar empleados */

// empleadoRouter.get("/view/form",viewFormExample);
// empleadoRouter.get("/view/form-edit/:idStatus",viewFormEditExample); /**Para la edicion, es get por que entregamos documentos html */

export default empleadoRouter;