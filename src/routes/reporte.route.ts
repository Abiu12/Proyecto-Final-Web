import {Router} from "express";
import {viewReporte} from "../controllers/reporte.controller"
const ordenRouter: Router = Router();
ordenRouter.get("/view",viewReporte);

export default ordenRouter;