import {Router} from "express";
import {getData, viewReporte, viewReporteFecha} from "../controllers/reporte.controller"
const ordenRouter: Router = Router();
ordenRouter.get("/view",viewReporte);
ordenRouter.get("/getData",getData);
ordenRouter.post("/view/fecha",viewReporteFecha);

export default ordenRouter;