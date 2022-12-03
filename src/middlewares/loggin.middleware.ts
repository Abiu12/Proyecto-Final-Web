import { Request, Response, NextFunction } from "express";

/**
 * Funcion que valida los roles de un usario para una determinada ruta
 * @param rolUser arreglo de roles permitidos. Si se envia ["*"] permitira el acceso a todos los roles
 */

export function createLogginMiddleware(rolUser:string[]){

    return (req: Request, res: Response, next: NextFunction) => {
    
        if (!req.session.user) {
            return res.redirect("/api/v1/loggin/signin");
        }
        //
        if( !(rolUser.includes(req.session.user.rol as string) || rolUser.includes("*"))){
            return res.redirect("/unauthorized");
        }

        next();
    }

}