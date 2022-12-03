"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewFormEditOrdenTrabajo = exports.viewAgregarOrdenTrabajo = exports.viewOrdenTrabajo = exports.updateOrdenTrabajo = exports.deleteOrdenTrabajo = exports.createOrdenTrabajo = void 0;
const electrodomesticos_model_1 = require("../models/electrodomesticos.model");
const clientes_model_1 = require("../models/clientes.model");
const orden_trabajo_model_1 = require("../models/orden.trabajo.model");
async function createOrdenTrabajo(req, res) {
    const { idCliente, idElectrodomestico } = req.params;
    const { trabajo, precio } = req.body;
    await orden_trabajo_model_1.OrdenTrabajoModel.create({ trabajo, precio, idCliente: Number(idCliente), idElectrodomestico: Number(idElectrodomestico) });
    res.redirect("/orden/view/" + idCliente + "/" + idElectrodomestico);
}
exports.createOrdenTrabajo = createOrdenTrabajo;
async function deleteOrdenTrabajo(req, res) {
    const { idCliente, idElectrodomestico, idOrden } = req.params;
    const entity = await orden_trabajo_model_1.OrdenTrabajoModel.findOne({
        where: {
            idCliente,
            idElectrodomestico,
            idOrden
        }
    });
    entity === null || entity === void 0 ? void 0 : entity.destroy();
    res.redirect("/orden/view/" + idCliente + "/" + idElectrodomestico);
}
exports.deleteOrdenTrabajo = deleteOrdenTrabajo;
async function updateOrdenTrabajo(req, res) {
    const { idCliente, idElectrodomestico, idOrden } = req.params;
    const { trabajo, precio } = req.body;
    const entity = await orden_trabajo_model_1.OrdenTrabajoModel.findOne({ where: {
            idCliente,
            idElectrodomestico
        } });
    entity === null || entity === void 0 ? void 0 : entity.update({ trabajo, precio });
    res.redirect("/orden/view/" + idCliente + "/" + idElectrodomestico);
}
exports.updateOrdenTrabajo = updateOrdenTrabajo;
async function viewOrdenTrabajo(req, res) {
    const { idCliente, idElectrodomestico } = req.params;
    const recordsOrden = await orden_trabajo_model_1.OrdenTrabajoModel.findOne({ where: { idCliente, idElectrodomestico }, raw: true });
    const recordsCliente = await clientes_model_1.ClientesModel.findOne({ where: { idCliente }, raw: true });
    const recordsElectrodomestico = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: { idCliente, idElectrodomestico }, raw: true });
    const data = { httpCode: 0, message: "", recordsOrden, recordsCliente, recordsElectrodomestico };
    res.render("orden-trabajo/orden_trabajo", data);
}
exports.viewOrdenTrabajo = viewOrdenTrabajo;
async function viewAgregarOrdenTrabajo(req, res) {
    const { idCliente, idElectrodomestico } = req.params;
    const recordsCliente = await clientes_model_1.ClientesModel.findOne({ where: { idCliente }, raw: true });
    const recordsElectrodomestico = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: { idCliente, idElectrodomestico }, raw: true });
    const data = { httpCode: 0, message: "", recordsCliente, recordsElectrodomestico };
    res.render("orden-trabajo/agregar_orden_trabajo", data);
}
exports.viewAgregarOrdenTrabajo = viewAgregarOrdenTrabajo;
async function viewFormEditOrdenTrabajo(req, res) {
    const { idElectrodomestico, idCliente, idOrden } = req.params;
    const entity = await orden_trabajo_model_1.OrdenTrabajoModel.findOne({ where: { idCliente, idElectrodomestico, idOrden }, raw: true });
    const recordsCliente = await clientes_model_1.ClientesModel.findOne({ where: { idCliente }, raw: true });
    const recordsElectrodomestico = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: { idCliente, idElectrodomestico }, raw: true });
    const recordsOrden = entity || {};
    const data = { recordsCliente, recordsOrden, recordsElectrodomestico };
    res.render("orden-trabajo/actualizar_orden_trabajo", data);
}
exports.viewFormEditOrdenTrabajo = viewFormEditOrdenTrabajo;
