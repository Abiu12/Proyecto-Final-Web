import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/database.config";
import NivelType from "../types/nivel.type";
import { InfanteModel } from "./infante.model";
import { LeccionModel } from "./leccion.model";


export class NivelModel extends Model<NivelType> {}

NivelModel.init(
  {
    idNivel: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true /**Es incrementable */
    },
    estado: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idInfante: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "nivel",
  }
);

NivelModel.hasMany(LeccionModel,
  {
    foreignKey:"idNivel",
    sourceKey:"idNivel",
  }
);


