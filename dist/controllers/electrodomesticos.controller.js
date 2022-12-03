"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewFormEditElectrodomestico = exports.viewAgregarElectrodomestico = exports.viewElectrodomesticos = exports.updateElectrodomestico = exports.deleteElectrodomestico = exports.createElectrodomestico = void 0;
const electrodomesticos_model_1 = require("../models/electrodomesticos.model");
const clientes_model_1 = require("../models/clientes.model");
async function createElectrodomestico(req, res) {
    const { idCliente } = req.params;
    var date = new Date();
    var fecha = String(date.getDate()) + String(date.getMonth() + 1) + String(date.getFullYear()).substring(2, 4);
    var hora = String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());
    const codigo_seguimiento = "E" + idCliente + fecha + hora;
    const fecha_entrada = String(date.getFullYear()) + "-" + String(date.getMonth() + 1) + "-" + String(date.getDate());
    const { nombre, modelo, marca, fecha_salida, estado, garantia, observaciones } = req.body;
    await electrodomesticos_model_1.ElectrodomesticosModel.create({ codigo_seguimiento, nombre, modelo, marca, fecha_entrada, fecha_salida, estado, garantia, observaciones, idCliente: Number(idCliente) });
    res.redirect("/electrodomesticos/view/" + idCliente);
}
exports.createElectrodomestico = createElectrodomestico;
async function deleteElectrodomestico(req, res) {
    const { idCliente, idElectrodomestico } = req.params;
    const entity = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({
        where: {
            idCliente,
            idElectrodomestico
        }
    });
    entity === null || entity === void 0 ? void 0 : entity.destroy();
    res.redirect("/electrodomesticos/view/" + idCliente);
}
exports.deleteElectrodomestico = deleteElectrodomestico;
async function updateElectrodomestico(req, res) {
    const { idCliente, idElectrodomestico } = req.params;
    const { codigo_seguimiento, nombre, modelo, marca, fecha_salida, estado, garantia, observaciones } = req.body;
    const entity = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: {
            idCliente,
            idElectrodomestico
        } });
    entity === null || entity === void 0 ? void 0 : entity.update({ codigo_seguimiento, nombre, modelo, marca, fecha_salida, estado, garantia, observaciones });
    res.redirect("/electrodomesticos/view/" + idCliente);
}
exports.updateElectrodomestico = updateElectrodomestico;
async function viewElectrodomesticos(req, res) {
    const { idCliente } = req.params;
    const records = await electrodomesticos_model_1.ElectrodomesticosModel.findAll({ where: { idCliente }, raw: true });
    const recordsCliente = await clientes_model_1.ClientesModel.findAll({ where: { idCliente }, raw: true });
    const data = { httpCode: 0, message: "", records, recordsCliente };
    res.render("electrodomesticos/electrodomesticos", data);
}
exports.viewElectrodomesticos = viewElectrodomesticos;
async function viewAgregarElectrodomestico(req, res) {
    const { idCliente } = req.params;
    const recordsCliente = await clientes_model_1.ClientesModel.findAll({ where: { idCliente }, raw: true });
    const data = { httpCode: 0, message: "", recordsCliente };
    res.render("electrodomesticos/agregar_electrodomestico", data);
}
exports.viewAgregarElectrodomestico = viewAgregarElectrodomestico;
async function viewFormEditElectrodomestico(req, res) {
    const { idElectrodomestico, idCliente } = req.params;
    const entity = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: { idCliente, idElectrodomestico }, raw: true }); /**Buscamos por el id la entidad */
    const recordsCliente = await clientes_model_1.ClientesModel.findOne({ where: { idCliente }, raw: true });
    const dataElectrodomestico = entity || {};
    const data = { recordsCliente, dataElectrodomestico };
    res.render("electrodomesticos/actualizar_electrodomestico", data);
}
exports.viewFormEditElectrodomestico = viewFormEditElectrodomestico;
