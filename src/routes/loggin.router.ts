import {Router} from "express";
import {renderLoggin} from "../controllers/loggin.controller";
const logginRouter: Router = Router();

logginRouter.get("/singin",renderLoggin);

export default logginRouter;
