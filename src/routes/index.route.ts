import {Router} from "express";
import { indexResponse, unauthorizedResponse } from "../controllers/index.controller";
import { createLogginMiddleware } from "../middlewares/loggin.middleware";

const protegerRutaFuncion = createLogginMiddleware(["*"]);
const indexRouter: Router = Router();

indexRouter.get("/",protegerRutaFuncion,indexResponse);
indexRouter.get("/unauthorized",unauthorizedResponse);

export default indexRouter;
