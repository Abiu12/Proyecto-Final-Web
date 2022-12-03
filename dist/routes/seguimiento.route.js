"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const segumiento_controller_1 = require("../controllers/segumiento.controller");
const consultaElectrodomestico = (0, express_1.Router)();
consultaElectrodomestico.get("/view", segumiento_controller_1.viewIndexSeguimiento);
consultaElectrodomestico.post("/miElectrodomestico", segumiento_controller_1.readElectrodomestico);
exports.default = consultaElectrodomestico;
