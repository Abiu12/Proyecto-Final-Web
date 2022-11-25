import { Request, Response } from "express";
import { ProductoModel } from "../models/producto.model";

export async function indexViewPoducto(req: Request, res: Response) {
  return res.render("producto/producto-view");
}

export async function readProducto(req: Request, res: Response) {
  const {query:where} = req
  const productos = await ProductoModel.findAll({
    attributes:["idCliente","nombre","primerApellido","segundoApellido","telefono","calle","noCasaInt","noCasaExt","colonia","municipio"],
    raw: true
  });
  res.status(200).json(productos);
}
export async function readProductoById(req: Request, res: Response) {
  const {idCliente} = req.params;
  const producto = await ProductoModel.findOne({
    attributes:["idCliente","nombre","primerApellido","segundoApellido","telefono","calle","noCasaInt","noCasaExt","colonia","municipio"],
    raw: true,
    where:{
      idCliente
    }
  }
  );
  res.status(200).json(producto);
}

export async function createProducto(req: Request, res: Response) {
  try {
    const { body, file } = req;
    body["url_imagen"] = file?.path;
    const productResponse = await ProductoModel.create(body, { raw: true });
    res.status(201).json(productResponse);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProducto(req: Request, res: Response) {
  const {idCliente} = req.params;
  const {body} = req;
  const entity = await ProductoModel.findByPk(idCliente);
  await entity?.update(body);
  res.status(201).json(entity?.toJSON());
}

export async function deleteProducto(req: Request, res: Response) {
  const {idProducto} = req.params;
  const entity = await ProductoModel.findByPk(idProducto);
  await entity?.destroy();
  res.status(204).json({ok:""});
}

