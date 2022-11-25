import {Router} from "express";
import { indexViewPoducto,createProducto,readProducto,updateProducto,deleteProducto, readProductoById } from "../controllers/producto.controller";
import storageMulter from "../middlewares/multer.middleware";

const productoRouter: Router = Router();

productoRouter.get("/view", indexViewPoducto);
productoRouter.get("/", readProducto);
productoRouter.get("/:idCliente", readProductoById);
productoRouter.post("/",storageMulter.single("imagen"), createProducto);
productoRouter.put("/update/:idCliente",storageMulter.single("imagen"), updateProducto);
productoRouter.delete("/:idProducto",deleteProducto);

export default productoRouter;

