import {Router} from "express";
import {getExample,getExampleById} from "../controllers/example.v2.controller";
const exampleRouter: Router = Router();

exampleRouter.get("/",getExample);
exampleRouter.get("/:idStatus",getExampleById);

export default exampleRouter;