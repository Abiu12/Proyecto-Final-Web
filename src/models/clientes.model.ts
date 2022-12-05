import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ClientesType from "../types/clientes.type";
import { ElectrodomesticosModel } from "./electrodomesticos.model";


export class ClientesModel extends Model<ClientesType> {}

ClientesModel.init(
  {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true 
    },
    nombre: {
      type: DataTypes.STRING(25),
      allowNull: false,
      
    },
    primerApellido: {
      type: DataTypes.STRING(25),
      
      
    },
    segundoApellido: {
      type: DataTypes.STRING(25),
      
      
    },
    telefono: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    calle: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    noCasaInt: {
      type: DataTypes.STRING(10),
      
    },
    noCasaExt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    colonia: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "clientes",
  }
);
ClientesModel.hasMany(ElectrodomesticosModel,
  {
    foreignKey:"idCliente",
    sourceKey:"idCliente",
  }
);
