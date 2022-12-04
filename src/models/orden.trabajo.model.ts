import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import OrdenTrabajoType from "../types/orden.trabajo.type";


export class OrdenTrabajoModel extends Model<OrdenTrabajoType> {}

OrdenTrabajoModel.init(
  {
    idOrden: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true,
      unique: true
      
    },
    trabajo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    idElectrodomestico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true
      
    }
  },
  {
    sequelize,
    tableName: "orden_trabajo",
  }
);


