import { Request, Response } from "express";

export function renderLoggin(req:Request,res:Response){
    const data = {valorDeEjemplo:"Vengo desde el controlador",
    numeroEjemplo:101};
    res.render("login",data);
}