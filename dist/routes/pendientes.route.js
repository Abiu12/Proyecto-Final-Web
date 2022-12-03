"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pendientes_controller_1 = require("../controllers/pendientes.controller");
const pendientesRouter = (0, express_1.Router)();
pendientesRouter.get("/view", pendientes_controller_1.viewPendientes);
pendientesRouter.post("/status/:idCliente/:idElectrodomestico/:statusElectrodomestico", pendientes_controller_1.updateEstadoElectrodomestico);
exports.default = pendientesRouter;
