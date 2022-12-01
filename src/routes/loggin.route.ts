import { Router } from "express";
import { logginUsuario,logginView } from "../controllers/loggin.controller";


const logginRouter: Router = Router();

logginRouter.get("/signin",logginView);
logginRouter.post("/", logginUsuario);

export default logginRouter;