"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cifrarContraseniaUsuarioMiddleware = exports.createContraseniaUsuarioMiddleware = void 0;
const bycript_library_1 = require("../libraries/bycript.library");
async function createContraseniaUsuarioMiddleware(req, res, next) {
    const { body } = req;
    const contraseniaUnhash = (0, bycript_library_1.generatePassword)();
    body["contrasenia"] = contraseniaUnhash;
    body["contraseniaUnhash"] = contraseniaUnhash;
    next();
}
exports.createContraseniaUsuarioMiddleware = createContraseniaUsuarioMiddleware;
async function cifrarContraseniaUsuarioMiddleware(req, res, next) {
    const { body } = req;
    body["contrasenia"] = (0, bycript_library_1.hashPassword)(body["contrasenia"]);
    next();
}
exports.cifrarContraseniaUsuarioMiddleware = cifrarContraseniaUsuarioMiddleware;
