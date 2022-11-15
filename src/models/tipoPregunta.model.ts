import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import TipoPreguntaType from "../types/tipoPregunta.type";


export class TipoPreguntaModel extends Model<TipoPreguntaType> {}

TipoPreguntaModel.init(
  {
    idTipoPregunta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    tipoPregunta: {
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



