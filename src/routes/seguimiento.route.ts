import {Router} from "express";
import {readElectrodomestico, viewIndexSeguimiento} from "../controllers/segumiento.controller"
const consultaElectrodomestico: Router = Router();
consultaElectrodomestico.get("/view",viewIndexSeguimiento);
consultaElectrodomestico.post("/miElectrodomestico",readElectrodomestico); 
export default consultaElectrodomestico;