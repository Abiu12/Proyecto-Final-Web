import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ElectrodomesticosType from "../types/electrodomesticos.type";
import { OrdenTrabajoModel } from "./orden.trabajo.model";


export class ElectrodomesticosModel extends Model<ElectrodomesticosType> {}

ElectrodomesticosModel.init(
  {
    idElectrodomestico: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true 
    },
    
    codigo_seguimiento: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    fecha_entrada: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    
    fecha_salida: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    estado:{
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    garantia:{
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    observaciones:{
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    idCliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "electrodomesticos",
  }
);

ElectrodomesticosModel.hasOne(OrdenTrabajoModel,
  {
    foreignKey:"idElectrodomestico",
    sourceKey:"idElectrodomestico",
  }
);
