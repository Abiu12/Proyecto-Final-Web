import { Request, Response } from "express";
import { ExampleModel } from "../models/example.model";

export async function getExample(req: Request, res: Response) {
  const records = await ExampleModel.findAll({ raw: true, attributes: ["idStatus", "status", "description"] });
  res.status(200).json(records);
}

export async function getExampleById(req: Request, res: Response) {
    const {idStatus} = req.params;
    const records = await ExampleModel.findAll({ raw: true ,where:{idStatus}});
    res.status(200).json(records);
  }
