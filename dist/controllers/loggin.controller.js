"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggout = exports.logginUsuario = exports.logginView = void 0;
const bycript_library_1 = require("../libraries/bycript.library");
const usuario_model_1 = require("../models/usuario.model");
function logginView(req, res) {
    const { error } = req.query;
    res.render("login/login-view", { error });
}
exports.logginView = logginView;
async function logginUsuario(req, res) {
    try {
        const { body } = req;
        const { correo, contrasenia } = body;
        const usuarioResponse = await usuario_model_1.UsuarioModel.findOne({
            attributes: ["idUsuario", "idEmpleado", "correo", "estatus", "rol", "contrasenia"],
            where: { correo }
        });
        if (usuarioResponse !== null) {
            const contraseniaUsuario = usuarioResponse.getDataValue("contrasenia");
            if ((0, bycript_library_1.isValidPassword)(contrasenia, contraseniaUsuario)) {
                const user = usuarioResponse.toJSON();
                //delete user.contrasenia;
                req.session.user = user;
                //return res.status(StatusCodes.OK).json(user);
                return res.redirect("/");
            }
        }
        res.redirect("/api/v1/loggin/signin?error=1");
    }
    catch (error) {
        res.send("error");
    }
}
exports.logginUsuario = logginUsuario;
async function loggout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            console.log("error al cerrar sesion");
        }
        res.redirect("/");
    });
}
exports.loggout = loggout;
