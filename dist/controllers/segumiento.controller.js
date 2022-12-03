"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readElectrodomestico = exports.viewIndexSeguimiento = void 0;
const clientes_model_1 = require("../models/clientes.model");
const electrodomesticos_model_1 = require("../models/electrodomesticos.model");
const orden_trabajo_model_1 = require("../models/orden.trabajo.model");
async function viewIndexSeguimiento(req, res) {
    res.render("consulta-electrodomestico/consulta-electrodomestico");
}
exports.viewIndexSeguimiento = viewIndexSeguimiento;
async function readElectrodomestico(req, res) {
    const { codigo_seguimiento } = req.body;
    const entityElectrodomestico = await electrodomesticos_model_1.ElectrodomesticosModel.findOne({ where: {
            codigo_seguimiento
        } });
    const electrodomestico = JSON.parse(JSON.stringify(entityElectrodomestico));
    console.log(electrodomestico);
    console.log(codigo_seguimiento);
    if (entityElectrodomestico != null) {
        const entityCliente = await clientes_model_1.ClientesModel.findOne({ where: {
                idCliente: electrodomestico.idCliente
            } });
        const cliente = JSON.parse(JSON.stringify(entityCliente));
        const entityOrden = await orden_trabajo_model_1.OrdenTrabajoModel.findOne({ where: {
                idCliente: electrodomestico.idCliente,
                idElectrodomestico: electrodomestico.idElectrodomestico
            } });
        const orden = JSON.parse(JSON.stringify(entityOrden));
        const data = { electrodomestico, cliente, orden };
        console.log("Cliente");
        console.log(cliente);
        console.log("orden");
        console.log(orden);
        res.render("consulta-electrodomestico/status-electrodomestico", data);
    }
    else {
        res.render("consulta-electrodomestico/electrodomestico-no-encontrado");
    }
    // res.redirect("/pendientes/view"); 
}
exports.readElectrodomestico = readElectrodomestico;
