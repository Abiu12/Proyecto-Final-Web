"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEstadoElectrodomestico = exports.viewPendientes = void 0;
const clientes_model_1 = require("../models/clientes.model");
const electrodomesticos_model_1 = require("../models/electrodomesticos.model");
const orden_trabajo_model_1 = require("../models/orden.trabajo.model");
async function viewPendientes(req, res) {
    const { Op } = require("sequelize");
    const recordsElectrodomestico = await electrodomesticos_model_1.ElectrodomesticosModel.findAll({
        where: {
            [Op.or]: [
                { estado: "En revisión" },
                { estado: "En reparación" }
            ]
        }
    });
    var electrodomestico = JSON.parse(JSON.stringify(recordsElectrodomestico));
    console.log("Electrodomesticos");
    console.log(electrodomestico);
    const recordsCliente = [];
    const recordOrdenTrabajo = [];
    for (let index = 0; index < electrodomestico.length; index++) {
        recordsCliente.push(await clientes_model_1.ClientesModel.findOne({ where: { idCliente: electrodomestico[index].idCliente }, raw: true }));
        recordOrdenTrabajo.push(await orden_trabajo_model_1.OrdenTrabajoModel.findOne({ where: { idCliente: electrodomestico[index].idCliente, idElectrodomestico: electrodomestico[index].idElectrodomestico }, raw: true }));
    }
    const data = { recordsElectrodomestico, recordsCliente, recordOrdenTrabajo };
    res.render("pendientes/pendientes", data);
}
exports.viewPendientes = viewPendientes;
async function updateEstadoElectrodomestico(req, res) {
    const { idCliente, idElectrodomestico, statusElectrodomestico } = req.params;
    const entity = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: {
            idCliente,
            idElectrodomestico
        } });
    entity === null || entity === void 0 ? void 0 : entity.update({ estado: statusElectrodomestico });
    res.redirect("/pendientes/view");
}
exports.updateEstadoElectrodomestico = updateEstadoElectrodomestico;
