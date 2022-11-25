import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ProductoType from "../types/producto.type";


export class ProductoModel extends Model<ProductoType> {}

ProductoModel.init(
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
      allowNull: false,
    },
    segundoApellido: {
      type: DataTypes.STRING(25),
      allowNull: false,
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
      allowNull: false,
    },
    noCasaExt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    colonia: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    municipio: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "producto",
  }
);
