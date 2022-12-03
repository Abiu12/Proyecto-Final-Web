"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewClienteRepetido = exports.viewFormEditCliente = exports.viewAgregarCliente = exports.deleteCliente = exports.updateCliente = exports.createCliente = exports.viewClientes = void 0;
const clientes_model_1 = require("../models/clientes.model");
async function viewClientes(req, res) {
    const records = await clientes_model_1.ClientesModel.findAll({ raw: true });
    const data = { httpCode: 0, message: "", records };
    res.render("clientes/clientes", data);
}
exports.viewClientes = viewClientes;
async function createCliente(req, res) {
    const { nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body;
    const cliente = await clientes_model_1.ClientesModel.findOne({
        where: {
            nombre,
            primerApellido,
            segundoApellido
        }, raw: true
    });
    if (cliente == null) {
        await clientes_model_1.ClientesModel.create({ nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia });
        const records = await clientes_model_1.ClientesModel.findAll({ raw: true });
        res.redirect("/clientes/view");
    }
    else {
        res.redirect("/clientes/view/cliente_repetido");
    }
}
exports.createCliente = createCliente;
async function updateCliente(req, res) {
    const idCliente = Number(req.params.idCliente);
    const { nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia } = req.body; /**recuperamos del body del form */
    const entity = await clientes_model_1.ClientesModel.findByPk(idCliente);
    entity === null || entity === void 0 ? void 0 : entity.update({ nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia }); /** ? es por si viene un null */
    res.redirect("/clientes/view");
}
exports.updateCliente = updateCliente;
async function deleteCliente(req, res) {
    const { idCliente } = req.params;
    const entity = await clientes_model_1.ClientesModel.findByPk(idCliente);
    entity === null || entity === void 0 ? void 0 : entity.destroy();
    res.redirect("/clientes/view");
}
exports.deleteCliente = deleteCliente;
async function viewAgregarCliente(req, res) {
    const records = await clientes_model_1.ClientesModel.findAll({ raw: true });
    const data = { httpCode: 0, message: "", records, status: 1 };
    res.render("clientes/agregar_cliente", data);
}
exports.viewAgregarCliente = viewAgregarCliente;
async function viewFormEditCliente(req, res) {
    const { idCliente } = req.params;
    const entity = await clientes_model_1.ClientesModel.findByPk(idCliente, { raw: true });
    const data = entity || {};
    res.render("clientes/actualizar_cliente", data);
}
exports.viewFormEditCliente = viewFormEditCliente;
async function viewClienteRepetido(req, res) {
    res.render("clientes/cliente_repetido");
}
exports.viewClienteRepetido = viewClienteRepetido;
