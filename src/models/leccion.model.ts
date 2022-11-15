import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import LeccionType from "../types/leccion.type";
import { ActividadModel } from "./actividad.model";
import { InfanteModel } from "./infante.model";
import { NivelModel } from "./nivel.model";


export class LeccionModel extends Model<LeccionType> {}

LeccionModel.init(
  {
    idLeccion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    idNivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "leccion",
  }
);

LeccionModel.hasMany(ActividadModel,
  {
    foreignKey:"idLeccion",
    sourceKey:"idLeccion",
  }
);

