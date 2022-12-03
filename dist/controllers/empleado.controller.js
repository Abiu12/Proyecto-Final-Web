"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewEmpleadoRepetido = exports.viewFormEditEmpleado = exports.viewAgregarEmpleado = exports.viewEmpleados = exports.deleteEmpleado = exports.updateEmpleado = exports.createEmpleado = void 0;
const empleado_model_1 = require("../models/empleado.model");
async function createEmpleado(req, res) {
    const { nombre, primerApellido, segundoApellido, genero } = req.body;
    const empleado = await empleado_model_1.EmpleadoModel.findOne({
        where: {
            nombre,
            primerApellido,
            segundoApellido
        }, raw: true
    });
    if (empleado == null) {
        await empleado_model_1.EmpleadoModel.create({ nombre, primerApellido, segundoApellido, genero });
        const records = await empleado_model_1.EmpleadoModel.findAll({ raw: true });
        res.redirect("/empleados/view");
    }
    else {
        res.redirect("/empleados/view/empleado_repetido");
    }
}
exports.createEmpleado = createEmpleado;
async function updateEmpleado(req, res) {
    const { nombre, primerApellido, segundoApellido, genero } = req.body;
    const { idEmpleado } = req.params;
    const entity = await empleado_model_1.EmpleadoModel.findByPk(idEmpleado);
    entity === null || entity === void 0 ? void 0 : entity.update({ nombre, primerApellido, segundoApellido, genero });
    res.redirect("/empleados/view");
}
exports.updateEmpleado = updateEmpleado;
async function deleteEmpleado(req, res) {
    const { idEmpleado } = req.params;
    const entity = await empleado_model_1.EmpleadoModel.findByPk(idEmpleado);
    entity === null || entity === void 0 ? void 0 : entity.destroy();
    res.redirect("/empleados/view");
}
exports.deleteEmpleado = deleteEmpleado;
async function viewEmpleados(req, res) {
    const records = await empleado_model_1.EmpleadoModel.findAll({ raw: true });
    const data = { httpCode: 0, message: "", records };
    res.render("empleados/empleados", data);
}
exports.viewEmpleados = viewEmpleados;
async function viewAgregarEmpleado(req, res) {
    const records = await empleado_model_1.EmpleadoModel.findAll({ raw: true });
    const data = { httpCode: 0, message: "", records };
    res.render("empleados/agregar_empleado", data);
}
exports.viewAgregarEmpleado = viewAgregarEmpleado;
async function viewFormEditEmpleado(req, res) {
    const { idEmpleado } = req.params;
    const entity = await empleado_model_1.EmpleadoModel.findByPk(idEmpleado, { raw: true });
    const data = entity || {};
    res.render("empleados/actualizar_empleado", data);
}
exports.viewFormEditEmpleado = viewFormEditEmpleado;
async function viewEmpleadoRepetido(req, res) {
    res.render("empleados/empleado_repetido");
}
exports.viewEmpleadoRepetido = viewEmpleadoRepetido;
