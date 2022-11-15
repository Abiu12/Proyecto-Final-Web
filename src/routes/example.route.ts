import {Router} from "express";
import {createExample,updateExample,viewFormExample,viewFormEditExample, deleteExample, getData} from "../controllers/example.controller"
const exampleRouter: Router = Router();

exampleRouter.post("/create",createExample);
// exampleRouter.post("/edit/:idStatus",updateExample) /**Aqui hacemos el update, esta url la tiene en action el form-edit-component Mio*/
exampleRouter.post("/update/:idStatus",updateExample);
exampleRouter.get("/delete/:idStatus",deleteExample)
/**Obtenemos datos planos, chrome muestra string */
exampleRouter.get("/listar",getData);


exampleRouter.get("/view/form",viewFormExample);
exampleRouter.get("/view/form-edit/:idStatus",viewFormEditExample); /**Para la edicion, es get por que entregamos documentos html */



/**profe actualzar*/
// exampleRouter.put("/update/:idStatus",updateExample); /**No jala el put */
export default exampleRouter;