import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import PreguntaType from "../types/pregunta.type";
import { RespuestaModel } from "./respuesta.model";
import { TipoPreguntaModel } from "./tipoPregunta.model";


export class PreguntaModel extends Model<PreguntaType> {}

PreguntaModel.init(
  {
    idPregunta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    urlArchivo: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    interrogante: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
    ,
    idActividad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "pregunta",
  }
);

PreguntaModel.hasMany(TipoPreguntaModel,
  {
    foreignKey:"idPregunta",
    sourceKey:"idPregunta",
  }
);
PreguntaModel.hasMany(RespuestaModel,
  {
    foreignKey:"idPregunta",
    sourceKey:"idPregunta",
  }
);

