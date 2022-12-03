"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewFormEditUsuario = exports.viewAgregarUsuario = exports.viewUsuarios = exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = void 0;
const empleado_model_1 = require("../models/empleado.model");
const usuario_model_1 = require("../models/usuario.model");
const bycript_library_1 = require("../libraries/bycript.library");
async function createUsuario(req, res) {
    const { idEmpleado } = req.params;
    const { correo, contrasenia, estatus, rol, token } = req.body;
    const contraseniaHash = (0, bycript_library_1.hashPassword)(contrasenia);
    await usuario_model_1.UsuarioModel.create({ idEmpleado: Number(idEmpleado), correo, contrasenia: contraseniaHash, estatus, rol, token_restauracion: token });
    res.redirect("/usuarios/view/" + idEmpleado);
}
exports.createUsuario = createUsuario;
async function updateUsuario(req, res) {
    const { idEmpleado, idUsuario } = req.params;
    const { correo, contrasenia, estatus, rol, token } = req.body;
    const contraseniaHash = (0, bycript_library_1.hashPassword)(contrasenia);
    const entity = await usuario_model_1.UsuarioModel.findOne({ where: {
            idEmpleado,
            idUsuario
        } });
    entity === null || entity === void 0 ? void 0 : entity.update({ idEmpleado: Number(idEmpleado), correo, contrasenia: contraseniaHash, estatus, rol, token_restauracion: token }); /** ? es por si viene un null */
    res.redirect("/usuarios/view/" + idEmpleado);
}
exports.updateUsuario = updateUsuario;
async function deleteUsuario(req, res) {
    const { idEmpleado, idUsuario } = req.params;
    const entity = await usuario_model_1.UsuarioModel.findOne({ where: {
            idEmpleado,
            idUsuario
        } });
    entity === null || entity === void 0 ? void 0 : entity.destroy();
    res.redirect("/usuarios/view/" + idEmpleado);
}
exports.deleteUsuario = deleteUsuario;
async function viewUsuarios(req, res) {
    const { idEmpleado } = req.params;
    const recordsUsuario = await usuario_model_1.UsuarioModel.findAll({ where: { idEmpleado: idEmpleado }, raw: true });
    const recordsEmpleado = await empleado_model_1.EmpleadoModel.findOne({ where: { idEmpleado: idEmpleado }, raw: true });
    const data = { httpCode: 0, message: "", recordsUsuario, recordsEmpleado };
    res.render("usuarios/usuarios", data);
}
exports.viewUsuarios = viewUsuarios;
async function viewAgregarUsuario(req, res) {
    const { idEmpleado } = req.params;
    const recordsEmpleado = await empleado_model_1.EmpleadoModel.findOne({ where: { idEmpleado: idEmpleado }, raw: true });
    const data = { httpCode: 0, message: "", recordsEmpleado };
    res.render("usuarios/agregar_usuario", data);
}
exports.viewAgregarUsuario = viewAgregarUsuario;
async function viewFormEditUsuario(req, res) {
    const { idEmpleado, idUsuario } = req.params;
    const entity = await usuario_model_1.UsuarioModel.findOne({ where: {
            idEmpleado,
            idUsuario
        }, raw: true });
    const data = entity || {};
    res.render("usuarios/actualizar_usuario", data);
}
exports.viewFormEditUsuario = viewFormEditUsuario;
