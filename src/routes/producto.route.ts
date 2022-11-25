import {Router} from "express";
import { indexViewPoducto,createProducto,readProducto,updateProducto,deleteProducto } from "../controllers/producto.controller";
import storageMulter from "../middlewares/multer.middleware";

const productoRouter: Router = Router();

productoRouter.get("/view", indexViewPoducto);
productoRouter.get("/", readProducto);
productoRouter.post("/",storageMulter.single("imagen"), createProducto);
productoRouter.post("/update/:idCliente",storageMulter.single("imagen"), updateProducto);
productoRouter.delete("/:idProducto",deleteProducto);

export default productoRouter;

