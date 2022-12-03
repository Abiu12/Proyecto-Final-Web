"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loggin_controller_1 = require("../controllers/loggin.controller");
const logginRouter = (0, express_1.Router)();
logginRouter.get("/signin", loggin_controller_1.logginView);
logginRouter.get("/unloggin", loggin_controller_1.loggout);
logginRouter.post("/", loggin_controller_1.logginUsuario);
exports.default = logginRouter;
