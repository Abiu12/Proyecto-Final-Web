import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import InfanteType from "../types/infante.type";
import { NivelModel } from "./nivel.model";


export class InfanteModel extends Model<InfanteType> {}

InfanteModel.init(
  {
    idInfante: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    apellidoP: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    apellidoM: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nombreUsuario: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    contrasenia: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    idNivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "infante",
  }
);
InfanteModel.hasMany(NivelModel,
  {
    foreignKey:"idInfante",
    sourceKey:"idInfante",
  }
);

