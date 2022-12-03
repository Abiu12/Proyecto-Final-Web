"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const electrodomesticos_controller_1 = require("../controllers/electrodomesticos.controller");
const electrodometicoRouter = (0, express_1.Router)();
electrodometicoRouter.post("/create/:idCliente", electrodomesticos_controller_1.createElectrodomestico);
electrodometicoRouter.post("/update/:idCliente/:idElectrodomestico", electrodomesticos_controller_1.updateElectrodomestico);
electrodometicoRouter.get("/delete/:idCliente/:idElectrodomestico", electrodomesticos_controller_1.deleteElectrodomestico);
electrodometicoRouter.get("/view/:idCliente", electrodomesticos_controller_1.viewElectrodomesticos);
electrodometicoRouter.get("/view/agregar_electrodomestico/:idCliente", electrodomesticos_controller_1.viewAgregarElectrodomestico);
electrodometicoRouter.get("/view/modificar_electrodomestico/:idCliente/:idElectrodomestico", electrodomesticos_controller_1.viewFormEditElectrodomestico);
exports.default = electrodometicoRouter;
