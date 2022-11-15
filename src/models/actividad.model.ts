import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import ActividadType from "../types/Actividad.type";
import { PreguntaModel } from "./pregunta.model";


export class ActividadModel extends Model<ActividadType> {}

ActividadModel.init(
  {
    idActividad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
    ,
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "actividad",
  }
);

ActividadModel.hasMany(PreguntaModel,
  {
    foreignKey:"idActividad",
    sourceKey:"idActividad",
  }
);

