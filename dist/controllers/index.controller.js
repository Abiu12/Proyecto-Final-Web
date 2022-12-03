"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizedResponse = exports.indexResponse = void 0;
function indexResponse(req, res) {
    const data = { title: "Programacion web" };
    return res.render("index-view");
}
exports.indexResponse = indexResponse;
function unauthorizedResponse(req, res) {
    return res.render("comunes/view-error-permisos");
}
exports.unauthorizedResponse = unauthorizedResponse;
