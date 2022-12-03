"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogginMiddleware = void 0;
/**
 * Funcion que valida los roles de un usario para una determinada ruta
 * @param rolUser arreglo de roles permitidos. Si se envia ["*"] permitira el acceso a todos los roles
 */
function createLogginMiddleware(rolUser) {
    return (req, res, next) => {
        if (!req.session.user) {
            return res.redirect("/api/v1/loggin/signin");
        }
        //
        if (!(rolUser.includes(req.session.user.rol) || rolUser.includes("*"))) {
            return res.redirect("/unauthorized");
        }
        next();
    };
}
exports.createLogginMiddleware = createLogginMiddleware;
