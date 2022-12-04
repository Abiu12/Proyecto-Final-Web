import {Router} from "express";
import {getData, viewReporte} from "../controllers/reporte.controller"
const ordenRouter: Router = Router();
ordenRouter.get("/view",viewReporte);
ordenRouter.get("/getData",getData);

export default ordenRouter;