import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import RespuestaType from "../types/respuesta.type";


export class RespuestaModel extends Model<RespuestaType> {}

RespuestaModel.init(
  {
    idRespuesta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    texto: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    correcta: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    idPregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "pregunta",
  }
);


